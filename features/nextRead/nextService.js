import readServices from "../read/readService.js";
import getUserData from "../../data/data.js";
import getAllScenes from "../../data/storyData/aggregator.js";

const nextService = {
    getNextScene() {
        const userData = getUserData();
        const allScenes = getAllScenes();

        const keys = Object.keys(allScenes);

        const currScene = userData.lastPageViewed;
        const currIndex = keys.indexOf(currScene);

        const nextScene = keys[currIndex + 1];

        return nextScene;
    },
    getNextSceneData(nextScene) {
        return readServices.getNextSceneData(nextScene);
    }
}

export default nextService;