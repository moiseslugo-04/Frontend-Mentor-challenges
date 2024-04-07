const getDay = document.getElementById('day')
const getYear = document.getElementById('year')
const getMonth = document.getElementById('month')
// show
const showYear = document.querySelector('#years span')
const showDays = document.querySelector('#days span')
const showMonth = document.querySelector('#months span')

// action btn
const btn = document.querySelector('.icon img')

// messages Errors
const dayError = document.getElementById('errorDay')
const yearError = document.getElementById('errorYear')
const monthError = document.getElementById('errorMonth')
btn.addEventListener('click', () => {
  if (validated()) return calculatorDate()
})
const currentDate = new Date()
let day = currentDate.getDate()
let month = currentDate.getMonth() + 1
let year = currentDate.getFullYear()
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
function calculatorDate() {
  if (getDay.value) {
    if (getDay.value > day) {
      day = day + months[month - 1]
      month = month - 1
    }
    if (getMonth.value > month) {
      month = month + 12
      year = year - 1
    }
    const d = day - getDay.value
    const m = month - getMonth.value >= 12 ? (year = 1) : month - getMonth.value
    const y = year - getYear.value

    showDays.innerHTML = d
    showMonth.innerHTML = m
    showYear.innerHTML = y
  }
}

function validated() {
  let success = true
  if (getDay.value > 30 || getDay.value == '') {
    dayError.innerHTML = 'Must be a valid day'
    getDay.style.borderColor = 'red'
  }

  if (getMonth.value > 12 || getMonth.value == '') {
    monthError.innerHTML = 'Must be a valid month'
    getMonth.style.borderColor = 'red'
  }
  if (getYear.value > year || getYear.value == '') {
    yearError.innerHTML = 'Must be in the past '
    getYear.style.borderColor = 'red'
    success == false

    return
  } else {
    dayError.innerHTML = ''
    getDay.style.borderColor = 'hsl(0, 0%, 86%)'
    monthError.innerHTML = ''
    getMonth.style.borderColor = 'hsl(0, 0%, 86%)'
    yearError.innerHTML = ''
    getYear.style.borderColor = 'hsl(0, 0%, 86%)'
  }

  return success
}
