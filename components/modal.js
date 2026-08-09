function createModal() {
    const modal = document.createElement("section")
    modal.classList.add("modal");

    const header = document.createElement("div");
    const main = document.createElement("div");
    const footer = document.createElement("div");

    header.classList.add("modal-header");
    main.classList.add("modal-main");
    footer.classList.add("modal-footer");

    modal.append(header, main, footer);

    return { modal, header, main, footer };
}

export default createModal;