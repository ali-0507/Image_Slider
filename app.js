 const card = [
    {
        img:"penguin.jpeg",
        title:"Penguin",
        text:"Let's know more about Penguins!"
    }, 
    {
        img:"humming_bird.jpeg",
        title:"Humming Bird",
        text:"Let's know more about Humming Birds!"
    },
    {
        img:"dave.jpeg",
        title:"Dave Bird",
        text:"Let's know more about Dave!"
    },
    {
        img:"eagle.jpeg",
        title:"Eagle",
        text:"Let's know more about Eagle!"
    },
    {
        img:"peacock.jpeg",
        title:"Peacock",
        text:"Let's know more about Peacocks!"
    }
];

let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");
const cardtitle = document.getElementById("cardTitle");
const cardtext = document.getElementById("cardText");
const slideCard = document.getElementById("slideCard");


function updateCard(animationDirection) {
   sliderImage.src = card[currentIndex].img;
   cardtitle.innerText = card[currentIndex].title;
   cardtext.innerText = card[currentIndex].text;

    slideCard.classList.remove("slide-left","slide-right");
    void slideCard.offsetWidth; 
    slideCard.classList.add(animationDirection);

    setTimeout(() => {
        sliderImage.src = card[currentIndex].img;
        cardtitle.innerText = card[currentIndex].title;
        cardtext.innerText = card[currentIndex].text;
    }, 1000);
}


document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + card.length) % card.length;
    updateCard("slide-left");
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % card.length;
    updateCard("slide-right");
});