document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita el envío del formulario

            const usuario = document.getElementById("usuario").value.trim();
            const contrasena = document.getElementById("contrasena-usuario").value;

            const usuarioCorrecto = "prueba@gmail.com";
            const contrasenaCorrecta = "123";

            if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
                window.location.href = "panel.html";  // Redirigir a panel.html
            } else if (usuario !== usuarioCorrecto) {
                alert("Correo electrónico incorrecto. Inténtelo de nuevo.");
            } else {
                alert("Contraseña incorrecta. Inténtelo de nuevo.");
            }
        });
    }
});

