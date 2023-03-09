const burguer = document.querySelector('#burguer');
const menu = document.querySelector('#menu-hamburguesa div:nth-child(2)');
burguer.addEventListener('click', e=>{
    burguer.classList.toggle('active');
    menu.classList.toggle('open');
});