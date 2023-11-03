function abrirtetra() {
    const modal = document.getElementById('janela-tetra')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-tetra') {
            modal.classList.remove('abrir')
        }
    })
}

function abrirfluenza() {
    const modal = document.getElementById('janela-influenza')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-influenza') {
            modal.classList.remove('abrir')
        }
    })
}

function abrirherpes() {
    const modal = document.getElementById('janela-herpes')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-herpes') {
            modal.classList.remove('abrir')
        }
    })
}

function abrirhpv() {
    const modal = document.getElementById('janela-hpv')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-hpv') {
            modal.classList.remove('abrir')
        }
    })
}
