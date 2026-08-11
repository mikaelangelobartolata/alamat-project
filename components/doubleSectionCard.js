function doubleSection() {
    const card = document.createElement("section");
    card.classList.add("card");

    const leftSection = document.createElement("div");
    const rightSection = document.createElement("div");

    const header = document.createElement("div");
    const main = document.createElement("div");
    const footer = document.createElement("div");

    header.classList.add("card-header");
    main.classList.add("card-main");
    footer.classList.add("card-footer");

    leftSection.classList.add("left-section");
    rightSection.classList.add("right-section");

    rightSection.append(header, main, footer);

    card.append(leftSection, rightSection);

    return { card, leftSection, rightSection, header, main, footer };
}

export default doubleSection;