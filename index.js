const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById ('searchButton')
const bookContainer = document.getElementById ('bookContainer')
const metaLivros = document.getElementById('metaLivros')

searchButton.addEventListener('click', (event) => {
    event.preventDefault()
    const query = searchInput.value.toLowerCase().trim();
    if (!query) return;
    fetchBooks (query)

})

function fetchBooks (query) {
    fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&language=por`)
    .then(res => res.json())
    .then(dados => {
        const livrosFiltrados = dados.docs.filter(item =>
        item.language.includes('por') && item.language.includes(`eng`)
    ).slice(0,10);

        if (livrosFiltrados.length===0) {
            bookContainer.innerHTML = '<h1>Nenhum livro encontrado</h>'
            return
        }

        bookContainer.innerHTML = livrosFiltrados.map (item => {
            const urlImagem = `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
            return`
                <div class="div-card">
                    <div class="div-img">
                        <img src='${urlImagem}'alt="capa do livro">
                        <p class="tag-p">frete grátis</p>
                    </div>
                    <div class="div-texto">
                        <div class="div-titulo">
                            <h1 class= "truncade text-xs font-bold w-full">${item.title}</h1>
                        </div>
                        <h2 class="my-2">${item.author_name}</a></h2>
                        <button onclick='adicionarLivro${urlImagem}' class="rounded-md flex justify-center w-full h-5 p-1 border border-blue-500"><i class="text-blue-500 fa-solid fa-plus"></i></button>
                        
                    </div>
                </div>
            `}).join('')
    })

    .catch(erro =>{
        console.log('Erro ao buscar livros:',erro)
        bookContainer.innerHTML = '<p>Erro ao buscar livro</p>'
    })
}
function adicionarLivro () {
    metaLivros.innerHTML += `
     <div class="div-card">
                    <div class="div-img w-[60px]">
                        <img src='${capa}'alt="capa do livro" class="w-[150px] d-block h-auto">`
}

