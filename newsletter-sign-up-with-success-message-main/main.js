const btn = document.getElementById('btn-submit')
const email = document.getElementById('email')
const messageError = document.getElementById('messageError')
const main = document.querySelector('main')
const success = document.querySelector('.success')
const user = document.getElementById('userEmail')
const btnBack = document.getElementById('btn-back')
const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
btn.addEventListener('click', (e) => {
  e.preventDefault()
  if (!validation.test(email.value)) {
    messageError.innerHTML = 'Valid email required'
    email.placeholder = 'ash@loremCompany.com'
    email.classList.add('error')
  } else {
    main.style.display = 'none'
    success.style.display = 'flex'
    user.innerHTML = email.value
  }
})
btnBack.addEventListener('click', () => {
  main.style.display = 'flex'
  success.style.display = 'none'
  email.value = ''
  messageError.innerHTML = ''
  email.placeholder = 'email@company.com'
  email.classList.remove('error')
})
