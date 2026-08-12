import getUserData from "./data.js";

function intializeStartupData(username) {
    let currUser = getUserData();

    if (currUser !== null) return;

    const data = {
        name: username,
        isFirstVisit: true,
        isFinishedOnce: false,
        isCurrentFinished: false,
        theme: "light",
        lastPageViewed: null,
        history: [],
    }
    currUser = data;

    localStorage.setItem("current-user-alamat", JSON.stringify(currUser));
}

export default intializeStartupData;