const input = document.querySelector('input');
const button = document.querySelector('button');
const results = document.querySelector('.results');

button.addEventListener('click', (event) => {
    event.preventDefault();
    traerRickyMorty();
})

function buscar() {
    
}

function traerRickyMorty() {
    const input = document.querySelector('input');
    
    fetch(input.value)
        .then((res) => res.json())
        .then((data) => {

            data.results.forEach(element => {
                const json = JSON.stringify(element);
                results.innerHTML = `<p>${json}</p>`;
            });

        })

}

//traerRickyMorty();

//https://rickandmortyapi.com/api/character/?name=rick&status=alive






