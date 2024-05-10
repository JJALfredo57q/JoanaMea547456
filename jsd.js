document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault();

    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;


    if (user == '') {
        document.getElementById('Display').textContent = 'Enter user name'
        return
    }

    if (pass == '') {
        document.getElementById('Display').textContent = 'Enter password'
        return
    }


    if (user == 'Jose' && pass == '8562') {
        document.getElementById('Display').textContent = 'Loading...'
        return
    }

    else {
        document.getElementById('Display').textContent = 'Wrong'
        return
    }


})