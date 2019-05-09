const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

fetch('https://reqres.in/api/users')
.then((response) => {
        return response.json();
})
.then((data) => {
    console.log(data)
        data.data.forEach(colaborador => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            card.setAttribute('id', colaborador.id)

            const h1 = document.createElement('h1');
            h1.textContent = colaborador.first_name + ' ' + colaborador.last_name;

            const p = document.createElement('p');
            p.textContent = colaborador.email;

            const btn = document.createElement('button');
            btn.textContent = '✖';
            btn.setAttribute('data-id', colaborador.id)

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p)
            card.appendChild(btn);

            btn.addEventListener('click', () => {
                const thisCard = btn.parentElement;
                const cardPai = thisCard.parentElement;

                fetch("https://reqres.in/api/users", {
                    method: 'DELETE',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'id': btn.getAttribute("data-id")
                    })
                })
                .then(()=>{
                    cardPai.removeChild(thisCard)
                })
            })
        })
})
.catch((erro) => {
    console.log(erro)
})
