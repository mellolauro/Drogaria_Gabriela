const searchWrapper = document.querySelector('search');
const inputBox = searchWrapper.querySelector('input');
const sugestBox = searchWrapper.querySelector('.list');
const icon = searchWrapper.querySelector('.icon');
let linkTag = searchWrapper.querySelector('a');
let webLink;

inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArrey = [];

    if (e.key === 'Enter') {
        if (userData) {
            window.open(`https://www.google.com/search?q=${userData}`, '_blank');
        }
    }

    if (userData) {
        icon.onclick = () => {
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute('href', webLink);
            linkTag.click();
        }
        emptyArrey = sugestoes.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArrey = emptyArrey.map((data) => {
            return data = `<li>${data}</li>`
        });
        searchWrapper.classList.add('active');
        ShowSuggestions(emptyArrey);
        let allList = sugestBox.querySelectorAll('li');
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute('onclick', 'select(this)')
        }

        if (e.key === 'Escape') {
            searchWrapper.classList.remove('active');
        }
    } else {
        searchWrapper.classList.remove('active');
    }
}

function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute('href', webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove('active');
}

function ShowSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userData}</li>`
    } else {
        listData = list.join('');
    }
    sugestBox.innerHTML = listData;
}




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
