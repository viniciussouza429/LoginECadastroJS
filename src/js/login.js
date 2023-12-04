document.addEventListener("DOMContentLoaded", function () {
    // Função para lidar com o login
    function realizarLogin() {
        // Obter os valores dos campos do formulário
        var email = document.getElementById("email").value;
        var senha = document.getElementById("psswd").value;

        // Obter usuários cadastrados do localStorage
        var usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Verificar se o usuário e a senha correspondem a um registro existente
        var usuarioExistente = usuariosCadastrados.find(function (usuario) {
            return ( usuario.email === email) && usuario.senha === senha;
        });

        if (!usuarioExistente) {
            // Exibir mensagem de erro
            alert("Nome, email ou senha incorretos. Tente novamente.");
            return;
        }

        // Redirecionar para a página inicial após o login bem-sucedido
        window.location.href = "pagina-inicial.html";
    }

    // Adicionar evento de clique ao botão de login
    var loginBtn = document.getElementById("button");
    if (loginBtn) {
        loginBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Evitar o envio do formulário padrão
            realizarLogin();
        });
    }
});