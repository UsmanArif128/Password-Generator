const input = document.getElementById('password');

function getPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=/?><[]|";
    const password = [];
    input.value = ''
    const passwordLength = "12";
    for (i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password.push(chars.substring(randomNumber, randomNumber + 1))
    }
    input.value = password.join('');
};

function myFunction() {
    var copyText = input;
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
};
input.onkeydown = function() {
    var key = event.keyCode || event.charCode;
    if (key == 12) {
        //backspace pressed
    }
};