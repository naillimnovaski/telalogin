document.getElementById('login-form').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmpassword').value;

    if (!username || !password || !confirmPassword) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();


}
});


// Verifica senhas
function verificaSenha(){
    let pswd        = document.getElementById("password").value;
    let pswdconf    = document.getElementById("confirmPassword").value;

    if (pswd == pswdconf) {
        alert("As senhas foram digitadas corretamente");
    }else{
        alert("Senhas nao conferem");
    }
}


