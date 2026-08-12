import themeService from "./themeService.js";
import themeUi from "./themeUi.js";

const themeBtn = document.querySelector(".theme");

const themeController = {
    toggleTheme() {
        const bodyDOM = document.body;

        const allChildren = bodyDOM.children;
        const toggle = document.querySelector('.theme');
        toggle.innerHTML = `<img src="https://i.ibb.co/j9ntSFgv/day.jpg" class="theme-picture">`;

        themeBtn.addEventListener("click", () => {
            if(themeService.getCurrentTheme() === "light") {
                themeService.updateThemeData();

                for (const child of allChildren) {
                    child.classList.add('dark');
                }
                
                toggle.innerHTML = `<img class="theme-picture" src="https://i.ibb.co/QjXY0PLW/night.jpg">`;
                return;
            } else {
                themeService.updateThemeData();

                for (const child of allChildren) child.classList.remove('dark');
                toggle.innerHTML = `<img class="theme-picture" src="https://i.ibb.co/j9ntSFgv/day.jpg">`;
                return;
            }
        });
    },
    renderTheme() {
        const currTheme = themeService.getCurrentTheme();

        themeUi(currTheme);
    }
}

export default themeController;