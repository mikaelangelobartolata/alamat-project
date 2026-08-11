import doubleSection from "../../components/doubleSectionCard.js";

function historyUi(dataArr) {
    const wrapper = document.createElement("section");
    for (const data of dataArr) {
        const { card, leftSection, rightSection, header, main, footer } = doubleSection();
        
        const img = document.createElement("img");
        img.src = data.img;

        header.textContent = "Scene";

        const scene = document.createElement("p");
        scene.classList.add("scene-text");
        scene.textContent = data.scene;
        main.appendChild(scene);

        const date = document.createElement("span");
        const time = document.createElement("span");

        date.classList.add("date-tag");
        time.classList.add("tag");

        date.textContent = `${data.date}`;
        time.textContent = `${data.time}`;
        footer.append(date, time);

        leftSection.appendChild(img);
        card.append(leftSection, rightSection);
        wrapper.appendChild(card);
    }
    return wrapper;
}

export default historyUi;