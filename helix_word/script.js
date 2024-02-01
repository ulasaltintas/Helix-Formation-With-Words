const words = "Ulas Altintas"; 


const ANIMATION_DURATION = 2000; // Define your animation duration in milliseconds

/*function createElements(offset) {
    const characters = words.split("");
    characters.forEach((char, i) => {
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`;

        if (offset >= 0) {
            document.getElementById("spiral").appendChild(div);
        } else {
            document.getElementById("spiral2").appendChild(div);
        }
    });
}*/

//createElements(0);
//createElements(-1 * (ANIMATION_DURATION / 2));

function createHelix(userWord, offset) {
    const characters = userWord.split("");
    characters.forEach((char, i) => {
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`;

        if (offset >= 0) {
            document.getElementById("spiral").appendChild(div);
        } else {
            document.getElementById("spiral2").appendChild(div);
        }
    });
}

function startAnimation() {
    const userWord = document.getElementById("wordInput").value;

    if (userWord.trim() !== "") {
        document.getElementById("wordForm").style.display = "none";
        createHelix(userWord, 0);
        createHelix(userWord, -1 * (ANIMATION_DURATION / 2));
    } else {
        alert("Please enter a word.");
    }
}

document.getElementById("wordInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevents the form from submitting
        startAnimation();
    }
});