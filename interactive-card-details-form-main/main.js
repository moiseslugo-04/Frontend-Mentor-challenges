const form = document.getElementById('form')
const completed = document.getElementById('completed')
const inputs = document.querySelectorAll('form input')
const cardNumber = document.getElementById('cardNumber')
const cardMonth = document.getElementById('cardMonth')
const cardYear = document.getElementById('cardYear')
const cardCvc = document.getElementById('cardCvc')
const cardName = document.getElementById('cardName')
const btn = document.getElementById('btn')
const btnCompleted = document.getElementById('btnCompleted')
let hasError = false

const validated = (e, regExp) => {
  const span = e.closest('label').querySelector('.message-error')
  if (e.value.trim() == '' || !regExp.test(e.value)) {
    e.classList.add('input-error')
    span.style.opacity = '1'
    return false
  } else {
    e.classList.remove('input-error')
    span.style.opacity = '0'
    return true
  }
}

function validation(e) {
  const regEx = {
    name: /^\D*.{6}$/gi,
    number: /^\d{16}$/,
    year: /^\d{2}$/,
    cvc: /^\d{3}$/,
    month: /^\d+$/,
  }
  const isValid = validated(e.target, regEx[e.target.name])
  hasError = isValid
  if (isValid || e.type == 'blur') {
    showInfo(e)
  }
}

function showInfo(e) {
  console.log(e)
  switch (e.target.name) {
    case 'name':
      cardName.textContent = e.target.value
      break
    case 'number':
      const clearNumber = e.target.value.replace(/\D/g, '')
      const trimNUmber = clearNumber.substring(0, 16)
      const padNumber = trimNUmber.padStart(16, 'X')
      const formatNumber = padNumber.match(/.{1,4}/g).join(' ')
      cardNumber.textContent = formatNumber
      break
    case 'year':
      cardYear.textContent = e.target.value
      break
    case 'month':
      cardMonth.textContent = e.target.value
      break
    case 'cvc':
      cardCvc.textContent = e.target.value
      break

    default:
      break
  }
}
function resetShowInfo() {
  cardNumber.textContent = '0000 0000 0000 0000'
  cardMonth.textContent = '00'
  cardYear.textContent = '00'
  cardCvc.textContent = '00'
  cardName.textContent = 'Jane Appleseed'
}
inputs.forEach((input) => {
  input.addEventListener('keyup', validation)
  input.addEventListener('blur', validation)
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (hasError) {
    form.reset()
  }
})

btn.addEventListener('click', (e) => {
  e.preventDefault()
  if (hasError) {
    form.reset()
    form.style.display = 'none'
    completed.style.display = 'flex'
  }
})
btnCompleted.addEventListener('click', () => {
  form.style.display = 'flex'
  completed.style.display = 'none'
  resetShowInfo()
})
