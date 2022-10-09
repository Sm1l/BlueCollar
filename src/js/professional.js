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
    buttonLink: "https://sm1l.github.io/BazaVAGa",
    image: "/src/images/professional/ProfessionalImage.jpg",
  },
  {
    id: "professional-button-two",
    breadСrumbsImage: "",
    // breadСrumbs: "Residential",
    title: "Residential",
    description: [
      "Это первый абзац второй ссылки. Это первый абзац второй ссылки. Это первый абзац второй ссылки. Это первый абзац второй ссылки. Это первый абзац второй ссылки. Это первый абзац второй ссылки. Это первый абзац второй ссылки. Это первый абзац второй ссылки. Это первый абзац второй ссылки. Это первый абзац второй ссылки.",
      "Это второй абзац второй ссылки.",
      "Это третий абзац второй ссылки. Это третий абзац второй ссылки. Это третий абзац второй ссылки. Это третий абзац второй ссылки. Это третий абзац второй ссылки. Это третий абзац второй ссылки.",
      "Это четвертый абзац.",
    ],
    buttonLink: "https://sm1l.github.io/AliceWeather",
    image: "../images/welcome/IMAGE2.jpg",
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
    image: "img",
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
console.log(mainProfessionalButtons);

// for (let count = 0; count < mainProfessionalButtons.length; count++) {
//   const button = mainProfessionalButtons[count];
//   button.addEventListener("click", onClickProfessionalButton);

// return professionalButton;
// console.log(button.dataset);
// }
mainProfessionalButtons.forEach((el) =>
  el.addEventListener("click", onClickProfessionalButton)
);

//* обходим все кнопки, вешаем обработчик на каждую
// let professionalButtonId;
//*--------------------------------------2 (ф-я обработчик событий)

//? как professionalButtonId  из функции записать в глобальную переменную professionalButtonId!!!!
//? или передать в нужную ф-ю...

function onClickProfessionalButton(evt) {
  evt.preventDefault();
  // const professionalButton = evt.target;
  // console.log("Событие инициировано на", evt.target);
  // let professionalButtonId = el.dataset.id;
  // const professionalButtonId = evt.target.dataset.id;
  // console.log(professionalButtonId);
  // buttonClass();
  // professionalButtonId = evt.target.dataset.id;
  const slideProfessional = slideProfessionals.find(
    (item) => item.id === evt.target.dataset.id
  );
  // console.log(slideProfessional);
  //*--Получаем нужный нам объект из массива
  renderProfessional(slideProfessional);
  // return professionalButtonId;
  // console.log(`Вы нажали кнопку с id =`, button.dataset.id);
  //* создаем обработчик событий

  classProfessionalButton(evt.target);
}
function classProfessionalButton(professionalButton) {
  mainProfessionalButtons.forEach((btn) => {
    btn.classList.remove("main-professional__link_active");
  });
  professionalButton.classList.add("main-professional__link_active");
  // console.log(professionalButton);
  //*класс для кнопок
}

// console.log(professionalButtonId);
//*--------------------------------------
// function buttonClass() {
//   evt.target.classList.add("main-professional__link_active");
// }
//*-------------------------------------3

//*-------------------------------------4
function renderProfessional(slideProfessional) {
  // bredCrumbsImage?
  breadСrumbsProfessional.textContent =
    slideProfessional.breadСrumbs || slideProfessional.title;
  titleProfessional.textContent = slideProfessional.title;
  buttonProfessional.setAttribute("href", slideProfessional.buttonLink);
  imageProfessional.childNodes[1].setAttribute("src", slideProfessional.image);
  //!перенести image id
  //*отображаем нужные объекты, кроме descriptionProfessional
  console.log(imageProfessional.childNodes[1]);

  //*------------------------------------5

  descriptionProfessional.innerHTML = "";

  // while (descriptionProfessional.firstChild) {
  //   descriptionProfessional.removeChild(descriptionProfessional.firstChild);
  //   //*удаляем все дочерние элементы descriptionProfessional
  // }

  //*------------------------------------6
  slideProfessional.description.forEach((el) =>
    createProfessionalDescriptionPart(el)
  );

  // for (let count = 0; count < slideProfessional.description.length; count++) {
  //   let el = slideProfessional.description[count];
  // console.log(el);
  //   createProfessionalDescriptionPart(el);}
  //* создаем р для каждого элемента массива slideProfessional
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
