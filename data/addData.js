import getUserData from "./data.js";

function intializeStartupData(username) {
    let currUser = getUserData();

    if (currUser !== null) return;

    const data = {
        name: username,
        isFirstVisit: true,
        theme: "light",
        history: []
    }
    currUser = data;
    alert(currUser);

    localStorage.setItem("current-user-alamat", JSON.stringify(currUser));
}

export default intializeStartupData;