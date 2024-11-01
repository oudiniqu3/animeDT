

btBusca.addEventListener('click',procura)

function procura(){
    let txAnimeProcurado = document.querySelector('#txAnimeProcurado').value


    fetch(`https://api.jikan.moe/v4/anime?q=${txAnimeProcurado}`)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        const listaAnimes = json.data;
        const animes = listaAnimes.filter( anime =>anime.title.toUpperCase().includes(txAnimeProcurado.toUpperCase()))
        console.log(animes)
        tabelaAnime.innerHTML=''

        animes.forEach(anime=>{
            let linha = document.createElement('tr')
        
            linha.innerHTML = `
            <td><img src="${anime.images.jpg.image_url}"</td>
            <td>${anime.title}</td>
            <td>${anime.genres[0].name}<br>${anime.genres[1].name}<br>${anime.genres[2].name}</td>
            <td>${anime.synopsis}</td>
            <td>${anime.score}</td>
            <td>${anime.aired.string}</td>
            <td>${anime.rating}<td>
            
            `
            
    
            tabelaAnime.appendChild(linha)

            
        })

    });
    }



/*
`
titulo = ${data.data[0].title}
genero=${data.data[0].type}
id="descricao">${data.data[0].synopsis}
id="nota">${data.data[0].rating}
id="ano">${data.data[0].year}
imagem= */