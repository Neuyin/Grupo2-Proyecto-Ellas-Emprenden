// Leer y mostrar categorías desde el archivo JSON
fetch('../data/categorias.json')
    .then(response => response.json())
    .then(data => {
        mostrarCategorias(data);
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

function mostrarCategorias(categorias) {
    const container = document.querySelector('.carousel-inner');
    let slides = '';

    categorias.forEach((categoria, index) => {
        slides += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <div class="cards-wrapper">
                    <div class="card" style="width: 18rem;">
                        <img src="${categoria.imagen}" class="card-img-top" alt="${categoria.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${categoria.nombre}</h5>
                            <p class="card-text">${categoria.descripcion}</p>
                            <a href="#" class="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = slides;
}