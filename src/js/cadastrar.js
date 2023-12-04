document.addEventListener("DOMContentLoaded", function () {
    // Função para lidar com o cadastro
    function cadastrarUsuario() {
        // Obter os valores dos campos do formulário
        var nome = document.getElementById("nome").value;
        var senha = document.getElementById("psswd").value;
        var email = document.getElementById("email").value;

        // Validar se os campos estão preenchidos
        if (!nome || !senha || !email) {  
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Obter usuários cadastrados do localStorage
        var usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Verificar se o usuário já está cadastrado (verificação simulada)
        var usuarioExistente = usuariosCadastrados.find(function (usuario) {
            return usuario.email === email;
        });

        if (usuarioExistente) {
            alert("Email já cadastrado já cadastrado. Escolha um nome de usuário diferente.");
            return;
        }

        // Adicionar novo usuário à lista
        var novoUsuario = { nome: nome, senha: senha, email: email };
        usuariosCadastrados.push(novoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));

        // Exibir mensagem de confirmação
        alert("Cadastro bem-sucedido! Você será redirecionado para a página de login.");

        // Redirecionar para a página de login após a mensagem
        window.location.href = "login.html";
    }

    // Adicionar evento de clique ao botão de cadastro
    var cadastrarBtn = document.getElementById("button");
    if (cadastrarBtn) {
        cadastrarBtn.addEventListener("click", cadastrarUsuario);
    }
});
