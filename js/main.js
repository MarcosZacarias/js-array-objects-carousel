// | Recupero dati

const slides = document.getElementById("img-carousel");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const miniSlide = document.getElementById("img-mini-carousel");

const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];
console.log(images[3].image);

let imageNumber = 0;
printSlide(imageNumber, images);

for (const image of images) {
  miniSlide.innerHTML += `
  <img src="${image.image}" alt="" />
  `;
}

btnRight.addEventListener("click", function () {
  imageNumber++;
  console.log(imageNumber);
  if (imageNumber < images.length) {
    printSlide(imageNumber, images);
  } else if (imageNumber > images.length - 1) {
    imageNumber = 0;
    printSlide(imageNumber, images);
  }
});

btnLeft.addEventListener("click", function () {
  imageNumber--;
  if (imageNumber < images.length - 1 && imageNumber > -1) {
    printSlide(imageNumber, images);
  } else if (imageNumber <= 0) {
    imageNumber = images.length - 1;
    printSlide(imageNumber, images);
  }
});

// | Funzione stampa slide
function printSlide(indexArray, array) {
  slideURL = array[indexArray].image;
  slideTitle = array[indexArray].title;
  slideText = array[indexArray].text;

  slides.innerHTML = `
    <img src="${slideURL}" alt="" />
    <div class="bottom-carousel">
    <h2>${slideTitle}</h2>
    <p>${slideText}</p>
    </div>
    `;
}
