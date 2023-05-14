import '@fontsource/montserrat'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/800.css'
import '../src/css/index.css'

const nav = document.getElementById('main-nav')
const navBtn = document.getElementById('nav-btn')

navBtn?.addEventListener('click', () => {
  nav?.classList.toggle('open');
})

