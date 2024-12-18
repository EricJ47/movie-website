const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');
const showPasswordIcon = document.getElementById('showPasswordIcon');
const hidePasswordIcon = document.getElementById('hidePasswordIcon');

const passwordInput2 = document.getElementById('passwordInput2');
const togglePassword2 = document.getElementById('togglePassword2');
const showPasswordIcon2 = document.getElementById('showPasswordIcon2');
const hidePasswordIcon2 = document.getElementById('hidePasswordIcon2');




// password
    togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    showPasswordIcon.classList.toggle('hidden');
    hidePasswordIcon.classList.toggle('hidden');
    });

// register konfirmasi
    togglePassword2.addEventListener('click', function () {
    const type = passwordInput2.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput2.setAttribute('type', type);

    showPasswordIcon2.classList.toggle('hidden');
    hidePasswordIcon2.classList.toggle('hidden');
    });

    
    
    
