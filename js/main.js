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

    // Validación de formulario de registro
    if (registerForm) {
        registerForm.onsubmit = function() {
            // Llamamos a la función de validación
            return validarFormularioRegistro();
        };
    }

    // Función útil para este proyecto: validar los datos
    function validarFormularioRegistro() {
        let nombre = document.getElementById("nombre").value.trim();
        let apellido = document.getElementById("apellido").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirm-password").value.trim();
        let terms = document.getElementById("terms").checked;

        // Validar que los campos no estén vacíos
        if (!nombre || !apellido || !email || !password || !confirmPassword) {
            alert("Por favor, completa todos los campos.");
            return false;
        }

        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden. Por favor, verifica e intenta de nuevo.");
            return false;
        }

        // Validar que se acepten los términos y condiciones
        if (!terms) {
            alert("Debes aceptar los términos y condiciones para registrarte.");
            return false;
        }

        alert("Registro exitoso. ¡Bienvenida a la plataforma!");
        return true;
    }
};