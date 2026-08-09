import createModal from "../../components/modal.js";

const greetingsUI = {
    firstVist() {
        const { modal, header, main, footer } = createModal();

        modal.classList.add("modal--first-visit");

        const closeModal = document.createElement("button");
        const question = document.createElement("p");
        const input = document.createElement("input");
        const button = document.createElement("button");

        closeModal.textContent = "x";

        question.textContent = "Before we start, can I ask your name?";
        input.placeholder = "Name";
        button.textContent = "Submit"

        closeModal.classList.add("close-modal");

        header.appendChild(closeModal);
        main.append(question, input);
        footer.appendChild(button);

        return { modal, header, main, footer };
    }
}

export default greetingsUI;