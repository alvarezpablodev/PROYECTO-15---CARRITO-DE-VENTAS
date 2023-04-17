//variables

// const carrito = document.querySelector('');
// const vaciarCarritoBtn = document.querySelector('');
// const agregarCarrito = document.querySelector('');
const listaCursos = document.querySelector('#lista-cursos');



//cargarEventos

listaCursos.addEventListener('click',AgregarCurso);


//Funciones

//Funcion AgregarCurso
function AgregarCurso(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        console.log('aaa');
        
    }
}