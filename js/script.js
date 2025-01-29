/*
    1. Create an array consisting of all the cards 
        Card = {src: imgfilename, matched: false}

    2. if card is clicked
        - every 2 actions = turnCount++
        - flip over
        - check to see if there is 2nd card that is flipped over
            - if these two cards have the same src, then the match key to true
                - if matched = true, then those two cards stay up for good
              else, flip the card back

    3. win condition
        if all the cards in the array have matched = true, then pop modal saying you won

    4. new game button
        if clicked
            - re-shuffles the card array
            - re renders the cards

*/
const images = [
  { src: "./assets/helmet-1.png", matched: false },
  { src: "./assets/potion-1.png", matched: false },
  { src: "./assets/ring-1.png", matched: false },
  { src: "./assets/scroll-1.png", matched: false },
  { src: "./assets/shield-1.png", matched: false },
  { src: "./assets/sword-1.png", matched: false },
];

const cardImages = [...images, ...images];
console.log("cardArray = ", cardImages);

// DOM elements
const cards = document.querySelectorAll(".card");
const cardFaces = document.querySelectorAll(".face");

// renderCard function
function renderCard() {
  // update each cardFace with the corresponding image from cardArray
  cardFaces.forEach((cardFace, index) => {
    const img = document.createElement("img");
    img.src = cardImages[index].src;
    cardFace.appendChild(img);
  });
}

// shuffleCard function
function shuffleCard() {
  for (let i = cardImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardImages[i], cardImages[j]] = [cardImages[j],cardImages[i]];
  }
  return cardImages;
}

shuffleCard();
renderCard();
