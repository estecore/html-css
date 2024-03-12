const btnColor = document.querySelectorAll(".colors__item");
const setColor = document.querySelectorAll("[data-color]");

const blue = "linear-gradient(180deg, #cadbeb 0%, #ebebeb 100%)";
const pink = "linear-gradient(180deg, #f3d6d1 0%, #ebebeb 100%)";
const black = "linear-gradient(180deg, #b6b6b6 0%, #ebebeb 100%)";
const green = "linear-gradient(180deg, #ddead9 0%, #ebebeb 100%)";
const white = "linear-gradient(180deg, #fafafa 0%, #ebebeb 100%)";

const bgColor = {
  blue,
  pink,
  black,
  green,
  white,
};

btnColor.forEach((item) => {
  item.addEventListener("click", (event) => {
    btnColor.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.toggle("active");

    document.querySelector("body").style.background =
      bgColor[item.dataset.color];

    setColor.forEach((color) => {
      color.classList.remove("active");

      if (item.dataset.color === color.dataset.color) {
        color.classList.add("active");
      }
    });
  });
});
