const texts = [
    "The symphony of clattering keyboards echoed through the dimly lit room, each keystroke a tiny leap toward the looming deadline.",
    "Beneath the shimmering starlight, the old clock tower struck twelve, its chimes weaving through the silent, cobblestoned streets.",
    "Despite the chaos of the bustling marketplace, the artist painted with steady hands, capturing fleeting expressions in brilliant strokes.",
    "As the rain pattered softly on the window, she sipped her tea and pondered the paradox of progress in an age of impatience.",
    "Whispers of forgotten tales lingered in the dusty library, where time itself seemed reluctant to turn the next page."
];

const button = document.querySelector(".btn");
const textDiv = document.querySelector(".para");
const inputBox = document.querySelector(".type");
const result = document.querySelector(".show-result");
let startTime = 0;
let currentText = "";
button.addEventListener("click", function() {
    if(button.innerText.toLowerCase() === "start"){
        const randomIndex = Math.floor(Math.random() * texts.length);
        textDiv.innerText = texts[randomIndex];
        currentText = texts[randomIndex];
        inputBox.value = "";        
        inputBox.disabled = false;   
        inputBox.focus();            
        startTime = Date.now();
        button.innerText="stop";
        result.innerText = ""; 
    }else{
        inputBox.disabled = true;
        textDiv.innerText = "Hello! Tap Start to Start";
        button.innerText="start";
        const endTime = Date.now();
        const timeTaken = (endTime - startTime) / 60000;

        const typedText = inputBox.value.trim(); 
        const wordCount = typedText === "" ? 0 : typedText.split(/\s+/).length;

        const wpm = timeTaken > 0 ? Math.round(wordCount / timeTaken) : 0
        result.innerText = `WPM: ${wpm}`;
    }
});