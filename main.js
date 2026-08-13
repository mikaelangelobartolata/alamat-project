import greetingsController from "./features/greetings/greetingsController.js";
import clickSpoiler from "./features/summary/summaryController.js";
import readStory from "./features/read/readController.js";
import continueReadController from "./features/continueRead/continueController.js";
import historyController from "./features/history/historyController.js";
import themeController from "./features/themeToggle/themeController.js";

import sectionInteraction from "./features/indexInteractions/section/sectionController.js";
import footerInteraction from "./features/indexInteractions/footer/footerController.js";

greetingsController.checkFirstVisit();
historyController.renderHistory();
clickSpoiler();
readStory();
continueReadController();

themeController.toggleTheme();
themeController.renderTheme();

sectionInteraction();
footerInteraction();

