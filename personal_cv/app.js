const perfil = document.querySelector('.perfil')



window.addEventListener('scroll', () => {
  let value = window.scrollY

  perfil.style.bottom = value * 0.1 + '%'
})