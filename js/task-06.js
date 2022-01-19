const inputEl = document.querySelector('#validation-input');



inputEl.addEventListener('blur', event => {
    event.preventDefault();

    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        if (inputEl.classList.contains('invalid')) {
            inputEl.classList.remove('invalid');
        }
        inputEl.classList.add('valid');

    }

    if (event.currentTarget.value.length !== Number(inputEl.dataset.length)) {
        if (inputEl.classList.contains('valid')) {
            inputEl.classList.remove('valid');
        }
        inputEl.classList.add('invalid');

    }
});