const btn = document.getElementById('icon-btn')
const links = document.querySelector('.mobile .links')
btn.addEventListener('click', () => {
  links.classList.toggle('toggle')
})
