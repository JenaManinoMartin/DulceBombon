document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (validateEmail(email) && validatePassword(password)) {
            if (email === 'admin@admin.com' && password === 'admin') {
                // Redirigir al usuario a crud.html
                window.location.href = '/../templates/crud.html';
            } else {
                alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
            }
        } else {
            alert('Por favor, introduce un email y contraseña válidos.');
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        //  agregar reglas de validación de contraseña si lo deseas
        //  longitud mínima, caracteres especiales, etc.
        return password.length >= 4; // Mínimo 4 caracteres
    }
});