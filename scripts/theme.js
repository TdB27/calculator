let body = document.querySelector('body')
let themes = document.querySelectorAll('[data-theme]')
let themeChosen = document.querySelector('.header__chosen--theme')

themes.forEach(theme =>
  theme.addEventListener('click', () => {
    let areaChosen = theme.getAttribute('data-theme')

    body.setAttribute('id', areaChosen)
    themeChosen.setAttribute('id', areaChosen)
    themeChosen.setAttribute('data-theme-chosen', areaChosen)
  })
)
