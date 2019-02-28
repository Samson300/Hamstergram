// console.log("Is this thing on? Yes it does!");

// When we click on any .picture-frame
// We see an enlarged version of that image
const targetElements = document.querySelectorAll("[data-target]");

function respondToClick(event) {
    console.log("Hello");
    console.log("How are you?");
    console.log("I am fine because I am a hamster!");
    // Add the big class to the thing that got clicked
    console.log(event.target.parentElement);

    event.target.parentElement.classList.add("big");
}




function attatchClickHandler(oneElement) {
    oneElement.addEventListener("click", respondToClick);
}

targetElements.forEach(attatchClickHandler);