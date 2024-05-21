const form = document.getElementById('formContact');
const input = document.querySelectorAll('#formContact input');

const expressions = {
    location: /^[a-zA-Z0-9\_\-]{1,40}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/ // 7 a 14 numeros.
}

const fields = {
    name: false,
    surname: false,
    email: false,
    phone: false,
    location: false,
    genre: true,
    radio: true,
    file: true
}

const validateForm = (e) => {
    switch (e.target.name) {
        case "name":
            validateField(expressions.name, e.target, e.target.name);
            break;
        case "surname":
            validateField(expressions.name, e.target, e.target.name);
            break;
        case "email":
            validateField(expressions.email, e.target, e.target.name);
            break;
        case "phone":
            validateField(expressions.phone, e.target, e.target.name);
            break;
        case "location":
            validateField(expressions.location, e.target, e.target.name);
            break;
        case "genre":
            break;
        case "radio":
            break;
        case "file":
            break;
    }
}

const validateField = (expression, input, field) => {
    if (expression.test(input.value)) {
        document.getElementById(`group-${field}`).classList.remove('formGroupIncorrect');
        document.getElementById(`group-${field}`).classList.add('formGroupCorrect');
        document.querySelector(`#group-${field} i`).classList.add('fa-check');
        document.querySelector(`#group-${field} i`).classList.remove('fa-xmark');
        document.querySelector(`#group-${field} .formError`).classList.remove('formError-activo');
        fields[field] = true;
    } else {
        document.getElementById(`group-${field}`).classList.add('formGroupIncorrect');
        document.getElementById(`group-${field}`).classList.remove('formGroupCorrect');
        document.querySelector(`#group-${field} i`).classList.add('fa-xmark');
        document.querySelector(`#group-${field} i`).classList.remove('fa-check');
        document.querySelector(`#group-${field} .formError`).classList.add('formError-activo');
        fields[field] = false;
    }
}

input.forEach((inp) => {
    inp.addEventListener('keyup', validateForm);
    inp.addEventListener('blur', validateForm);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (fields.name
        && fields.surname
        && fields.email
        && fields.phone
        && fields.location
        && fields.genre
        && fields.radio
        && fields.file) {
        form.reset();
        document.getElementById('successMessage').classList.add('formMessageSuccess-activo');
        document.getElementById('errorMessage').classList.remove('formMessage-activo');
            document.querySelectorAll('formGroupCorrect').forEach((icon) => {
                icon.classList.remove('formGroupCorrect');
            });
    } else {
        document.getElementById('errorMessage').classList.add('formMessage-activo');
    }
});