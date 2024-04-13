const btn = document.getElementById('btnSend')
const inputs = document.querySelectorAll('input')
const valid = {
  name: false,
  lastName: false,
  email: false,
  password: false,
}
function validate(e) {
  const { value, name } = e.target
  name == 'email'
    ? validateEmail(value, e.target)
    : validateDataUser(value, e.target)
}
// email
const validateEmail = (value, e) => {
  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  !emailRegEx.test(value) || value == ''
    ? showMessageError(e)
    : hiddenMessageError(e)
}

// all inputs
const validateDataUser = (value, e) => {
  value == '' || value.length < 4 ? showMessageError(e) : hiddenMessageError(e)
}
// show message
const showMessageError = (e) => {
  const span = e.closest('div').querySelector('span')
  span.style.opacity = 1
  valid[e.name] = false
}
// hidden message
const hiddenMessageError = (e) => {
  const span = e.closest('div').querySelector('span')
  span.style.opacity = 0
  valid[e.name] = true
}
btn.addEventListener('click', (e) => {
  e.preventDefault()
  const { name, lastName, email, password } = valid
  if (name == true && lastName == true && email == true && password == true) {
    document.querySelector('form').reset()
  }
})
inputs.forEach((input) => {
  input.addEventListener('keyup', validate)
  input.addEventListener('blur', validate)
})
