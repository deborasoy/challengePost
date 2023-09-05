
const URL = "https://jsonplaceholder.typicode.com/users";
const btn = document.getElementById("submit");
let user ;
btn.addEventListener("click", (e) => {
    //evento click al boton, para activar funcion con que envia datos y los muestra en consola
    e.preventDefault(); //previene no perder los datos al cargar la pagina
    const nombre = document.querySelector("#name").value;
    const apellido = document.getElementById("lastname").value;
    const fecha = document.querySelector("#date").value;
     user =  { nombre, apellido, fecha };
    
    getHttp(); //funcion fetch
    //añadir a los parrafos los datos enviados
    const pNombre = document.getElementById("nomP");
    const pLastname = document.getElementById("lasnP");
    const pDate = document.getElementById("dateP");

    pNombre.innerHTML = nombre
    pLastname.innerHTML = apellido
    pDate.innerHTML = fecha
}) 
//segundo parametro del fetch que diferencia entre el metodo get y el post. EN el post le aclaramos el metodo 
const optionsPost = {
    method: "POST",
    body: JSON.stringify(user),
    //serializar sus datos: JSON.stringify() garantiza y convierte los datos JSON  a formato de cadena.
    headers: {
                "Content-type": "application/json; charset=UTF-8" //tipo de contenido
            }
    }
    
    //usando metodo POST
//recibirás un cuerpo de respuesta conteniendo el objeto de publicación del post junto con una nueva ID.
async function getHttp() {
    const response = await fetch(URL, optionsPost) //segundo parametros aclarando Metodo POST y requerimientos del metodo
    if (!response.ok) throw new Error('Error', response.status)
    const data = await response.json()
        console.log('Todo exitoso', user)
        console.log(data)
};

    

//Prueba con otra forma de realizar el fetch
/*function getHttp() {
    fetch(URL, optionsPost)
        .then(response => {
            if (!response.ok) {
                throw Error('Error', response.status);
            }
            return response.json();
        }).then(data => {
            console.log('Todo okey', user);
            console.log(data)
        })
        .catch(error => {
            console.log('Error', error);
        })
};*/

 
   
    