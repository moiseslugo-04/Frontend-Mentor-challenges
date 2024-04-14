const btn = document.getElementById('btn')
const links = document.getElementById('links-mobile')
const ul = document.querySelector('#links-mobile ul')
btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  links.classList.toggle('open')
})
