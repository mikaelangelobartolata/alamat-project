import getUserData from "../../data/data.js"
import getAllScenes from "../../data/storyData/aggregator.js";

import dateTime from "../../utils/dateTime.js";

const historyService = {
    addLastViewPage() {
        const userData = getUserData();
        const lastPage = userData.lastPageViewed;
        const history = userData.history;

        const dateTimeData = dateTime.getBoth();

        history.unshift({
            lastPage: lastPage,
            date: dateTimeData.date,
            time: dateTimeData.time
        });
        localStorage.setItem("current-user-alamat", JSON.stringify(userData));
    },
    getHistoryData() {
        const userData = getUserData();

        if (!userData) return false;

        const allScenes = getAllScenes();

        if (!userData.history) return;
        
        let allData = [];

        for (const scene of userData.history) {
            allData.push({
                img: allScenes[scene.lastPage].img,
                scene: scene.lastPage,
                date: scene.date,
                time: scene.time
            });
        }

        return allData;
    }
}

export default historyService;