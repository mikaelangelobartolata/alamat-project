import themeService from "./themeService.js";
import themeUi from "./themeUi.js";

const themeBtn = document.querySelector(".theme");

const themeController = {
    toggleTheme() {
        if (!themeBtn) return;

        const bodyDOM = document.body;
        const allChildren = bodyDOM.children;
        

        themeBtn.onclick = () => {
            const currentTheme = themeService.getCurrentTheme();

            if (currentTheme === "light") {
                for (const child of allChildren) {
                    child.classList.add('dark');
                }
                bodyDOM.classList.add('darkScrollbar');
                themeBtn.innerHTML = `<img class="theme-picture" src="https://i.ibb.co/QjXY0PLW/night.jpg">`;

                themeService.updateThemeData();
            } else {
                
                for (const child of allChildren) {
                    child.classList.remove('dark');
                }
                bodyDOM.classList.remove('darkScrollbar');
                themeBtn.innerHTML = `<img class="theme-picture" src="https://i.ibb.co/j9ntSFgv/day.jpg">`;

                themeService.updateThemeData();
            }
        };
    },

    renderTheme() {
        const currTheme = themeService.getCurrentTheme();
        themeUi(currTheme);
    }
}

export default themeController;
