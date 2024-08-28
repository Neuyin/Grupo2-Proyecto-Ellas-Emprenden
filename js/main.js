//ALERT solo de home
window.onload = function() {
    if (window.location.pathname.includes("index.html")) {
        alert("¡Bienvenid@ a nuestra plataforma de emprendedoras!");
    }
};

//Se agrega PROMPT en el formulario de inicio de sesión
document.getElementById("loginForm").onsubmit = function() {
    let username = prompt("Ingresa tu nombre de usuario:");
    let additionalInfo = prompt("Hola " + username + ", ¿Cuál es el principal desafío que has enfrentado en tu emprendimiento?");
    console.log("Usuario: " + username + ", Desafío: " + additionalInfo);
    return true;
};



//PROMPT: entrada de datos
//let nombreIngresado = prompt("Ingrese su nombre");
//console.log(nombreIngresado);

//Template literals ´${}´
