document.getElementById('login-form').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    if (!username || !password || !confirmPassword) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
    } else if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        event.preventDefault();
    }
});

