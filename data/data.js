function getUserData() {
    return JSON.parse(localStorage.getItem("current-user-alamat") || "null");
}

export default getUserData;