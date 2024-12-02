document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    alert(`Mensagem enviada com sucesso! \nNome: ${nome} \nE-mail: ${email} \nMensagem: ${mensagem}`);
    // Aqui você pode enviar a mensagem para um servidor ou e-mail, se necessário.
});


