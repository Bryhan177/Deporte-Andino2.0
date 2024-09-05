document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón de editar perfil
    const editProfileBtn = document.getElementById('edit-profile-btn');
    
    // Agrega un evento al botón para manejar el clic
    editProfileBtn.addEventListener('click', function() {
        // Aquí puedes implementar una ventana emergente, redireccionar a otra página o cualquier otra acción
        // En este caso, solo mostramos una alerta simple
        openEditProfileModal();
    });

    function openEditProfileModal() {
        // Crear una ventana modal para edición
        const modal = document.createElement('div');
        modal.className = 'modal';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '&times;';
        
        const modalHeader = document.createElement('h2');
        modalHeader.textContent = 'Editar Perfil';
        
        // Aquí puedes agregar campos de formulario para editar el perfil
        const form = document.createElement('form');
        
        form.innerHTML = `
            <label for="edit-name">Nombre:</label>
            <input type="text" id="edit-name" name="edit-name" value="Nombre del Usuario">
            <label for="edit-email">Correo Electrónico:</label>
            <input type="email" id="edit-email" name="edit-email" value="usuario@ejemplo.com">
            <label for="edit-phone">Teléfono:</label>
            <input type="tel" id="edit-phone" name="edit-phone" value="+123 456 7890">
            <button type="submit">Guardar Cambios</button>
        `;
        
        modalContent.appendChild(closeBtn);
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(form);
        modal.appendChild(modalContent);
        
        document.body.appendChild(modal);
        
        // Manejar el cierre del modal
        closeBtn.addEventListener('click', function() {
            modal.remove();
        });
        
        // Cerrar el modal si se hace clic fuera de él
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.remove();
            }
        });
    }
});
