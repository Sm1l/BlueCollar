import imageOne from "../images/testimonial/testimonialPhoto.jpg";
import imageLeo from "../images/testimonial/leo.jpg";
import imageDon from "../images/testimonial/don.jpg";
import imageRaf from "../images/testimonial/raf.jpg";

const testimonialPhoto = document.querySelector("#testimonial-photo");
const testimonialName = document.querySelector("#testimonial-name");
const testimonialCity = document.querySelector("#testimonial-city");
const testimonialText = document.querySelector("#testimonial-text");
const testimonialButtonLeft = document.querySelector("#testimonial-button-left");
const testimonialButtonRight = document.querySelector("#testimonial-button-right");

const testimonialStorage = [
  {
    photo: `${imageOne}`,
    name: "Nancy Luther",
    city: "New York",
    text: "We have had several good experiences with Blue Collar team. Most recently, they replaced our 20-year-old HVAC system with a new, modern, and more efficient system & it worked fine.",
  },
  {
    photo: `${imageLeo}`,
    name: "Leonardo",
    city: "Moscow",
    text: "В жизне ниндзя наступает такой момент, когда он или она должны выбирать между путем, который навязывают им другие и истинным путем своего сердца.",
  },
  {
    photo: `${imageDon}`,
    name: "Donatello",
    city: "Yeisk",
    text: "В жизни бывают ситуации, когда на карту поставлено всё. Тогда всё в тебе мобилизуется. Когда понимаешь, что придется отдать всё что имеешь, потому что тебя меньшее не спасет. И вот тогда ты узнаешь кто ты есть на самом деле. Конечно, если останешься в живых.",
  },
  {
    photo: `${imageRaf}`,
    name: "Rafael",
    city: "Ryazan",
    text: "Нам не нужны новые генные мутанты, ведь у нас есть Майки!",
  },
];

let index = 0;

function onClickTestimonialButtonPrev(evt) {
  evt.preventDefault();
  if (index === 0) {
    index = testimonialStorage.length - 1;
    testimonialRender(testimonialStorage[index]);
  } else {
    // index--;
    testimonialRender(testimonialStorage[--index]);
  }
}

function onClickTestimonialButtonNext(evt) {
  evt.preventDefault();
  if (index === testimonialStorage.length - 1) {
    index = 0;
    testimonialRender(testimonialStorage[index]);
  } else {
    // index++;
    testimonialRender(testimonialStorage[++index]);
  }
}

function testimonialRender(obj) {
  testimonialPhoto.setAttribute("src", obj.photo);
  testimonialName.textContent = obj.name;
  testimonialCity.textContent = obj.city;
  testimonialText.textContent = obj.text;
}

testimonialButtonLeft.addEventListener("click", onClickTestimonialButtonPrev);

testimonialButtonRight.addEventListener("click", onClickTestimonialButtonNext);
