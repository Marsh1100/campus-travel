//Objetos
let clientes = [];


//Contendedores
const $main = document.getElementById('main-modulos');
///Modulos
const $mClientes = document.getElementById('modulo-clientes');
const $bAgregarCliente = document.getElementById('b-agregar-cliente');
const $vAgregarCliente =document.getElementById('agregar-cliente'); //v->Visualizar
const $tablaClientes = document.getElementById('template-clientes')

////Formulario cliente
let $documento = document.getElementById('id');
let $nombre = document.getElementById('nombre');
let $apellidos = document.getElementById('apellidos');
let $telefono = document.getElementById('telefono');
let $email = document.getElementById('email');
let $fechaNac = document.getElementById('fechaNac');
let $nacionalidad = document.getElementById('nacionalidad');


let $formClientes = document.getElementById('form-agregar-cliente') //formulario

//// Botones
const $botonClientes = document.getElementById('clientes');
const $botonRutas = document.getElementById('rutas');
const $botonCompraTiquete = document.getElementById('compra-tiquetes');
const $botonPuntos = document.getElementById('puntos');


$botonClientes.addEventListener('click',function(){
    $main.style.display='none';
    $mClientes.style.display='block';

});
$bAgregarCliente.addEventListener('click',function(){
    $mClientes.style.filter='blur(5px)';
    $vAgregarCliente.style.display='flex';
});
$formClientes.addEventListener('submit',function(e){
    e.preventDefault(); // Evitar el envío del formulario
    e.stopPropagation();

    
    //Creación de objeto cliente
    let newCliente ={};
    newCliente.id= $documento.value; 
    newCliente.nombre= $nombre.value; 
    newCliente.apellidos= $apellidos.value; 
    newCliente.telefono= $telefono.value; 
    newCliente.email= $email.value; 
    newCliente.fechaNac= $fechaNac.value; 
    newCliente.nacionalidad= $nacionalidad.value; 
    console.log(newCliente);
    //Asignación a clientes
    clientes.push(newCliente);
    listaClientes(clientes);
    //eventooalert

    $mClientes.style.filter='none';
    $vAgregarCliente.style.display='none';


});

//Función lista de clientes
function listaClientes(clientes){
    let contador =3;
    clientes.forEach(e => {
        let html =`<tr id="${e.id}">
                        <th scope="row">${contador}</th>
                        <td>${e.id}</td>
                        <td>${e.nombre}</td>
                        <td>${e.apellidos}</td>
                        <td>${e.telefono}</td>
                        <td>${e.email}</td>
                        <td>${e.fechaNac}</td>
                        <td>${e.nacionalidad}</td>
                        <td class="editDelete">
                            <button type="button" class="btn btn-warning bi bi-pencil-square" style="color: rgb(255, 255, 255);"></button>
                            <button type="button" class="btn btn-danger bi  bi-trash"></button>
                        </td>
                    </tr>`
        contador +=1;
        $tablaClientes.insertAdjacentHTML("afterend", html);
    });
    
}
