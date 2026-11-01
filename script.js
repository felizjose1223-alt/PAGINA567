document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validación de email básica
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            emailError.style.display = "block";
            emailInput.focus();
            return;
        } else {
            emailError.style.display = "none";
        }

        const nombre = document.getElementById("nombre").value;
        const mensaje = document.getElementById("mensaje").value;

        // Simulación de envío de correo llamando al cliente de correo
        const mailtoLink = `mailto:contacto@vetpatitas.com?subject=Mensaje de ${encodeURIComponent(nombre)}&body=${encodeURIComponent(mensaje)}`;
        
        // Mostrar ventana Modal de confirmación
        const confirmModal = new bootstrap.Modal(document.getElementById("confirmModal"));
        confirmModal.show();

        // Abrir el cliente de correo
        window.location.href = mailtoLink;

        // Limpiar formulario
        contactForm.reset();
    });
});