const btn = document.getElementById("submit");
const URL = "https://jsonplaceholder.typicode.com/users";
  btn.addEventListener("click", (e) => {
    //evento click al boton, almacenar datos, mostrar en pantalla
      e.preventDefault(); //previene no perder los datos al cargar la pagina
      const nombre = document.querySelector("#name").value;
      const apellido = document.getElementById("lastname").value;
      const fecha = document.querySelector("#date").value;
      const user = {
        nombre,
        apellido,
        fecha,
    
      }
       //segundo parametro del fetch que diferencia entre el metodo get y el post. EN el post le aclaramos el metodo 
   //serializar sus datos: JSON.stringify() garantiza y convierte los datos JSON  a formato de cadena.
      const optionsPost = {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
              "Content-type": "application/json; charset=UTF-8" //tipo de contenido
          }
      };

        //usando metodo POST
   //recibirás un cuerpo de respuesta conteniendo el objeto de publicación del post junto con una nueva ID.
    /*async function getHttp() {
     const response = await fetch(URL, optionsPost) //segundo parametros aclarando Metodo POST y requerimientos del metodo
     if (!response.ok) throw new Error('Error', response.status)
     const data = await response.json()
          console.log('Todo exitoso', data)
      };*/
       //Prueba con otra forma de realizar el fetch
   function getHttp() {
    fetch(URL, optionsPost)
        .then(response => {
            if (!response.ok) {
                throw Error('Error', response.status);
            }
            return response.json();
        }).then(data => {
            console.log('Todo okey', data);
        })
        .catch(error => {
            console.log('Error', error);
        })
  };
   
      

     getHttp()
     //añadir a los parrafos los datos enviados
     const pNombre = document.getElementById("nomP");
     const pLastname = document.getElementById("lasnP");
     const pDate = document.getElementById("dateP");
    
     pNombre.innerHTML = nombre
     pLastname.innerHTML = apellido
     pDate.innerHTML = fecha
 });



   
    
    
   
    
   

   
    