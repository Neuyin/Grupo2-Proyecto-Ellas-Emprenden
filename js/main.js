window.onload = function() {
    // ALERT solo de home
    if (window.location.pathname.includes("index.html")) {
        alert("¡Bienvenid@ a nuestra plataforma de emprendedoras!");
    }

    // Se agrega PROMPT en el formulario de inicio de sesión
    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.onsubmit = function() {
            let username = prompt("¡Volviste! ¿Nos ayudas con una encuesta? Queremos mejorar nuestro servicio. Por favor ingresá tu nombre de usuario:");
            let additionalInfo = prompt("Hola " + username + ", ¿Cuál es el principal desafío que has enfrentado en tu emprendimiento? Gracias por responder.");
            console.log("Usuario: " + username + ", Desafío: " + additionalInfo);
            return true;
        };
    }

    // Alert para registro exitoso en la plataforma
    let registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.onsubmit = function() {
            console.log("Formulario de registro enviado."); //Para verificar funcionamiento
            alert("Registro exitoso. ¡Bienvenida a la plataforma!");
            return true;
        };
    }
};


//PROMPT: entrada de datos
//let nombreIngresado = prompt("Ingrese su nombre");
//console.log(nombreIngresado);

//Template literals ´${}´
