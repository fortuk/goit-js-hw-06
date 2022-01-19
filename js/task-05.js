const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
};
refs.input.addEventListener('input', onInputChange);


function onInputChange(event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === '') {
        return refs.nameLabel.textContent = 'Anonymous'
    }
    return refs.nameLabel.textContent = event.currentTarget.value;
}