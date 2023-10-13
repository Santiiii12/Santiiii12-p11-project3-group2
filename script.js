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


//https://rickandmortyapi.com/api/character/?name=rick&status=alive

