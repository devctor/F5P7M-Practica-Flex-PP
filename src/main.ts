import '@fontsource/montserrat'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/800.css'
import '../src/css/index.css'

const nav = document.getElementById('main-nav')
const navBtn = document.getElementById('nav-btn')
const body = document.getElementsByTagName('body')[0]

navBtn?.addEventListener('click', () => {
  if (document.querySelectorAll('.open').length === 0) {
    body.style.overflowY = 'hidden'
    navBtn.setAttribute('aria-expanded', 'true')
  } else {
    body.style.overflowY = 'auto'
    navBtn.setAttribute('aria-expanded', 'false')
  }
  nav?.classList.toggle('open')
})
