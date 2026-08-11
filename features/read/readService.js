import getUserData from "../../data/data.js"
import getAllScenes from "../../data/storyData/aggregator.js";

const readServices = {
    getLastViewData() {
        const userData = getUserData();
        const allScenes = getAllScenes();

        if (!userData.lastPageViewed) {
            const firstScene = allScenes["scene1"];

            this.setCurrView("scene1");

            return firstScene;
        }
        const lastView = userData.lastPageViewed;
        return allScenes[lastView];
    },
    getNextSceneData(nextScene) {
        const allScenes = getAllScenes();

        return allScenes[nextScene];
    },
    setCurrView(currScene) {
        const userData = getUserData();

        userData.lastPageViewed = currScene;
        
        localStorage.setItem("current-user-alamat", JSON.stringify(userData));
    },
    setFinished() {
        const userData = getUserData();
        userData.isFinishedOnce = true;

        localStorage.setItem("current-user-alamat", JSON.stringify(userData));
    },
    restartViewPage() {
        const userData = getUserData();
        userData.lastPageViewed = null;

        localStorage.setItem("current-user-alamat", JSON.stringify(userData));
    },
    checkReadStatus() {
        const userData = getUserData();

        return userData.isFinishedOnce;
    }
}

export default readServices;