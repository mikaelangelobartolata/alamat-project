function themeUi(theme) {
    const bodyDOM = document.body;
    const allChildren = bodyDOM.children;
    const toggle = document.querySelector(".theme");

    if(theme === "dark") {
        for (const child of allChildren) {
            child.classList.add('dark');
        }
        
        toggle.innerHTML = `<img class="theme-picture" src="https://i.ibb.co/QjXY0PLW/night.jpg">`;
        return;
    }
    else {
        for (const child of allChildren) child.classList.remove('dark');

        toggle.innerHTML = `<img class="theme-picture" src="https://i.ibb.co/j9ntSFgv/day.jpg">`;
        return;
    }
}

export default themeUi;