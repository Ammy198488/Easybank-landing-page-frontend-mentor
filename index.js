let navLinks = document.querySelector('.navlinks'),
    menu = document.querySelector('.menu'),
    ul = document.querySelector('ul');

menu.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
    menu.classList.toggle('fa-times');
});
ul.addEventListener('click', () =>{
    navLinks.classList.remove('active');
});