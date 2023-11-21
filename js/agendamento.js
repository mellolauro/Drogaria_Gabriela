const accordion = document.querySelector('[data-js="accordion"]')

accordion.addEventListener('click', e => {
    console.log(e.target.dataset)
})