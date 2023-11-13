const accordion = document.querySelector('[data-js="accordion"]')

accordion.addEventListener('click', e => {
    const accordionHeardId = e.target.dataset.accordionHeader
    const accordionItemToBeOpened = document.querySelector('[data-accordion-body="${accordionHeardId}"]')
    console.log(accordionItemToBeOpened)
})
