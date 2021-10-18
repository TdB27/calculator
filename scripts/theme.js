let themes = document.querySelectorAll("[data-theme]");
let themeChosen = document.querySelector(".header__chosen--theme");

themes.forEach(theme => theme.addEventListener('click', () => {
    let areaChosen = theme.getAttribute('data-theme');

    themeChosen.setAttribute('id', areaChosen);
    themeChosen.setAttribute('data-theme-chosen', areaChosen);

}))