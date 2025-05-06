const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById ('searchButton')
const bookContainer = document.getElementById ('bookContainer')

searchButton.addEventListener('click', (event) => {
    event.preventDefault()
    const query = searchInput.value.toLowerCase().trim();
    if (!query) return;
    fetchBooks (query)

})

function fetchBooks (query) {
    const livros = [
   
        {
            img:'./assets/livro1.jpg',
            titulo: 'Ponto de Inflexão',
            categoria: 'Desenvolvimento Pessoal',
            preco: 69.99,
            desconto: true
            
        },
        {
            img:'./assets/livro2.jpg',
            titulo: 'O poder do aprendizado contínuo',
            categoria: 'Desenvolvimento Pessoal',
            preco: 69.99,
            desconto: true
            
        },
        {
            img:'./assets/livro3.jpg',
            titulo: '+ esperto que o diabo',
            categoria: 'Desenvolvimento Pessoal',
            preco: 69.99,
            desconto: true
            
        },
        {
            img:'./assets/livro4.jpg',
            titulo: 'O que se come no céu',
            categoria: 'Desenvolvimento Pessoal',
            preco: 69.99,
            desconto: true
            
        },
        {
            img:'./assets/livro5.jpg',
            titulo: 'A psicologia financeira',
            categoria: 'Desenvolvimento Pessoal',
            preco: 69.99,
            desconto: true
            
        },
        {
            img:'./assets/livro6.jpg',
            titulo: 'Ponto de Infleção',
            categoria: 'A meta',
            preco: 69.99,
            desconto: true
            
        }
    ]
    
    const livrosFiltrados = livros.filter(item => 
        item.titulo.toLowerCase().includes(query) || 
        item.categoria.toLowerCase().includes(query)

    )

    if (livrosFiltrados.length===0) {
        bookContainer.innerHTML = '<h1>Nenhum livro encontrado</h>'
        return
    }

    bookContainer.innerHTML = livrosFiltrados.map (item => {
        return`
            <div class="div-card">
                <div class="div-img">
                    <img src=${item.img} alt="capa do livro">
                    <p class="tag-p">frete grátis</p>
                </div>
                <div class="div-texto">
                    <div class="div-titulo">
                        <h1>${item.titulo}</h1>
                        <button>+</button>
                    </div>
                    <h2><a href="">${item.categoria}</a></h2>
                    <p>R$ ${item.preco}</p>
                </div>
            </div>
                `
    
    }).join('')

}

