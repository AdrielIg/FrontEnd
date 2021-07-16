const perfil = document.querySelector('.perfil')
const back = document.querySelector('.back')



window.addEventListener('scroll', () => {
  let value = window.scrollY

  perfil.style.bottom = value * 0.1 + '%'
  back.style.top = value * 0.25 + 'px'
})