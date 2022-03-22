import { isInvalid } from "./modules/helpers.js";
import * as dom from "./modules/dom.js";
import * as loop from "./modules/loop.js";

/**
 * General Events ---------------------------------
 */
// Open questions
dom.questionOpenBtns.forEach((questionOpenBtn, idx) => {
  questionOpenBtn.addEventListener("click", () => {
    const openedBox = Object.values(dom.questionBoxes).find(
      questionBox => questionBox.style.display === "flex"
    );

    if (openedBox) openedBox.style.display = "none";

    dom.questionBoxes[idx].style.display = "flex";
  });
});

// Toggle theme
dom.toggleThemeBtn.onclick = function () {
  dom.body.classList.toggle("theme-green");

  dom.toggleThemeBtn.classList.toggle("fa-sun");
  dom.toggleThemeBtn.classList.toggle("fa-moon");

  const imgName = dom.headerLogo.src.split("/").at(-1);
  let imgPath = "assets/images/";
  dom.headerLogo.src =
    imgName === "signature-pink.png"
      ? `${imgPath}signature-green.png`
      : `${imgPath}signature-pink.png`;
};

/**
 * Loop questions ---------------------------------
 */
// Question 1
dom.loopQ1SubmitBtn.addEventListener("click", () => {
  const x = +dom.loopQ1InputX.value;

  if (isInvalid(x, Number.isInteger)) {
    dom.loopQ1Result.innerHTML = `❌ Invalid input. Please enter a integer number >= 0.`;
    return;
  }

  dom.loopQ1Result.innerHTML = `n = ${loop.findSmallestPositiveInt(x)}.`;
});

// Question 2
dom.loopQ2SubmitBtn.addEventListener("click", () => {
  const x = +dom.loopQ2InputX.value;
  const n = +dom.loopQ2InputN.value;

  dom.loopQ2Result.innerHTML = "";

  if (isInvalid(x)) {
    dom.loopQ2Result.innerHTML = `❌ Invalid input "x ". Please enter a number >= 0.`;
    return;
  }

  if (isInvalid(n, n => !(!Number.isInteger(n) || n < 1))) {
    dom.loopQ2Result.innerHTML += `❌ Invalid input "n". Please enter a integer number >= 1.`;
    return;
  }

  dom.loopQ2Result.innerHTML = `S(n) = ${loop.findSumSn(x, n)}.`;
});
