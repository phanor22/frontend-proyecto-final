// Define la URL del backend (servidor donde está corriendo la API)
const backendURL = "https://backend-project-final-u20l.onrender.com";  // Cambia la URL si tu backend tiene otra dirección

// Obtener los items
async function fetchItems() {
    const response = await fetch(`${backendURL}/items`);
    const Cliente = await response.json();
    // document.getElementById("items").innerHTML = items.map(item => `<li>${item.name}</li>`).join('');
}






// async function addCliente() {
//     const nombre = document.getElementById("nombre").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const direccion = document.getElementById("direccion").value.trim();
//     const celular = document.getElementById("celular").value.trim();
//     const message = document.getElementById("message").value.trim();

//     // Verificar los valores de los campos antes de enviar
//     console.log("Nombre:", nombre);
//     console.log("Email:", email);
//     console.log("Dirección:", direccion);
//     console.log("Celular:", celular);
//     console.log("Mensaje:", message);

//     // Validar que los campos obligatorios no estén vacíos
//     if (!nombre || !email || !direccion || !celular) {
//         return alert("Por favor, completa todos los campos obligatorios.");
//     }

//     // Validar el formato del correo electrónico
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         return alert("Por favor, ingresa un email válido.");
//     }

//     // Validar el formato del celular
//     const celularRegex = /^[0-9]+$/;
//     if (!celularRegex.test(celular)) {
//         return alert("El número de celular debe contener solo dígitos.");
//     }

//     // Enviar los datos al backend
//     try {
//         const response = await fetch("http://localhost:5000/clientes", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 nombre: nombre,
//                 email: email,
//                 direccion: direccion,
//                 celular: celular,
//                 message: message || ""  // Si no hay mensaje, lo enviamos como cadena vacía
//             })
//         });

//         if (response.ok) {
//             // Limpiar los campos después de enviar el formulario
//             document.getElementById("nombre").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("direccion").value = "";
//             document.getElementById("celular").value = "";
//             document.getElementById("message").value = "";

//             alert("Cliente agregado exitosamente.");
//         } else {
//             // Si hay un error en la respuesta del backend, mostrarlo
//             const errorData = await response.json();
//             console.error("Error de backend:", errorData);
//             alert("Hubo un problema al registrar el cliente: " + errorData.message);
//         }
//     } catch (error) {
//         console.error("Error al agregar el cliente:", error);
//         alert("Hubo un problema al registrar el cliente. Intenta nuevamente.");
//     }
// }

// async function addCliente() {
//     // Obtener los valores de los campos del formulario
//     const nombre = document.getElementById("nombre").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const direccion = document.getElementById("direccion").value.trim();
//     const celular = document.getElementById("celular").value.trim();
//     const message = document.getElementById("message").value.trim();

//     // Verificar los valores de los campos antes de enviar
//     console.log("Nombre:", nombre);
//     console.log("Email:", email);
//     console.log("Dirección:", direccion);
//     console.log("Celular:", celular);
//     console.log("Mensaje:", message);

//     // Validar que los campos obligatorios no estén vacíos
//     if (!nombre || !email || !direccion || !celular) {
//         return alert("Por favor, completa todos los campos obligatorios.");
//     }

//     // Validar el formato del correo electrónico
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         return alert("Por favor, ingresa un email válido.");
//     }

//     // Validar el formato del celular
//     const celularRegex = /^[0-9]+$/;
//     if (!celularRegex.test(celular)) {
//         return alert("El número de celular debe contener solo dígitos.");
//     }

//     // Crear el objeto de datos a enviar
//     const clienteData = {
//         nombre: nombre,
//         email: email,
//         direccion: direccion,
//         celular: celular,
//         message: message || ""  // Si no hay mensaje, lo enviamos como cadena vacía
//     };

//     // Enviar los datos al backend
//     try {
//         const response = await fetch("http://localhost:5000/clientes", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(clienteData)  // Pasar el objeto completo
//         });

//         if (response.ok) {
//             // Limpiar los campos después de enviar el formulario solo si la respuesta fue exitosa
//             document.getElementById("nombre").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("direccion").value = "";
//             document.getElementById("celular").value = "";
//             document.getElementById("message").value = "";

//             alert("Cliente agregado exitosamente.");
//             // Aquí puedes redirigir o actualizar la vista si es necesario
//         } else {
//             // Si hay un error en la respuesta del backend, mostrarlo
//             const errorData = await response.json();
//             console.error("Error de backend:", errorData);
//             alert("Hubo un problema al registrar el cliente: " + (errorData.message || 'Error desconocido'));
//         }
//     } catch (error) {
//         console.error("Error al agregar el cliente:", error);
//         alert("Hubo un problema al registrar el cliente. Intenta nuevamente.");
//     }
// }


// document.getElementById('appointment-form').addEventListener('submit', async (event) => {
//     event.preventDefault(); // Evitar el envío predeterminado del formulario

//     const nombre = document.getElementById("nombre").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const direccion = document.getElementById("direccion").value.trim();
//     const celular = document.getElementById("celular").value.trim();
//     const message = document.getElementById("message").value.trim();

//     const clienteData = { nombre, email, direccion, celular, message };

//     try {
//         const response = await fetch("http://localhost:5000/clientes", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(clienteData)
//         });

//         if (response.ok) {
//             alert("Cliente agregado exitosamente.");
//               // Redirigir al panel después de un registro exitoso
//               window.location.href = "../pages/panel.html";
//         } else {
//             const errorData = await response.json();
//             alert("Error al registrar el cliente: " + errorData.message);
//         }
//     } catch (error) {
//         console.error("Error:", error);
//         alert("Hubo un problema al enviar los datos.");
//     }
// });


document.getElementById('appointment-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evitar el envío predeterminado del formulario

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const message = document.getElementById("message").value.trim();

    const clienteData = { nombre, email, direccion, celular, message };

    try {
        const response = await fetch("http://localhost:5000/clientes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(clienteData)
        });

        if (response.ok) {
            alert("Cliente agregado exitosamente.");
            // Almacenar la información del cliente en localStorage
            localStorage.setItem('usuario', JSON.stringify(clienteData));

            // Redirigir al panel después de un registro exitoso
            window.location.href = "../pages/panel.html";
        } else {
            const errorData = await response.json();
            alert("Error al registrar el cliente: " + errorData.message);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Hubo un problema al enviar los datos.");
    }
});



