const body = document.querySelector(".body");
const toggleThemeBtn = document.querySelector(".btn-toggle-theme");
const headerLogo = document.querySelector(".header__logo");

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
