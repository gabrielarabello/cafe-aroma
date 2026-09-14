// Seleciona o ícone do menu e o nav no HTML
const menuIcon = document.querySelector('.material-icons');
const nav = document.querySelector('header nav');

menuIcon.addEventListener('click', function() {
    nav.classList.toggle('ativo');
});

// Seleciona o botão "Ver Cardápio" e a seção de cardápio
const botaoCardapio = document.querySelector('.btn');
const secaoCardapio = document.querySelector('#cardapio');

botaoCardapio.addEventListener('click', function() {
    secaoCardapio.scrollIntoView({ behavior: 'smooth' });
});

// Seleciona o formulário de contato
const formContato = document.querySelector('.form-contato');

formContato.addEventListener('submit', function(evento) {
    evento.preventDefault();
    alert('Mensagem enviada! Em breve entraremos em contato.');
    formContato.reset();
});

// Seleciona todos os links do menu e adiciona um evento de clique para fechar o menu ao clicar em um link
const linksMenu = document.querySelectorAll('header nav a');

linksMenu.forEach(function(link) {
    link.addEventListener('click', function() {
        nav.classList.remove('ativo');
    });
});