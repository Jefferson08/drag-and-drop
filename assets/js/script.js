
//Getting the cards and dropzones

const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

/* CARD EVENTS */

//Binding the events to the functions

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
})

//Fired when the drag starts.

function dragstart(){
    dropzones.forEach(dropzone => {
        dropzone.classList.add("highlight");
    })

    this.classList.add("is-dragging");
}

//Fired when the element is being dragged around.
function drag(){
    console.log("Being dragged around");
}

//Fired when the drag stops.
function dragend(){
    this.classList.remove("is-dragging");
}

/* DROPZONE EVENTS*/ 

//Binding the events to the functions

dropzones.forEach(dropzone => {
    dropzone.addEventListener("dragover", dragover);
    dropzone.addEventListener("dragleave", dragleave);
})

//Fired when the element is being dragged over another element.

function dragover(){
    console.log("sobre a dropzone");
    this.classList.add("over")

    const cardBeingDragged = document.querySelector(".is-dragging");

    switch(this.id){
        case "do":
            toggleColor(cardBeingDragged, "green");
        break;
        case "doing":
            toggleColor(cardBeingDragged, "blue");
        break;
        case "done":
            toggleColor(cardBeingDragged, "red");
        break;
    }

    this.appendChild(cardBeingDragged);
}

//Fired when the mouse exits the boundaries of an element.

function dragleave(){
    this.classList.remove("over")
}

//Change the card status color to the right color

function toggleColor(card, color){
    card.children[0].classList.remove("green");
    card.children[0].classList.remove("blue");
    card.children[0].classList.remove("red");
    card.children[0].classList.add(color);
}