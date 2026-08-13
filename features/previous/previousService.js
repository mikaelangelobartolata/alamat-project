import readServices from "../read/readService.js";
import getUserData from "../../data/data.js";
import getAllScenes from "../../data/storyData/aggregator.js";

function getPreviousScene() {
    const userData = getUserData();
    const allScenes = getAllScenes();

    const keys = Object.keys(allScenes);

    const currScene = userData.lastPageViewed;
    const currIndex = keys.indexOf(currScene);

    const previousScene = keys[currIndex - 1];

    return previousScene;
}

export default getPreviousScene;