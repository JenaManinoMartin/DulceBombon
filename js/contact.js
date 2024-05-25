const form = document.getElementById('formContact');
const input = document.querySelectorAll('#formContact input');
const select = document.querySelectorAll('#formContact select');

const expressions = {
    location: /^[a-zA-Z0-9\_\-]{1,40}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/, // 7 a 14 numeros.
}

const fields = {
    name: false,
    surname: false,
    email: false,
    phone: false,
    location: false,
    genre: false,
    radio: false,
    file: false
}

const validateForm = (e) => {
    switch (e.target.name) {
        case "name":
            validateInput(expressions.name, e.target, e.target.name);
            break;
        case "surname":
            validateInput(expressions.name, e.target, e.target.name);
            break;
        case "email":
            validateInput(expressions.email, e.target, e.target.name);
            break;
        case "phone":
            validateInput(expressions.phone, e.target, e.target.name);
            break;
        case "location":
            validateInput(expressions.location, e.target, e.target.name);
            break;
        case "radio":
            const radios = document.getElementsByName('radio');
            for (const radio of radios) {
                if (radio.checked) {
                    insertClassPossitive(e.target.name);
                    break;
                } else {
                    insertClassNegative(e.target.name);
                }
            }
            break;
        case "file":
            const file = document.querySelector('#file');
            const allowedExtensions = ['png', 'jpg', 'jpeg'];
            const fileName = file.files[0].name;
            const extension = fileName.split('.').pop().toLowerCase();
            if (!allowedExtensions.includes(extension)) {
                insertClassNegative(e.target.name);
                file.value = '';
            } else {
                insertClassPossitive(e.target.name);
            }
            break;
    }
}

const validateSelect = (e) => {
    const selectElement = document.getElementById(e.target.name);
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    if (selectedOption.value !== '' && selectedOption.disabled === false) {
        insertClassPossitive(e.target.name);
    } else {
        insertClassNegative(e.target.name);
    }
}

const validateInput = (expression, input, field) => {
    if (expression.test(input.value)) {
        insertClassPossitive(field);
    } else {
        insertClassNegative(field);
    }
}

const insertClassPossitive = (field) => {
    document.getElementById(`group-${field}`).classList.add('formGroupCorrect');
    document.getElementById(`group-${field}`).classList.remove('formGroupIncorrect');
    document.querySelector(`#group-${field} i`).classList.add('fa-check');
    document.querySelector(`#group-${field} i`).classList.remove('fa-xmark');
    document.querySelector(`#group-${field} .formError`).classList.remove('formError-activo');
    fields[field] = true;
}

const insertClassNegative = (field) => {
    document.getElementById(`group-${field}`).classList.add('formGroupIncorrect');
    document.getElementById(`group-${field}`).classList.remove('formGroupCorrect');
    document.querySelector(`#group-${field} i`).classList.add('fa-xmark');
    document.querySelector(`#group-${field} i`).classList.remove('fa-check');
    document.querySelector(`#group-${field} .formError`).classList.add('formError-activo');
    fields[field] = false;
}

input.forEach((inp) => {
    inp.addEventListener('keyup', validateForm);
    inp.addEventListener('blur', validateForm);
});

select.forEach((sel) => {
    sel.addEventListener('keyup', validateSelect);
    sel.addEventListener('blur', validateSelect);
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
        document.getElementById('successMessage').classList.add('formMessageSuccess-activo');
        document.getElementById('errorMessage').classList.remove('formMessage-activo');
        setTimeout(() => {
            document.getElementById('successMessage').classList.remove('formMessageSuccess-activo');
        }, 5000)
        form.reset();
    } else {
        document.getElementById('errorMessage').classList.add('formMessage-activo');
        setTimeout(() => {
            document.getElementById('errorMessage').classList.remove('formMessage-activo');
        }, 5000)
    }
});