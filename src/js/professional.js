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
    breadСrumbs: "Residential",
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
    description: ["Первый абзацтретьей страницы", "Второй абзац третьей страницы"],
    buttonLink: "https://sm1l.github.io/BlueCollar/industrial",
    image: "img",
  },
];

const breadСrumbsProfessional = document.querySelector("#slide-professional__breadСrumbs");
const titleProfessional = document.querySelector("#slide-professional__title");
const descriptionProfessional = document.querySelector("#slide-professional__description");
const buttonProfessional = document.querySelector("#slide-professional__button");

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

const mainProfessionalButtons = document.querySelectorAll(".main-professional__link");
// console.log(mainProfessionalButtons);
mainProfessionalButtons.forEach((el) => el.addEventListener("click", onClickProfessionalButton));

function onClickProfessionalButton(evt) {
  evt.preventDefault();
  const slideProfessional = slideProfessionals.find((item) => item.id === evt.target.dataset.id);
  //*--Получаем нужный нам объект из массива
  renderProfessional(slideProfessional);
  classProfessionalButton(evt.target);
}

function classProfessionalButton(professionalButton) {
  mainProfessionalButtons.forEach((btn) => {
    btn.classList.remove("main-professional__link_active");
  });
  professionalButton.classList.add("main-professional__link_active");
  //*класс для кнопок
}

function renderProfessional(slideProfessional) {
  // bredCrumbsImage? html
  breadСrumbsProfessional.textContent = slideProfessional.breadСrumbs || slideProfessional.title;
  titleProfessional.textContent = slideProfessional.title;
  buttonProfessional.setAttribute("href", slideProfessional.buttonLink);
  imageProfessional.childNodes[1].setAttribute("src", slideProfessional.image);
  //!перенести image id
  //*отображаем нужные объекты, кроме descriptionProfessional
  descriptionProfessional.innerHTML = "";
  //   //*удаляем все дочерние элементы descriptionProfessional
  slideProfessional.description.forEach((el) => createProfessionalDescriptionPart(el));
  //* создаем р для каждого элемента массива slideProfessional
}
