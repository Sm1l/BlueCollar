const slideProfessionals = [
  {
    id: "professional-button-one",
    breadСrumbsImage: "image/",
    breadСrumbs: "Electrical installation",
    title: "Commercial",
    description: [
      "Electrical & Maintenance Services Ltd offers a full range of electrical services to suit your needs – from moving a light switch to complete house rewires.",
      "In addition to providing fully qualified, competent electricians in and around London, the company also runs an electrical wholesale shop.",
    ],
    buttonLink: "https://sm1l.github.io/BlueCollar/#commercial",
    image: "/src/images/professional/ProfessionalImage.jpg",
  },
  {
    id: "professional-button-two",
    breadСrumbsImage: "",
    breadСrumbs: "Residential",
    title: "Residential",
    description: [
      "Это первый абзац второй ссылки. Это первый абзац второй ссылки. Это первый абзац второй ссылки. Это первый абзац второй ссылки. Это первый абзац второй ссылки. Это первый абзац второй ссылки. Это первый абзац второй ссылки. Это первый абзац второй ссылки. Это первый абзац второй ссылки. Это первый абзац второй ссылки.",
      "Это второй абзац второй ссылки.",
      "Это третий абзац второй ссылки. Это третий абзац второй ссылки. Это третий абзац второй ссылки. Это третий абзац второй ссылки. Это третий абзац второй ссылки. Это третий абзац второй ссылки.",
      "Это четвертый абзац.",
    ],
    buttonLink: "https://sm1l.github.io/BlueCollar/#residential",
    image: "/src/images/welcome/IMAGE2.jpg",
  },
  {
    id: "professional-button-three",
    breadСrumbsImage: "",
    breadСrumbs: "Industrial",
    title: "Industrial",
    description: [
      "Первый абзацтретьей страницы",
      "Второй абзац третьей страницы",
    ],
    buttonLink: "https://sm1l.github.io/BlueCollar/industrial",
    image: "",
  },
];

// console.log(slideProfessionals.length);

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

//*--------------------------------1
const mainProfessionalButtons = document.querySelectorAll(
  ".main-professional__link"
);
// console.log(mainProfessionalButtons);
let professionalButtonId = "professional-button-two";

for (let count = 0; count < mainProfessionalButtons.length; count++) {
  const button = mainProfessionalButtons[count];
  button.addEventListener("click", onClickProfessionalButton);
  // renderProfessional();
  // return professionalButton;
  // console.log(button.dataset);
}
//* обходим все кнопки, вешаем обработчик на каждую

//*--------------------------------------2 (ф-я обработчик событий)

//? как professionalButtonId  из функции записать в глобальную переменную professionalButtonId!!!!
//? или передать в нужную ф-ю...

function onClickProfessionalButton(evt) {
  evt.preventDefault();
  // const el = evt.target;
  // console.log("Событие инициировано на", evt.target);
  // let professionalButtonId = el.dataset.id;
  let professionalButtonId = evt.target.dataset.id;
  console.log(professionalButtonId);
  renderProfessional();
  // return professionalButtonId;
  // console.log(`Вы нажали кнопку с id =`, button.dataset.id);
  //* создаем обработчик событий
}

// console.log(professionalButtonId);

//*-------------------------------------3
let slideProfessional = slideProfessionals.find(function (item) {
  return item.id === professionalButtonId;
});
console.log(slideProfessional);
//*--Получаем нужный нам массив из 3-х

//*-------------------------------------4
function renderProfessional() {
  // bredCrumbsImage?
  breadСrumbsProfessional.textContent = slideProfessional.breadСrumbs;
  titleProfessional.textContent = slideProfessional.title;
  buttonProfessional.setAttribute("href", slideProfessional.buttonLink);
  imageProfessional.childNodes[1].setAttribute("src", slideProfessional.image);
  //*отображаем нужные объекты, кроме descriptionProfessional

  //*------------------------------------5

  while (descriptionProfessional.firstChild) {
    descriptionProfessional.removeChild(descriptionProfessional.firstChild);
    //*удаляем все дочерние элементы descriptionProfessional
  }

  //*------------------------------------6

  for (let count = 0; count < slideProfessional.description.length; count++) {
    let el = slideProfessional.description[count];
    // console.log(el);
    createProfessionalDescriptionPart(el);
    //* создаем р для каждого элемента массива slideProfessional
  }
}

//*--------------------------------------

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
