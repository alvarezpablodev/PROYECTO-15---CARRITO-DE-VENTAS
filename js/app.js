//Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];






//cargarEventos

listaCursos.addEventListener('click',agregarCurso);


//Funciones
function agregarCurso(e) {
    e.preventDefault();
    // Delegation para agregar-carrito
    if (e.target.classList.contains('agregar-carrito')) {
         const cursoSeleccionado = e.target.parentElement.parentElement;
         // Enviamos el curso seleccionado para tomar sus datos
         leerDatosCurso(cursoSeleccionado);
    }
}

//leer los datos del curso
function leerDatosCurso(curso) {
    const infoCurso = {
         imagen: curso.querySelector('img').src,
         titulo: curso.querySelector('h4').textContent,
         precio: curso.querySelector('.precio span').textContent,
         id: curso.querySelector('a').getAttribute('data-id'), 
         cantidad: 1
    }
    articulosCarrito = [...articulosCarrito,infoCurso];
    console.log(articulosCarrito);

    carritoHTML();
}



function carritoHTML() {

     vaciarCarrito();

     articulosCarrito.forEach(curso => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>
                    <img src="${curso.imagen}" width = 100px> 
               </td>
               <td> ${curso.titulo} </td>
               <td> ${curso.precio} </td>
               <td> ${curso.cantidad} </td>
               <td> <a href = "#" class="borrar-curso" data-id= ${curso.id} > X </a> </td>

          `;
          contenedorCarrito.appendChild(row);
     });

}




function vaciarCarrito(){
    
    while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}