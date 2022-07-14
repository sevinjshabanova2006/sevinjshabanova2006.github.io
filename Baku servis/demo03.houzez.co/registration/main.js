const togglePassword1 = document.querySelector('#togglePassword1');
const password1 = document.querySelector('#id_password1');

togglePassword1.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
    password1.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
const togglePassword2 = document.querySelector('#togglePassword2');
const password2 = document.querySelector('#id_password2');

togglePassword2.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
const togglePassword3 = document.querySelector('#togglePassword3');
const password3 = document.querySelector('#id_password3');

togglePassword3.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password3.getAttribute('type') === 'password' ? 'text' : 'password';
    password3.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
const togglePassword4 = document.querySelector('#togglePassword4');
const password4 = document.querySelector('#id_password4');

togglePassword4.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password4.getAttribute('type') === 'password' ? 'text' : 'password';
    password4.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});