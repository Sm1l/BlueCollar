const slideProfessionals = [
  {
    spanImage: "",
    span: "Electrical installation",
    title: "Commercial",
    description: [
      "Electrical & Maintenance Services Ltd offers a full range of electrical services to suit your needs – from moving a light switch to complete house rewires.",
      "In addition to providing fully qualified, competent electricians in and around London, the company also runs an electrical wholesale shop.",
    ],
    buttonLink: "",
    image: "",
  },
  {
    spanImage: "",
    span: "Residential",
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
    spanImage: "",
    span: "Industrial",
    title: "Industrial",
    description: ["lorem*3", "hello3"],
    buttonLink: "",
    image: "",
  },
];

const spanProfessional = document.querySelector("#slide-professional__span");
const titleProfessional = document.querySelector("#slide-professional__title");
const descriptionProfessional = document.querySelector(
  "#slide-professional__description"
);
console.log(spanProfessional);
console.log(descriptionProfessional);

export function createProfessionalDescriptionPart(text) {
  const pEl = document.createElement("p");
  pEl.classList.add("slide-professional__text");
  pEl.textContent = text;
  descriptionProfessional.appendChild(pEl);
}

slideProfessionals[0].description.forEach(createProfessionalDescriptionPart);
