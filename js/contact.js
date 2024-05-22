const form = document.getElementById('formContact');
const input = document.querySelectorAll('#formContact input');

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
    genre: true,
    radio: false,
    file: false
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
        case "radio":
            const radios = document.querySelectorAll('input[name=radio]');
            var check = false;
            for (let radio of radios) {
                if (radio.checked) {
                    check = true;
                }
                if (check) {
                    document.getElementById("group-social-media").classList.remove('formGroupIncorrect');
                    document.getElementById("group-social-media").classList.add('formGroupCorrect');
                    document.querySelector("#group-social-media i").classList.add('fa-check');
                    document.querySelector("#group-social-media i").classList.remove('fa-xmark');
                    document.querySelector("#group-social-media .formError").classList.remove('formError-activo');
                    fields[e.target.name] = true;
                } else {
                    document.getElementById("group-social-media").classList.add('formGroupIncorrect');
                    document.getElementById("group-social-media").classList.remove('formGroupCorrect');
                    document.querySelector("#group-social-media i").classList.add('fa-xmark');
                    document.querySelector("#group-social-media i").classList.remove('fa-check');
                    document.querySelector("#group-social-media .formError").classList.add('formError-activo');
                    fields[e.target.name] = false;
                }
            }
            break;
        case "file":
            const file = document.querySelector('#file');
            const allowedExtensions = ['png', 'jpg', 'jpeg'];
            const fileName = file.files[0].name;
            const extension = fileName.split('.').pop().toLowerCase();
            if (!allowedExtensions.includes(extension)) {
                document.getElementById("group-file").classList.add('formGroupIncorrect');
                document.getElementById("group-file").classList.remove('formGroupCorrect');
                document.querySelector("#group-file i").classList.add('fa-xmark');
                document.querySelector("#group-file i").classList.remove('fa-check');
                document.querySelector("#group-file .formError").classList.add('formError-activo');
                file.value = '';
                fields[e.target.name] = false;
            } else {
                document.getElementById("group-file").classList.remove('formGroupIncorrect');
                document.getElementById("group-file").classList.add('formGroupCorrect');
                document.querySelector("#group-file i").classList.add('fa-check');
                document.querySelector("#group-file i").classList.remove('fa-xmark');
                document.querySelector("#group-file .formError").classList.remove('formError-activo');
                fields[e.target.name] = true;
            }
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
        document.getElementById('successMessage').classList.add('formMessageSuccess-activo');
        document.getElementById('errorMessage').classList.remove('formMessage-activo');
        setTimeout(() => {
            document.getElementById('successMessage').classList.remove('formMessageSuccess-activo');
            document.querySelectorAll('#formGroupCorrect').forEach((div) => {
                div.classList.remove('formGroupCorrect');
            });
        }, 5000)
        form.reset();
    } else {
        document.getElementById('errorMessage').classList.add('formMessage-activo');
        setTimeout(() => {
            document.getElementById('errorMessage').classList.remove('formMessage-activo');
        }, 5000)
    }
});