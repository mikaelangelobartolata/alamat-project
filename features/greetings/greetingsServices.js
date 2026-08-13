import getUserData from "../../data/data.js";

const greetingsService = {
    checkFistVisit() {
        const currUser = getUserData();

        if (!currUser) return true;
        return false;
    },
    getUserName() {
        const currUser = getUserData();

        return currUser.name;
    }
}

export default greetingsService;