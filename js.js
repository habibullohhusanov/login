var form = document.querySelector('.form');
const testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
var email = document.querySelector('#input1');
var password = document.querySelector('#input2');
var message = document.querySelector('#message');

// Auth

// if (localStorage.getItem("verified") === true) {
//     window.location.href = "generate.html";
// }

// Tests

function Test() {
    if (email.value === "") {
        email.classList.add('error');
        email.classList.remove('ex');
        return false;
    }
    if (password.value === "") {
        password.classList.add('error');
        password.classList.remove('ex');
        return false;
    }
    return true;
}

function TestMail() {
    if (email.value == "") {
        email.setAttribute('class', "input");
        return false;
    } else if (testEmail.test(email.value)) {
        email.classList.add('ex');
        email.classList.remove('error');
        return true;
    } else {
        email.classList.add('error');
        email.classList.remove('ex');
        return false;
    }
}

email.addEventListener("input", TestMail);
