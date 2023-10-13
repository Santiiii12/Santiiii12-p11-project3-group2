const input = document.querySelector('input');
const button = document.querySelector('button');
const results = document.querySelector('.results');

button.addEventListener('click', (event) => {
    event.preventDefault();
    traerRickyMorty();
})
//GET
function traerRickyMorty() {
    const input = document.querySelector('input');

    fetch(input.value)
        .then((res) => {
            if (res.status === 200) {
              return res.json();
            } else if (res.status === 404) {
                results.innerHTML = '404 - Not Found';
                throw new Error('404 - Not Found');
            } else {
                results.innerHTML = 'Errore ' + res.status;
                throw new Error('Errore ' + res.status);
            }
        })
        .then((data) => {
            results.innerHTML = '';
            if (data.results.length === 0) {
                results.innerHTML = '404 - Not Found';
            } else {
                data.results.forEach(element => {
                    const json = JSON.stringify(element);
                    results.innerHTML +=`<p>200 OK---${json}</p>`;
                });
            }
        })
        .catch((error) => {
            results.innerHTML = `<p>${error.message}</p>`;
        });
}

/*
function inviaDati() {
    const characterName = input.value; // Recupera il nome dal campo di input

    const data = {
        name: characterName,
        status: "vivo" // Puoi personalizzare i dati da inviare
    };

    fetch('URL_API', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        if (res.status === 201) {
            return res.json();
        } else {
            throw new Error('Errore ' + res.status);
        }
    })
    .then((data) => {
        results.innerHTML = 'Operazione POST eseguita con successo.';
    })
    .catch((error) => {
        results.innerHTML = `<p>${error.message}</p>`;
    });
}

// Funzione per l'operazione PUT
function aggiornaDati() {
    const characterName = input.value; // Recupera il nome dal campo di input

    const data = {
        name: characterName,
        status: "morto" // Puoi personalizzare i dati da inviare
    };

    fetch('URL_API', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        if (res.status === 200) {
            return res.json();
        } else {
            throw new Error('Errore ' + res.status);
        }
    })
    .then((data) => {
        results.innerHTML = 'Operazione PUT eseguita con successo.';
    })
    .catch((error) => {
        results.innerHTML = `<p>${error.message}</p>`;
    });
}

// Funzione per l'operazione DELETE
function eliminaDati() {
    fetch('URL_API', {
        method: 'DELETE'
    })
    .then((res) => {
        if (res.status === 204) {
            results.innerHTML = 'Operazione DELETE eseguita con successo.';
        } else {
            throw new Error('Errore ' + res.status);
        }
    })
    .catch((error) => {
        results.innerHTML = `<p>${error.message}</p>`;
    });
}
//*

//traerRickyMorty();

//https://rickandmortyapi.com/api/character/?name=rick&status=alive






