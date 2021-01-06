var input_senha = document.getElementById('senha_usuario');
var input_senha_confirm = document.getElementById('senha_usuario_confirm');
var form = document.getElementById('form');

form.addEventListener('submit', validaFormulario, false);

function validaFormulario(event)
{
	event.preventDefault();

	let senha = input_senha.value;
	let confirmacao_senha = input_senha_confirm.value;

	if (senha != confirmacao_senha)
	{
		alert("As senha precisam ser iguais!");
	}
	else
	{
		form.submit();
	}
}