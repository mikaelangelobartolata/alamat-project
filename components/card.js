function createCard() {
    const card = document.createElement("section")
    card.classList.add("card");

    const header = document.createElement("div");
    const main = document.createElement("div");
    const footer = document.createElement("div");

    header.classList.add("card-header");
    main.classList.add("card-main");
    footer.classList.add("card-footer");

    card.append(header, main, footer);

    return { card, header, main, footer };
}

export default createCard;