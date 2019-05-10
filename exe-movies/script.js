const button = document.querySelector(".btn-search-movie");
const texto = document.getElementById("movie");
const containerMovies = document.querySelector('.movies');
const form = document.querySelector(`.form`);

console.log(texto)

button.addEventListener('click', (evento) =>{
    evento.preventDefault();


    fetch(`http://www.omdbapi.com/?s=${texto.value}&apikey=c4715b31`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)

        data.Search.forEach(filme => {
            console.log(filme)

            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            containerMovies.appendChild(box);

            
            const imagem = document.createElement('img');
            imagem.setAttribute('src', filme.Poster)
            box.appendChild(imagem);

            const boxDivider = document.createElement('div');
            boxDivider.setAttribute('class', 'box-divider');
            box.appendChild(boxDivider);

            const p = document.createElement('p');
            boxDivider.appendChild(p);

            const spanTitulo = document.createElement('span');
            spanTitulo.innerHTML = `${filme.Title} (${filme.Year})`;
            p.appendChild(spanTitulo);

            const pType = document.createElement('p');
            pType.innerHTML = filme.Type;
            p.appendChild(pType);
            
            button.addEventListener('click', () => {
                box.remove();
            })

            form.reset();

        }) 
    })
    .catch((erro) => {
        console.log(erro)
    })
})