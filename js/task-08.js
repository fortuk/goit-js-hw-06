const formEl = document.querySelector('.login-form');
const formInputEl = document.querySelectorAll('input')
const userEmail = document.querySelector('input[type="email"]');
const userPassword = document.querySelector('input[type="password"]')

function validateEL() {
    let emailVal = userEmail.value;
    let passwordVal = userPassword.value;
    if (userEmail.value === '') {
        userEmail.classList.add('error')
    } else {
        userEmail.classList.remove('error')
    }
    if (userPassword.value === '') {
        userPassword.classList.add('error')
    } else {
        userPassword.classList.remove('error')
    }
    return false
}

formEl.addEventListener('submit', validateEL)


function validateEmail(email) {
    let emailEl = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailEl.test(String(email).toLowerCase());
}

formEl.addEventListener('submit', onFormSubmit)
formEl.reset();

// let emailVal = userEmail.value;
// let passwordVal = userPassword.value;
// let emptyInputEl = Array.formEl(formInputEl).filter(input => input.value === '');
// event.preventDefault();
// const formData = new FormData(event.currentTarget)
// formData.forEach((value, name) => {
//         console.log('onFormSubmit -> name', name);
//         console.log('onFormSubmit -> value', value);

//         formInputEl.forEach(function(input) {
//             if (input.value === '') {
//                 input.classList.add('error')
//             } else {
//                 input.classList.remove('error')
//             }
//         });
//         if (emptyInputEl.length !== 0) {
//             return false;
//         }
//         if (!validateEmail(emailVal)) {
//             userEmail.classList.add('remove')
//         } else {
//             userEmail.classList.remove('remove')
//         };
//     };
// }

function onFormSubmit(event) {

    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    formData.forEach(function(value, name) {
        console.log('onFormSubmit -> value', value);
        console.log('onFormSubmit -> name', name);

    });
}