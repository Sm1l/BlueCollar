const slideProfessionals = [
  {
    breadСrumbsImage: "",
    breadСrumbs: "Electrical installation",
    title: "Commercial",
    description: [
      "Electrical & Maintenance Services Ltd offers a full range of electrical services to suit your needs – from moving a light switch to complete house rewires.",
      "In addition to providing fully qualified, competent electricians in and around London, the company also runs an electrical wholesale shop.",
    ],
    buttonLink: "",
    image: "",
  },
  {
    breadСrumbsImage: "",
    breadСrumbs: "Residential",
    title: "Residential",
    description: [
      "Electrical & Maintenance Services Ltd offers a full range of electrical services to suit your needs – from moving a light switch to complete house rewires.",
      "hello2",
      "Это третий абзац Это третий абзац Это третий абзац Это третий абзац Это третий абзац Это третий абзац",
      "Это четвертый абзац",
    ],
    buttonLink: "",
    image: "",
  },
  {
    breadСrumbsImage: "",
    breadСrumbs: "Industrial",
    title: "Industrial",
    description: [
      "Первый абзацтретьей страницы",
      "Второй абзац третьей страницы",
    ],
    buttonLink: "",
    image: "",
  },
];

// const breadСrumbsImage = document.querySelector("::before?")
const breadСrumbsProfessional = document.querySelector(
  "#slide-professional__breadСrumbs"
);
const titleProfessional = document.querySelector("#slide-professional__title");
const descriptionProfessional = document.querySelector(
  "#slide-professional__description"
);
const buttonProfessional = document.querySelector(
  "#slide-professional__button"
);
const imageProfessional = document.querySelector("#slide-professional__image");

console.log(breadСrumbsProfessional);
console.log(descriptionProfessional);

export function createProfessionalDescriptionPart(text) {
  const pEl = document.createElement("p"); //создаем элемент </p>
  pEl.classList.add("slide-professional__text"); //добавляем класс
  pEl.textContent = text;
  descriptionProfessional.appendChild(pEl);
}
slideProfessionals[0].description.forEach(createProfessionalDescriptionPart);

// --------------------------------1
const mainProfessionalButtons = document.querySelectorAll(
  ".main-professional__link"
);
// console.log(mainProfessionalButtons);

for (let count = 0; count < mainProfessionalButtons.length; count++) {
  const button = mainProfessionalButtons[count];
  button.addEventListener(
    "click",
    onClickProfessionalButton
    // {
    // evt.preventDefault();
    // console.log(`Вы нажали кнопку с id = ${button.dataset.id}`);
    // }
  );
  // console.log(button.dataset);
}
//--------------------------------------2
function onClickProfessionalButton(evt) {
  evt.preventDefault();
  console.log("Событие инициировано на", evt.target);
  const elem = evt.target;
  console.log("id = ", elem.dataset.id);
  // console.log(`Вы нажали кнопку с id =`, button.dataset.id);
}

//--------------------------------------

// const slideP = document.querySelectorAll(".slide-professional__text");
// console.log(slideP);
// removeElements(slideP);

// function removeElements(el) {
//   el.forEach.remove();
// }

// export function createProfessionalElement(text) {
//   const titleEl = document.createElement("title");
//   titleEl.classList.add("slide-professional__title");
//   titleEl.textContent = text;
//   titleProfessional.prepend(titleEl);
// }
// slideProfessionals[0].title.forEach(createProfessionalElement);
