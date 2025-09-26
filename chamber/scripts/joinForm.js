// DOM Variables to help with displaying the modals
const modalOne = document.getElementById("noMemModal");
const modalTwo = document.getElementById("broMemModal");
const modalThree = document.getElementById("silMemModal");
const modalFour = document.getElementById("golMemModal");

const modalOneCloseButton = document.getElementById("noMemMoClose");
const modalTwoCloseButton = document.getElementById("broMemMoClose");
const modalThreeCloseButton = document.getElementById("silMemMoClose");
const modalFourCloseButton = document.getElementById("golMemMoClose");

const modalOneOpenButton = document.getElementById("noMemDetails");
const modalTwoOpenButton = document.getElementById("broMemDetails");
const modalThreeOpenButton = document.getElementById("siMemDetails");
const modalFourOpenButton = document.getElementById("goMemDetails");

// Have the click events to open and close each modal
modalOneOpenButton.addEventListener("click", () => {
    modalOne.showModal();
});

modalTwoOpenButton.addEventListener("click", () => {
    modalTwo.showModal();
});

modalThreeOpenButton.addEventListener("click", () => {
    modalThree.showModal();
});

modalFourOpenButton.addEventListener("click", () => {
    modalFour.showModal();
});

modalOneCloseButton.addEventListener("click", () => {
    modalOne.close();
});

modalTwoCloseButton.addEventListener("click", () => {
    modalTwo.close();
});
modalThreeCloseButton.addEventListener("click", () => {
    modalThree.close();
});

modalFourCloseButton.addEventListener("click", () => {
    modalFour.close();
});

// DOM for setting the value of the hidden form value
const timestamp = document.getElementById("formTimeStamp");
const form = document.getElementById("chamberJoinForm");

form.addEventListener("submit", () => {
    // Add the timestamp
    const formDate = new Date();
    timestamp.setAttribute("value", formDate);
});
