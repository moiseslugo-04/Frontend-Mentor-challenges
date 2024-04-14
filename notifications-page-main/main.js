const cards = document.querySelectorAll('.card')
const number = document.getElementById('number')
const btn = document.getElementById('btnRead')
const spans = document.querySelectorAll('.circle')
number.textContent = spans.length
cards.forEach((card) => {
  card.addEventListener('click', () => {
    const span = card.querySelector('.circle')
    if (span) {
      span.remove()
      number.textContent--
    }
  })
})
btn.addEventListener('click', () => {
  number.textContent = 0
  spans.forEach((span) => span.remove())
})
