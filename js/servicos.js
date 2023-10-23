let boxsearche = document.querySelector('.searche-bar');
let look = document.querySelector('.search-text');
let btnclose = document.querySelector('.close-text');

look.addEventListener('click', () => {
    boxsearche.classList.add('ativar')
})

btnclose.addEventListener('click', () => {
    boxsearche.classList.remove('ativar')
})