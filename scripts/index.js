
function accordianSection() {
    let accordians = document.querySelectorAll('.accordion-item')
    accordians.forEach(accordian => {
        accordian.addEventListener('click', () => {
            accordian.querySelector('.accordion-collapse').classList.toggle('show')
            accordian.querySelector(".accordion-button").classList.toggle('collapsed')
        })
    })
}
accordianSection()