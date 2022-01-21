const formRef = document.querySelector(".login-form");
const inputRef = document.querySelector("input");
console.log()

formRef.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(event) {

    event.preventDefault();

    if (formRef.elements.password.value !== "" && formRef.elements.email.value !== "") {
        const email = formRef.elements.email.value;
        const password = formRef.elements.password.value;
        const formData = { email, password, };
        formRef.reset();
        return console.log(formData);
    } else {
        formRef.reset();
        return alert("все поля должны быть заполнены");

    }
}