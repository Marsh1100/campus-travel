//Objetos
let clientes = [
    {
        id: 55555555,
        nombre: 'Mariana', 
        apellidos: 'Casas Orozco',
        telefono:3001234578, 
        email: 'mario@gmail.com',
        fechaNac: '14/06/2000',
        nacionalidad: 'España',
        puntos:0},

    {
        id: 987654321,
        nombre: 'Javier Noel', 
        apellidos: 'Páez',
        telefono:3001234578, 
        email: 'mario@gmail.com',
        fechaNac: '14/06/2000',
        nacionalidad: 'Colombia',
        puntos:0},

    {
        id: 654321987,
        nombre: 'Camila', 
        apellidos: 'Páez',
        telefono:3001234578, 
        email: 'camila@gmail.com',
        fechaNac: '14/06/2000',
        nacionalidad: 'Colombia',
        puntos:0}

];

let rutas = [
    {
        id:12345,
        nombreRuta: 'Bucaramanga-Bogotá',
        ciudadOrigen: 'Bucaramanga',
        ciudadDestino: 'Bogotá',
        valorTiquete: 125965,
        puntosRuta: 50,
    },
    {
        id:456789,
        nombreRuta: 'Bucaramanga-Cartagena',
        ciudadOrigen: 'Bucaramanga',
        ciudadDestino: 'Cartagena',
        valorTiquete: 100000,
        puntosRuta: 80,
    },
    {
        id:142345,
        nombreRuta: 'Bucaramanga-Barranquilla',
        ciudadOrigen: 'Bucaramanga',
        ciudadDestino: 'Barranquilla',
        valorTiquete: 350000,
        puntosRuta: 90,
    }
];
//INICIO
const $main = document.getElementById('main-modulos');
const $inicio = document.getElementById('inicio');

//// Botones
const $botonPuntos = document.getElementById('puntos');
///CLIENTES
const $botonClientes = document.getElementById('clientes');
const $mClientes = document.getElementById('modulo-clientes');

const $bAgregarCliente = document.getElementById('b-agregar-cliente');
const $vAgregarCliente =document.getElementById('agregar-cliente'); //v->Visualizar
const $vEditarCliente =document.getElementById('editar-cliente'); //v->Visualizar

const $tablaClientes = document.getElementById('template-clientes')

const $bBuscarCliente = document.getElementById('b-buscar-cliente');
////Formulario buscar
let $buscar = document.getElementById('buscar');

////Formulario cliente Agregar
let $documento = document.getElementById('id');
let $nombre = document.getElementById('nombre');
let $apellidos = document.getElementById('apellidos');
let $telefono = document.getElementById('telefono');
let $email = document.getElementById('email');
let $fechaNac = document.getElementById('fechaNac');
let $nacionalidad = document.getElementById('nacionalidad');
////Formulario cliente Editar
let $documentoE = document.getElementById('idE');
let $nombreE = document.getElementById('nombreE');
let $apellidosE = document.getElementById('apellidosE');
let $telefonoE = document.getElementById('telefonoE');
let $emailE = document.getElementById('emailE');
let $fechaNacE = document.getElementById('fechaNacE');
let $nacionalidadE = document.getElementById('nacionalidadE');


let $formClientesA = document.getElementById('form-agregar-cliente') //formulario agregar
let $formClientesE = document.getElementById('form-editar-cliente') //formulario editar

const $volverClientesA = document.getElementById('b-volver-cliente');
const $volverClientesE = document.getElementById('b-volver-cliente2');

$inicio.addEventListener('click',function(){
    
    $mClientes.style.display='none';
    $mRutas.style.display='none';
    $mCompras.style.display='none';
    $main.style.display='flex';


});
$volverClientesA.addEventListener('click',function(){
    $mClientes.style.filter='none';
    $vAgregarCliente.style.display='none';   
});
$volverClientesE.addEventListener('click',function(){
    $mClientes.style.filter='none';
    $vEditarCliente.style.display='none';   
});

$botonClientes.addEventListener('click',function(){
    $main.style.display='none';
    $mClientes.style.display='flex';
    $mClientes.style.alignItems='center';

    listaClientes(clientes);
});
$bAgregarCliente.addEventListener('click',function(){
    $mClientes.style.filter='blur(5px)';
    $vAgregarCliente.style.display='flex';
});

//Buscar clientes
$bBuscarCliente.addEventListener('submit',function(e){
    e.preventDefault(); // Evitar el envío del formulario
    e.stopPropagation();

    let listaBuscar = [];
    let clienteBuscar = $buscar.value.toUpperCase();
    console.log(clienteBuscar)

    if(clienteBuscar==''){
        listaClientes(clientes);
        return
    }
    //Se recorre la lista de clientes buscando coincidencias 
    clientes.forEach(function(e){
        let nombre = e.nombre.toUpperCase();
        let apellidos = e.apellidos.toUpperCase();
        let id = e.id;
        console.log(id)

        if(nombre.includes(clienteBuscar) || apellidos.includes(clienteBuscar)|| String(id).includes(clienteBuscar)){
            listaBuscar.push(e)
        }
    });

    if(listaBuscar.length>0){
        listaClientes(listaBuscar);
    }else{
        Swal.fire({
            //title: 'Sweet!',
            text: 'No hay coincidencias para su busqueda...',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/3746/3746929.png',
            imageWidth: 200,
            imageAlt: 'Custom image',
        })
    }
});
//Formulario Agregar Clientes
$formClientesA.addEventListener('submit',function(e){
    e.preventDefault(); // Evitar el envío del formulario
    e.stopPropagation();
    //Creación de objeto cliente
    let newCliente ={};
    newCliente.id= Number($documento.value); 
    newCliente.nombre= $nombre.value; 
    newCliente.apellidos= $apellidos.value; 
    newCliente.telefono= $telefono.value; 
    newCliente.email= $email.value; 
    newCliente.fechaNac= $fechaNac.value; 
    newCliente.nacionalidad= $nacionalidad.value; 
    newCliente.puntos = 0;
    console.log(newCliente);
    
    //Asignación a clientes
    clientes.push(newCliente);
    
    //Función para visualizar
    listaClientes(clientes);
    //eventooalert

    $mClientes.style.filter='none';
    $vAgregarCliente.style.display='none';

    $formClientesA.reset();

});

//Función lista de clientes
function listaClientes(clientes){
    $tablaClientes.innerHTML="";
    let contador = 1;
    clientes.forEach(e => {
        let html =`<tr>
                        <th scope="row">${contador}</th>
                        <td>${e.id}</td>
                        <td>${e.nombre}</td>
                        <td>${e.apellidos}</td>
                        <td>${e.telefono}</td>
                        <td>${e.email}</td>
                        <td>${e.fechaNac}</td>
                        <td>${e.nacionalidad}</td>
                        <td class="editDelete">
                            <button id="D${e.id}" type="button" class="btn btn-warning bi bi-pencil-square" style="color: rgb(255, 255, 255);"></button>
                            <button id="${e.id}" type="button" class="btn btn-danger bi bi-trash"></button>
                        </td>
                    </tr>`
        contador +=1;
        $tablaClientes.insertAdjacentHTML("beforeend", html);
    });   
};

//Función eliminar
document.addEventListener('click',function(event){

    let targetId=event.target.id
    clientes = clientes.filter(function(element){
                return String(element.id) != targetId
                } );
    listaClientes(clientes)   
    
    // try {
    //     if(document.getElementById(event.target.id).className == 'btn btn-danger bi bi-trash'){
            
    //         let targetId = document.getElementById(event.target.id).parentNode.parentNode.id;
    //         //filter hace una copia...
    //         clientes = clientes.filter(function(element){
    //             return String(element.id) != targetId
    //         } );
    //         listaClientes(clientes)   
    //     }
    // } catch (error) {
        
    // }
});

//Formulario Editar clientes
$formClientesE.addEventListener('submit',function(e){
    e.preventDefault(); // Evitar el envío del formulario
    e.stopPropagation();
    //Creación de objeto cliente
    let editCliente ={};
    editCliente.id= $documentoE.value; 
    editCliente.nombre= $nombreE.value; 
    editCliente.apellidos= $apellidosE.value; 
    editCliente.telefono= $telefonoE.value; 
    editCliente.email= $emailE.value; 
    editCliente.fechaNac= $fechaNacE.value; 
    editCliente.nacionalidad= $nacionalidadE.value; 
    console.log(editCliente);

    clientes.forEach(function(element,index){
        if(String(element.id) == editCliente.id){
            clientes.splice(index,1,editCliente);
        }
    });
    listaClientes(clientes);
    $mClientes.style.filter='none';
    $vEditarCliente.style.display='none';

    $formClientesE.reset;

});
//Función editar
document.addEventListener('click',function(event){
    try {
        if(document.getElementById(event.target.id).className == 'btn btn-warning bi bi-pencil-square'){
            let targetId = document.getElementById(event.target.id).parentNode.parentNode.id;
            
            $mClientes.style.filter='blur(5px)';
            $vEditarCliente.style.display='flex';

            clientes.forEach(function(element){
                if(targetId == String(element.id)){
                    $documentoE.value = element.id;
                    $nombreE.value = element.nombre;
                    $apellidosE.value = element.apellidos;
                    $telefonoE.value = element.telefono;
                    $emailE.value = element.email;
                    $fechaNacE.value = element.fechaNac;
                    $nacionalidadE.value = element.nacionalidad;
                }
            });      
        }
    } catch (error) {
        
    }
});

//RUTAS
const $botonRutas = document.getElementById('rutas');
const $mRutas = document.getElementById('modulo-rutas');
const $bAgregarRuta = document.getElementById('b-agregar-ruta');
const $vAgregarRuta = document.getElementById('agregar-ruta');

const $tarjetasRutas = document.getElementById('lista-rutas');

const $formAgregarRuta = document.getElementById('form-agregar-ruta');

//Formulario Rutas
let $nombreRuta = document.getElementById('nombre-ruta');
let $valorTRuta = document.getElementById('valorT-ruta');
let $origenRuta = document.getElementById('origen-ruta');
let $destinoRuta = document.getElementById('destino-ruta');
let $puntosRuta = document.getElementById('puntos-ruta');

$botonRutas.addEventListener('click',function(){
    $main.style.display='none';
    $mRutas.style.display='flex';

    listaRutas(rutas);
});

$bAgregarRuta.addEventListener('click',function(){
    $mRutas.style.filter='blur(5px)';
    $vAgregarRuta.style.display='flex';
});
const $volverRutas = document.getElementById('b-volver-ruta');

$volverRutas.addEventListener('click',function(){
    $vAgregarRuta.style.display='none';
    $mRutas.style.filter='none';
});

//Formulario agregar Rutas
$formAgregarRuta.addEventListener('submit',function(e){
    e.preventDefault(); // Evitar el envío del formulario
    e.stopPropagation();

    //Creación de objeto cliente
    let newRuta ={};
    newRuta.id = uuid.v1(); //ID aleatorio
    newRuta.nombreRuta= $nombreRuta.value; 
    newRuta.valorTiquete= Number($valorTRuta.value); 
    newRuta.ciudadOrigen= $origenRuta.value; 
    newRuta.ciudadDestino= $destinoRuta.value; 
    newRuta.puntosRuta = Number($puntosRuta.value);
    //Asignación a Rutas
    rutas.push(newRuta);

    //Función para visualizar las rutas 
    //pendientee
    listaRutas(rutas);

    $mRutas.style.filter='none';
    $vAgregarRuta.style.display='none';

    $formAgregarRuta.reset;
});

//Función lista de rutas+
function listaRutas(rutas){
    $tarjetasRutas.innerHTML = "";

    rutas.forEach(e =>{
        let html= `<div id="T${e.id}" class="tarjetaRuta">
                <h4>${e.nombreRuta}</h4>
                <img src="img/ruta.png" alt="destino" class="img">
                <p><b>Ciudad de origen: </b>${e.ciudadOrigen}</p>
                <p><b>Ciudad de destino:</b> ${e.ciudadDestino}</p>
                <p>$${e.valorTiquete}</p>
                <div class="estrella"><img src="img/estrella2.png" alt="Puntos" class="img-puntos"></div>
                <p><b>Puntos:</b>${e.puntosRuta}</p>
                <button class="eliminarRuta">
                    <img src="img/eliminar.png" alt="eliminar" class="imgBorrarRuta" id="D${e.id}">
                </button>
            </div>`
        $tarjetasRutas.insertAdjacentHTML("beforeend", html);

    });
}

//Función eliminar-ruta
document.addEventListener('click',function(event){
    
    try {
        if(document.getElementById(event.target.id).className == 'imgBorrarRuta'){
            
            let targetId = document.getElementById(event.target.id).parentNode.parentNode.id;
            rutas = rutas.filter(function(element){
                return element.id != targetId
            });
            listaRutas(rutas);
        }
    } catch (error) {
        
    }
    
});

//MODULO-COMPRA TIQUETES
const $botonCompraTiquete = document.getElementById('compra-tiquetes');
const $mCompras = document.getElementById('modulo-compra');
const $comprar = document.getElementById('cliente-seleccionado');

let $bBuscarClienteC = document.getElementById('b-buscar-clienteC');
////Formulario buscar
let $buscarC = document.getElementById('buscarC');
const $tablaClientesC = document.getElementById('template-clientesC')


//Seleccionar radio
const $bSeleccionarCLiente = document.getElementById('botonSeleccionar');

const $vCompraCliente =document.getElementById('cliente-compra');
const $botonConfirmarCompra = document.getElementById('btn-comprar-tiquete');

$botonCompraTiquete.addEventListener('click',function(){
    $main.style.display='none';
    $mCompras.style.display='flex';

    listaClientesC(clientes);

});

//Rutas
$seleccionarRuta = document.getElementById('seleccionarRuta');
//Precio


//Buscar clientes compra
$bBuscarClienteC.addEventListener('submit',function(e){
    e.preventDefault(); // 
    e.stopPropagation();

    let listaBuscar = [];
    let clienteBuscar = $buscarC.value.toUpperCase();
    console.log(clienteBuscar)

    if(clienteBuscar==''){
        listaClientesC(clientes);
        return
    }
    //Se recorre la lista de clientes buscando coincidencias 
    clientes.forEach(function(e){
        let nombre = e.nombre.toUpperCase();
        let apellidos = e.apellidos.toUpperCase();
        let id = e.id;
        console.log(id)

        if(nombre.includes(clienteBuscar) || apellidos.includes(clienteBuscar)|| String(id).includes(clienteBuscar)){
            listaBuscar.push(e)
        }
    });

    if(listaBuscar.length>0){
        listaClientesC(listaBuscar);
    }else{
        Swal.fire({
            //title: 'Sweet!',
            text: 'No hay coincidencias para su busqueda...',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/3746/3746929.png',
            imageWidth: 200,
            imageAlt: 'Custom image',
        })
    }
});

function listaClientesC(clientes){
    $tablaClientesC.innerHTML="";
    let contador = 1;
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
                        <td class="seleccionarRadio">
                            <p><input type="radio" name="seleccionar" value="${e.id}"></p>
                        </td>
                    </tr>`
        contador +=1;
        $tablaClientesC.insertAdjacentHTML("beforeend", html);
    }
)};

//Llenar dinámicamente el select de la ruta
function rutasSelector(){
    $seleccionarRuta.innerHTML = '<option selected>Seleccionar ruta</option>';
    rutas.forEach(opcionRuta =>{
        const opcion = document.createElement('option');
        opcion.value = opcionRuta.nombreRuta;
        opcion.textContent = opcionRuta.nombreRuta ;
    
        $seleccionarRuta.appendChild(opcion);
    })
}


//Seleccionar ruta
$seleccionarRuta.addEventListener('input', function(e){
    let ruta=e.target.value;
    if(ruta != 'Seleccionar ruta'){
        rutas.forEach(function(e){
            if(e.nombreRuta == ruta){
                console.log(e.id);
                console.log(e.nombreRuta);
                let costoRuta = e.valorTiquete;
                let iva = costoRuta*0.16;
                let tasaAeroportuaria = costoRuta*0.04;
                let total = costoRuta+iva+tasaAeroportuaria;

                let html = ` <p><b>Costo ruta: $</b>${costoRuta}</p>
                <p><b>IVA: $</b>${iva}</p>
                <p><b>Tasa aeroportuaria: $</b>${tasaAeroportuaria}</p>
                <p><b>TOTAL: $</b>${total}</p>
                <button id="${e.id}"type="button" class="btn btn-primary confirmar" type="submit">Confirmar compra</button>`;
                document.getElementById('costos-impuestos').innerHTML = html;
                return
            }
        });
    }else{
        let html = ` <p><b>Costo ruta: $</b></p>
                <p><b>IVA: $</b></p>
                <p><b>Tasa aeroportuaria: $</b></p>
                <p><b>TOTAL: </p>`;
        document.getElementById('costos-impuestos').innerHTML = html;
    }
    

});

function obtenerIdCliente(){
    let clientesId = document.getElementsByName('seleccionar');
    for (var i = 0; i < clientesId.length; i++){ 
       if (clientesId[i].checked) {
          break; 
      }
    }
    if(clientesId.length != i){
        return  clientesId[i].value;

    }else{
        Swal.fire({
            //title: 'Sweet!',
            text: 'Por favor selecciona un cliente',
        })
        return
    }
}


//Seleccionar cliente para la compra
$bSeleccionarCLiente.addEventListener('click',function(e){
    e.preventDefault(); // 
    e.stopPropagation();
    
    rutasSelector()
    let clienteId = obtenerIdCliente();

    //Coincidencia del id
    clientes.forEach(function(e){
            if(e.id == Number(clienteId)){
                $comprar.innerHTML = e.nombre+" "+ e.apellidos;
                $vCompraCliente.style.display='block';
                return
            }
    });
  
  
   /*let clienteComprar = document.createElement("h4");
   let texto = document.createTextNode(`${clienteId}`);
   clienteComprar.appendChild(texto)*/
});

function unselect(){
    document.querySelectorAll('[name=seleccionar]').forEach((x) => x.checked=false);
  }

//Confirmar compra
document.addEventListener('click',function(event){
    try {
        let idRutas = event.target.id;
        console.log(idRutas)
        if(document.getElementById(event.target.id).className.includes('confirmar')){
            console.log("confirmarrrrr")
            console.log(idRutas)
            rutas.forEach(function(e){
                if(e.id == idRutas ){
                    console.log('wwwwww')
                    let puntos =  e.puntosRuta;
                    console.log(puntos)
                    let clienteId = obtenerIdCliente();

                    clientes.forEach(function(a){
                        if(a.id == clienteId){
                            a.puntos+= puntos;
                            return
                        }
                    });
                    return
                }
            });  
            Swal.fire({
                text:'¡Compra realizada exitosamente!',
                imageUrl: 'https://cdn-icons-png.flaticon.com/512/148/148767.png',
                imageWidth: 200,
                imageAlt: 'Custom image'
            });
            $vCompraCliente.style.display='none';
            unselect();
            rutasSelector();
            let html = ` <p><b>Costo ruta: $</b></p>
                <p><b>IVA: $</b></p>
                <p><b>Tasa aeroportuaria: $</b></p>
                <p><b>TOTAL: </p>`;
             document.getElementById('costos-impuestos').innerHTML = html;

        }    
    } catch (error) {
        
    }
   
});



