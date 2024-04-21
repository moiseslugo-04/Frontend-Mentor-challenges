const billIpt = document.getElementById('bill')
const peopleIpt = document.getElementById('people')
const customIpt = document.getElementById('custom')
const buttons = document.querySelectorAll('.buttons button')
const tipAmountIpt = document.getElementById('tipAmount')
const totalIpt = document.getElementById('total')
const messageError = document.querySelector('.messageError')
const resetIpt = document.getElementById('reset')
resetIpt.addEventListener('click', reset)
buttons.forEach((btn) => btn.addEventListener('click', handleClick))
customIpt.addEventListener('input', customFuc)
billIpt.addEventListener('input', billFunc)
peopleIpt.addEventListener('input', peopleFunc)

let billValue = 0.0
let peopleValue = 1
let tripValue = 0.15
function billFunc(e) {
  billValue = parseFloat(e.target.value)
  calculator()
}
function peopleFunc(e) {
  peopleValue = parseFloat(e.target.value)
  if (e.target.value == 0) {
    messageError.style.opacity = 1
    peopleIpt.classList.add('error')
  } else {
    messageError.style.opacity = 0
    calculator()
  }
}
function customFuc(e) {
  tripValue = parseFloat(e.target.value / 100)
  buttons.forEach((btn) => btn.classList.remove('active'))
  calculator()
}
function handleClick(button) {
  buttons.forEach((e) => {
    e.classList.remove('active')
    if (button.target.innerHTML == e.innerHTML) {
      button.target.classList.add('active')
      customIpt.value = e.value
      tripValue = parseFloat(e.value) / 100
      calculator()
    }
  })
}
function calculator() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tripValue) / peopleValue
    let total = (billValue + tipAmount) / peopleValue
    tipAmountIpt.innerHTML = tipAmount.toFixed(2)
    totalIpt.innerHTML = total.toFixed(2)
  }
}

function reset() {
  billIpt.value = ''
  peopleIpt.value = 1
  tipAmountIpt.innerHTML = (0).toFixed(2)
  totalIpt.innerHTML = (0).toFixed(2)
}
