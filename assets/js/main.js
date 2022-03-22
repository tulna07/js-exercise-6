import {
  body,
  toggleThemeBtn,
  headerLogo,
  questionOpenBtns,
  questionBoxes,
} from "./modules/dom.js";

/**
 * General Events ---------------------------------
 */
// Open questions
questionOpenBtns.forEach((questionOpenBtn, idx) => {
  questionOpenBtn.addEventListener("click", () => {
    const openedBox = Object.values(questionBoxes).find(
      questionBox => questionBox.style.display === "flex"
    );

    if (openedBox) openedBox.style.display = "none";

    questionBoxes[idx].style.display = "flex";
  });
});

// Toggle theme
toggleThemeBtn.onclick = function () {
  body.classList.toggle("theme-green");

  toggleThemeBtn.classList.toggle("fa-sun");
  toggleThemeBtn.classList.toggle("fa-moon");

  const imgName = headerLogo.src.split("/").at(-1);
  let imgPath = "assets/images/";
  headerLogo.src =
    imgName === "signature-pink.png"
      ? imgPath + "signature-green.png"
      : imgPath + "signature-pink.png";
};
