import getUserData from "../../data/data.js";

const themeService = {
    updateThemeData() {
        const userData = getUserData();

        if (userData.theme === "light") {
            userData.theme = "dark";
        } else if (userData.theme === "dark") {
            userData.theme = "light";
        }

        localStorage.setItem("current-user-alamat", JSON.stringify(userData));
    },
    getCurrentTheme() {
        const userData = getUserData();

        return userData.theme;
    }
}

export default themeService;