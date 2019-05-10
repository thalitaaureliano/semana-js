const button = document.querySelector(".btn-search-movie");

button.addEventListener('click', (evento) =>{
    evento.preventDefault();

    const filmes = document.querySelector(".form");
    const texto = document.getElementById("movie");
    console.log(texto)

    fetch(`http://www.omdbapi.com/?s=${texto.value}&apikey=c4715b31`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        filmes.innerHTML="";

        data.search.forEach(filme => {
            console.log(filme)

            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            filmes.appendChild(box);
            
            const imagem = document.createElement('img');
            box.appendChild(imagem);
            imagem.src = filmes.poster;
            
        }) 
    })
    .catch((erro) => {
        console.log(erro)
    })
})