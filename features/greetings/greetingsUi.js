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
    },
    returningUser(name) {
        const { modal, header, main, footer } = createModal();

        modal.classList.add("modal--returning-user");

        const div = document.createElement("div");
        const img = document.createElement("img");

        const greetings = document.querySelector("p");

        img.src = "https://media.giphy.com/media/6hKL8BI8rRNrMRFtAx/giphy.gif";
        img.alt = "Cat Saying Hello GIF";

        greetings.textContent = `Hello ${name}! Welcome Back!`;

        div.appendChild(img);

        header.appendChild(div);
        main.appendChild(greetings);

        return modal;
    }
}

export default greetingsUI;