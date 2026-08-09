import greetingsService from "./greetingsServices.js"
import greetingsUI from "./greetingsUi.js"

import getUserData from "../../data/data.js";
import createOverlay from "../../components/overlay.js";

import closeModal from "../utils/closeModal.js";

const body = document.querySelector("body");

const greetingsController = {
    checkFirstVisit() {
        const checkVisit = greetingsService.checkFistVisit();

        if (checkVisit) {
            fillName();
        }
    }
}

const fillName = () => {
    const { modal, header, main, footer } = greetingsUI.firstVist();

    body.append(createOverlay(), modal);

    const submitBtn = footer.querySelector("button");
    const close = header.querySelector(".close-modal");

    submitBtn.addEventListener("click", () => {
        const input = header.querySelector("input");
        const value = input.value.trim();

        if (value === "") return;

        intializeStartupData(value);
        closeModal(modal);
    });

    close.addEventListener("click", () => {
        closeModal(modal);
    });
}

export default greetingsController;