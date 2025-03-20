// Define la URL del backend (servidor donde está corriendo la API)
const backendURL = "https://backend-project-final-u20l.onrender.com";  // Cambia la URL si tu backend tiene otra dirección

// Obtener los items
async function fetchItems() {
    const response = await fetch(`${backendURL}/items`);
    const Cliente = await response.json();
    // document.getElementById("items").innerHTML = items.map(item => `<li>${item.name}</li>`).join('');
}



document.getElementById('appointment-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evitar el envío predeterminado del formulario

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const message = document.getElementById("message").value.trim();

    const clienteData = { nombre, email, direccion, celular, message };

    try {
        const response = await fetch("https://backend-project-final-u20l.onrender.com/clientes", {
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



