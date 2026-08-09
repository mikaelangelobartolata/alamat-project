import getUserData from "../../data/data.js";

const greetingsService = {
    checkFistVisit() {
        const currUser = getUserData();

        if (!currUser) return true;
        return false;
    }
}

export default greetingsService;