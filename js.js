var form = document.querySelector('.form')
var txt = /@/
var psw = /^[0-9]{4,}$/
var inpu = document.querySelector('#input1')
var input = document.querySelector('#input2')
function T() {
    if (inpu.value == "" && input.value == "") {
        alert("The email address and password is empty")
        return false
    } else if (inpu.value == "") {
        alert("The email address is empty")
        return false;
    } else if (input.value == "") {
        alert("The password is empty")
        return false
    }
}
function Test1() {
    var inputt = document.getElementById('input1').value
    if (inputt == "") {
        inpu.setAttribute('class', "input")
    }
    else if (txt.test(inputt)) {
        inpu.classList.add('ex')
        inpu.classList.remove('error')
    } else {
        inpu.classList.add('error')
        inpu.classList.remove('ex')
    }
}
function Test2() {
    var inputt = document.getElementById('input2').value
    if (inputt == "") {
        input.setAttribute('class', "input bot")
    }
    else if (psw.test(inputt)) {
        input.classList.add('ex')
        input.classList.remove('error')
    } else {
        input.classList.add('error')
        input.classList.remove('ex')
    }
}
inpu.addEventListener("input", Test1)
input.addEventListener("input", Test2)
// inpu.addEventListener('keyup', (e) => {
//     if (e.key == "Backspace") {
//         Test()
//     }
// })