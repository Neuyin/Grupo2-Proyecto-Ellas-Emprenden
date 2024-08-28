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

//Agregar un nuevo elemento a la base de datos
function agregarCategoria(nuevaCategoria) {
    fetch('../data/categorias.json')
        .then(response => response.json())
        .then(categorias => {
            categorias.push(nuevaCategoria);
            console.log('Categoría agregada:', nuevaCategoria);
            // Aquí se podría enviar la nueva lista de categorías a un backend para guardarla en el archivo JSON
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

// Ejemplo de uso
const nuevaCategoria = {
    id: 4,
    nombre: "Educación y tutoría",
    descripcion: "Incluye servicios de tutoría académica, clases particulares, cursos online, etc.",
    imagen: "../images/educacion.jpg"
};
agregarCategoria(nuevaCategoria);

//Almacenar en Storage
function guardarUsuario(nombreUsuario) {
    localStorage.setItem('usuario', nombreUsuario);
    alert('Usuario guardado en localStorage.');
}
guardarUsuario('Emprendedora123'); //Ejemplo

//Mostrar la información en la web: La función mostrarCategorias ya se encarga de mostrar las categorías en la web.