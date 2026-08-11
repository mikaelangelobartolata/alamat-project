import getUserData from "../../data/data.js";

function continueRead() {
    const userData = getUserData();

    if (!userData) return;

    if (!userData.lastPageViewed) return;

    return userData.lastPageViewed;
}

export default continueRead;