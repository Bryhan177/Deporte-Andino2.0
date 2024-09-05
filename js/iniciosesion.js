// Selección de elementos del DOM
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

// Mostrar el formulario de registro
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Mostrar el formulario de inicio de sesión
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Mostrar el popup (opcional, si decides usarlo)
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

// Cerrar el popup
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Manejo del formulario de inicio de sesión
document.querySelector('form#login-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    const correo = document.querySelector('input[name="correo"]').value;
    const contrasena = document.querySelector('input[name="contrasena"]').value;

    // Validaciones
    if (!correo || !/\S+@\S+\.\S+/.test(correo)) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Por favor, ingrese un correo electrónico válido',
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (!contrasena) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Por favor, ingrese su contraseña',
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ correo, contrasena })
        });

        const result = await response.json();

        if (response.ok && result.token) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Inicio de sesión exitoso',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                window.location.href = result.redirectTo;
            });
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: result.error || 'Error desconocido',
                showConfirmButton: false,
                timer: 1500
            });
        }
    } catch (error) {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Error en la conexión al servidor',
            showConfirmButton: false,
            timer: 1500
        });
    }
});

// Manejo del formulario de registro
document.querySelector('form#register-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    const nombre = document.querySelector('input[name="nombre"]').value;
    const correo = document.querySelector('input[name="correo"]').value;
    const contrasena = document.querySelector('input[name="contrasena"]').value;
    const rol = document.querySelector('select[name="rol"]').value;

    // Validaciones
    if (!nombre) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Por favor, ingrese su nombre',
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (!correo || !/\S+@\S+\.\S+/.test(correo)) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Por favor, ingrese un correo electrónico válido',
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (contrasena.length < 7) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'La contraseña debe tener al menos 7 caracteres',
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (!rol) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Por favor, seleccione un rol',
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    try {
        const formData = new FormData(e.target);
        const response = await fetch(e.target.action, {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.status === 'success') {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: result.message,
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                window.location.href = result.redirectTo; // Redirige después del registro exitoso
            });
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: result.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    } catch (error) {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Error en la solicitud',
            showConfirmButton: false,
            timer: 1500
        });
    }
});
