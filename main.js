import greetingsController from "./features/greetings/greetingsController.js";
import clickSpoiler from "./features/summary/summaryController.js";
import readStory from "./features/read/readController.js";
import continueReadController from "./features/continueRead/continueController.js";
import historyController from "./features/history/historyController.js";
import themeController from "./features/themeToggle/themeController.js";

greetingsController.checkFirstVisit();
historyController.renderHistory();
clickSpoiler();
readStory();
continueReadController();

themeController.toggleTheme();
themeController.renderTheme();

function sectionCSS() {
    const hoverBook = document.querySelector('.section-1st-child');
    const hoverGroup = document.querySelector('.section-2nd-child');
    const hoverDate = document.querySelector('.section-3rd-child');

    const logoBook = document.querySelector('.section-logo');
    const logoGroup = document.querySelector('.section-logo-2');
    const logoDate = document.querySelector('.section-logo-3');

    logoBook.innerHTML = `<img class="section-Picture" src="https://i.ibb.co/qF0Qp4Ys/unhover-book.jpg">`;
    logoGroup.innerHTML = `<img class="section-Picture" src="https://i.ibb.co/xKSzDyTV/unhover-group.jpg">`;
    logoDate.innerHTML = `<img class="section-Picture" src="https://i.ibb.co/PzrJkRzJ/unhover-date.jpg">`;


    hoverBook.addEventListener('mouseenter', ()=> {
        logoBook.innerHTML = `<img class="section-Picture extra-picture"src="https://i.ibb.co/HfcmbF3c/hover-book.jpg">`;
    });
    hoverBook.addEventListener('mouseleave', ()=> {
        logoBook.innerHTML = `<img class="section-Picture" src="https://i.ibb.co/qF0Qp4Ys/unhover-book.jpg">`;
    });

    hoverGroup.addEventListener('mouseenter', ()=> {
        logoGroup.innerHTML = `<img class="section-Picture extra-picture"src="https://i.ibb.co/whYwm4rb/hover-group.jpg">`;
    });
    hoverGroup.addEventListener('mouseleave', ()=> {
        logoGroup.innerHTML = `<img class="section-Picture" src="https://i.ibb.co/xKSzDyTV/unhover-group.jpg">`;
    });

    hoverDate.addEventListener('mouseenter', ()=> {
        logoDate.innerHTML = `<img class="section-Picture extra-picture"src="https://i.ibb.co/6MH1FCk/hover-date.jpg">`;
    });
    hoverDate.addEventListener('mouseleave', ()=> {
        logoDate.innerHTML = `<img class="section-Picture" src="https://i.ibb.co/PzrJkRzJ/unhover-date.jpg">`;
    });
    
}
function footerCSS() {
    const media = document.querySelector('.social-media-container');
    media.innerHTML = `
        <img class="media-logo" src="https://i.ibb.co/pvYBZ0kQ/fb.jpg">
        <img class="media-logo" src="https://i.ibb.co/rKv8kLz9/insta.jpg">
        <img class="media-logo" src="https://i.ibb.co/LDBMCGsN/tiktok.jpg">
        `;
}

