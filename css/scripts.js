   const ticketForm = document.querySelector('#ticketForm');
    const inputName = document.querySelector('#inputName');
    const inputNameError = document.querySelector('#inputNameError');
    const inputLastName = document.querySelector('#inputLastName');
    const inputLastNameError = document.querySelector('#inputLastNameError');
    const inputEmail = document.querySelector('#inputEmail');
    const inputEmailError = document.querySelector('#inputEmailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    ticketForm.addEventListener('submit', (event) => {
      let valid = true;

      if (inputName.value.length < 3) {
        inputNameError.textContent = 'El campo "Nombre" debe tener al menos 3 caracteres';
        valid = false;
      } else {
        inputNameError.textContent = '';
      }

      if (inputLastName.value.length < 3) {
        inputLastNameError.textContent = 'El campo "Apellido" debe tener al menos 3 caracteres';
        valid = false;
      } else {
        inputLastNameError.textContent = '';
      }

      if (!emailRegex.test(inputEmail.value)) {
        inputEmailError.textContent = 'El campo "Correo electrónico" debe ser una dirección de correo electrónico válida';
        valid = false;
      } else {
        inputEmailError.textContent = '';
      }

      if (!valid) {
        event.preventDefault();
      }
    });




    const prices = {
      GENERAL: 200,
      JUNIOR: 170,
      TRAINEE: 100,
      ESTUDIANTES: 40,
    };

    const form = document.getElementById('ticketForm');
    const quantityInput = document.getElementById('inputQuantity');
    const categoryInput = document.getElementById('inputCategory');
    const totalPrice = document.getElementById('totalPrice');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const quantity = parseInt(quantityInput.value);
      const category = categoryInput.value;

      if (quantity && category !== 'Seleccione una categoría') {
        const price = prices[category];
        const total = quantity * price;

        totalPrice.innerHTML = `El precio total de la compra es: $${total}`;

        form.reset();
      }
    });

    // const form= document.querySelector('form');
const nombreInput = document.getElementById('input-nombre');
    const apellidoInput = document.getElementById('input-apellido');
    const emailInput = document.getElementById('input-email');
    const mensajeInput = document.getElementById('textarea-mensaje');
    const sendButton = document.getElementById('sendForm');
    const mensajeDiv = document.getElementById('mensaje');
    
    const validarCampo = (campo, longitudMinima) => {
      if (campo.value.trim().length < longitudMinima) {
        campo.classList.add('is-invalid');
        return false;
      } else {
        campo.classList.remove('is-invalid');
        return true;
      }
    };
    
    const validarEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };
    
    sendButton.addEventListener('click', (event) => {
      event.preventDefault();
    
      const nombreValido = validarCampo(nombreInput, 3);
      const apellidoValido = validarCampo(apellidoInput, 3);
      const emailValido = validarCampo(emailInput, 1) && validarEmail(emailInput.value);
      const mensajeValido = validarCampo(mensajeInput, 2);
    
      if (nombreValido && apellidoValido && emailValido && mensajeValido) {
        form.submit();
        mensajeDiv.innerHTML = '<div class="alert alert-success" role="alert">Formulario enviado correctamente</div>';
      } else {
        mensajeDiv.innerHTML = '<div class="alert alert-danger" role="alert">Por favor, completa todos los campos correctamente</div>';
      }
    });
    