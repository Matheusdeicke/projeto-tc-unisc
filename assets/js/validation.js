// ====== Validação Login ======
const form = document.getElementById('form');
if (form) {
  const matricula_input = document.getElementById('matricula-input');
  const password_input = document.getElementById('password-input');
  const matricula_error = document.getElementById('matricula-error');
  const password_error = document.getElementById('password-error');
  const asterisks = document.querySelectorAll('.required-asterisk');

  form.addEventListener('submit', (e) => {
    let errors = [];

    // Limpar mensagens de erro anteriores
    matricula_error.innerText = '';
    password_error.innerText = '';

    // Validar login (Matrícula e Senha)
    errors = getLoginFormErrors(matricula_input.value, password_input.value);

    if (errors.length > 0) {
      // Se houver erros, impedir o envio do formulário
      e.preventDefault();

      // Ocultar os asteriscos se houver erros
      asterisks.forEach((asterisk) => {
        asterisk.style.display = 'none';
      });
    } else {
      // Se não houver erros, redirecionar para o dashboard
      e.preventDefault(); // Impede o envio padrão do formulário

      // Aqui você pode adicionar código para autenticação com o servidor

      // Redirecionar para o dashboard
      window.location.href = 'dashboard.html'; // Substitua pelo caminho correto para o seu dashboard
    }
  });

  function getLoginFormErrors(matricula, password) {
    let errors = [];

    if (matricula === '' || matricula == null) {
      matricula_error.innerText = 'Matrícula é obrigatória'; // Exibe o erro no campo Matrícula
      matricula_input.parentElement.classList.add('incorrect');
      errors.push('Matrícula é obrigatória');
    }
    if (password === '' || password == null) {
      password_error.innerText = 'Senha é obrigatória'; // Exibe o erro no campo Senha
      password_input.parentElement.classList.add('incorrect');
      errors.push('Senha é obrigatória');
    }

    return errors;
  }

  // Remover a classe 'incorrect' e restaurar o asterisco quando o usuário começar a digitar novamente
  const allInputs = [matricula_input, password_input];

  allInputs.forEach((input) => {
    input.addEventListener('input', () => {
      if (input.parentElement.classList.contains('incorrect')) {
        input.parentElement.classList.remove('incorrect');
        // Limpa a mensagem de erro específica quando o usuário começa a digitar
        if (input === matricula_input) {
          matricula_error.innerText = '';
        } else if (input === password_input) {
          password_error.innerText = '';
        }

        // Mostrar novamente os asteriscos quando o usuário começa a digitar
        asterisks.forEach((asterisk) => {
          asterisk.style.display = 'inline';
        });
      }
    });
  });
}

// ====== Validação Esqueci minha senha ======
const forgotForm = document.getElementById('forgot-password-form');
if (forgotForm) {
  const forgotMatriculaInput = document.getElementById('forgot-matricula-input');
  const forgotMatriculaError = document.getElementById('forgot-matricula-error');
  const forgotFeedbackMessage = document.getElementById('forgot-feedback-message');

  // Validação e envio do formulário "Esqueci minha senha"
  forgotForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Limpar mensagens de erro e feedback anteriores
    forgotMatriculaError.innerText = '';
    forgotFeedbackMessage.innerText = '';

    // Validação simples para o campo de matrícula
    if (forgotMatriculaInput.value.trim() === '') {
      forgotMatriculaError.innerText = 'Matrícula é obrigatória';
      forgotMatriculaInput.focus();
      return;
    }

    // Simular envio de solicitação de recuperação
    forgotFeedbackMessage.style.color = 'green';
    forgotFeedbackMessage.innerText = 'Se sua matrícula estiver registrada, você receberá um link para redefinir sua senha no seu email.';
  });

  // Redirecionar para a página de login ao clicar no botão "Voltar ao Login"
  const backToLoginBtn = document.getElementById('backToLoginBtn');
  if (backToLoginBtn) {
    backToLoginBtn.addEventListener('click', () => {
      window.location.href = 'login.html'; // Redireciona para a página de login (ajuste o caminho se necessário)
    });
  }
}

// ====== Animação Dashboard ======
const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

function toggleSidebar() {
  sidebar.classList.toggle('close');
  toggleButton.classList.toggle('rotate');

  closeAllSubMenus();
}

function toggleSubMenu(button) {
  if (!button.nextElementSibling.classList.contains('show')) {
    closeAllSubMenus();
  }

  button.nextElementSibling.classList.toggle('show');
  button.classList.toggle('rotate');

  if (sidebar.classList.contains('close')) {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
  }
}

function closeAllSubMenus() {
  Array.from(sidebar.getElementsByClassName('show')).forEach((ul) => {
    ul.classList.remove('show');
    ul.previousElementSibling.classList.remove('rotate');
  });
}

// ====== Botão Sair ======
const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', function (event) {
  event.preventDefault(); // Previne o comportamento padrão do link
  // Limpe quaisquer dados de autenticação armazenados
  // Por exemplo, remover tokens do localStorage ou sessionStorage
  localStorage.removeItem('authToken');
  sessionStorage.clear();

  // Redirecione o usuário para a página de login
  window.location.replace('login.html');
});

// Função para abrir o modal
function openModal() {
  document.getElementById('modal').style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Função para adicionar uma nova linha à tabela
document.getElementById('addForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevenir reload da página

  // Captura os valores dos inputs
  var alunoNome = document.getElementById('alunoNome').value;
  var alunoEmail = document.getElementById('alunoEmail').value;
  var orientador = document.getElementById('orientador').value;
  var banca1 = document.getElementById('banca1').value;
  var banca2 = document.getElementById('banca2').value;

  // Cria nova linha na tabela
  var table = document.getElementById('relacao-tabela').getElementsByTagName('tbody')[0];
  var newRow = table.insertRow();

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);

  cell1.innerHTML = alunoNome;
  cell2.innerHTML = alunoEmail;
  cell3.innerHTML = orientador;
  cell4.innerHTML = banca1;
  cell5.innerHTML = banca2;
  cell6.innerHTML = '<i class="fas fa-minus-circle remove-btn" onclick="removeRow(this)"></i>';

  // Fecha o modal após adicionar
  closeModal();

  // Limpa os campos do formulário
  document.getElementById('addForm').reset();
});

// Função para remover uma linha da tabela
function removeRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
