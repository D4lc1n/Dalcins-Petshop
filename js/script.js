/* ============================================================
   script.js - Funções JavaScript do Dalcin's Petshop
   Fase 2 - Disciplina: Fundamentos e Sistemas Web - PUC-ADS
   ============================================================ */

/* --- Exibe o relógio e saudação em tempo real --- */
function atualizarRelogio() {
    var agora = new Date();

    // Formata a hora no padrão HH:MM:SS
    var horas   = String(agora.getHours()).padStart(2, '0');
    var minutos = String(agora.getMinutes()).padStart(2, '0');
    var segundos = String(agora.getSeconds()).padStart(2, '0');
    var horaFormatada = horas + ':' + minutos + ':' + segundos;

    // Define saudação conforme o período do dia
    var saudacao = '';
    if (agora.getHours() < 12) {
        saudacao = 'Bom dia!';
    } else if (agora.getHours() < 18) {
        saudacao = 'Boa tarde!';
    } else {
        saudacao = 'Boa noite!';
    }

    // Atualiza o elemento de relógio na página (se existir)
    var elementoRelogio = document.getElementById('relogio');
    if (elementoRelogio) {
        elementoRelogio.innerHTML = saudacao + ' &nbsp;|&nbsp; ' + horaFormatada;
    }
}

// Atualiza o relógio a cada 1 segundo
setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // Chama imediatamente ao carregar a página


/* --- Mostra ou oculta o campo de endereço para tele-busca --- */
function toggleTelebusca() {
    var opcao = document.querySelector('input[name="metodo"]:checked');
    var secaoEndereco = document.getElementById('secao-endereco');

    if (opcao && opcao.value === 'telebusca') {
        secaoEndereco.style.display = 'block'; // Mostra o campo de endereço
    } else {
        secaoEndereco.style.display = 'none';  // Oculta o campo de endereço
    }
}


/* --- Validação do formulário de cadastro --- */
function validarFormulario() {
    var nome = document.getElementById('nome');
    var cpf  = document.getElementById('cpf');
    var email = document.getElementById('email');
    var nomePet = document.getElementById('nome-pet');
    var data = document.getElementById('data-agendamento');
    var hora = document.getElementById('hora-agendamento');

    // Verifica se os campos obrigatórios estão preenchidos
    if (!nome.value.trim()) {
        alert('Por favor, informe o nome do cliente.');
        nome.focus();
        return false;
    }

    if (!cpf.value.trim()) {
        alert('Por favor, informe o CPF.');
        cpf.focus();
        return false;
    }

    if (!email.value.trim()) {
        alert('Por favor, informe o e-mail.');
        email.focus();
        return false;
    }

    if (!nomePet.value.trim()) {
        alert('Por favor, informe o nome do pet.');
        nomePet.focus();
        return false;
    }

    if (!data.value) {
        alert('Por favor, selecione a data do agendamento.');
        data.focus();
        return false;
    }

    if (!hora.value) {
        alert('Por favor, selecione o horário do agendamento.');
        hora.focus();
        return false;
    }

    // Se tudo OK, confirma o agendamento
    alert('Cadastro realizado com sucesso! Entraremos em contato para confirmar o agendamento.');
    return true;
}
