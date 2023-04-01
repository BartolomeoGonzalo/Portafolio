const burguer = document.querySelector('#burguer');
const menu = document.querySelector('#menu-hamburguesa div:nth-child(2)');
const itemsMenu = document.querySelector('#menu-hamburguesa div:last-child');

burguer.addEventListener('click', e=>{
    burguer.classList.toggle('active');
    menu.classList.toggle('open');
});

itemsMenu.addEventListener('click', e=>{
    burguer.classList.toggle('active');
    menu.classList.toggle('open');
});