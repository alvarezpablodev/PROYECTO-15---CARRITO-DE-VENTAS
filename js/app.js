//Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];






//cargarEventos

listaCursos.addEventListener('click',agregarCurso);
vaciarCarritoBtn.addEventListener('click',vaciarCarrito);
carrito.addEventListener('click',eliminarCurso);


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

     limpiarHTML();
    const infoCurso = {
         imagen: curso.querySelector('img').src,
         titulo: curso.querySelector('h4').textContent,
         precio: curso.querySelector('.precio span').textContent,
         id: curso.querySelector('a').getAttribute('data-id'), 
         cantidad: 1
    }

    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id)
    if (existe) {
     const cursos = articulosCarrito.map(curso => {
          if (curso.id === infoCurso.id) {
               curso.cantidad++;
               return curso;
          }else{
               return curso;
          }
     });

     articulosCarrito = [...cursos];
    
     
     }else{
          articulosCarrito = [...articulosCarrito,infoCurso];
     }
    console.log(articulosCarrito);

    carritoHTML();
}

function eliminarCurso(e){
     const cursoID = e.target.getAttribute('data-id');
     articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoID);

     carritoHTML();

     

}

function carritoHTML() {

    limpiarHTML();

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
     articulosCarrito = [];
     limpiarHTML();
}


function limpiarHTML(){
    
    while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}