//Terminal pop up
const secretFile = document.getElementById('file3');
const terminal = document.getElementById('terminal');


function showPopup() {
    terminal.classList.add('show');
    type();
}

secretFile.addEventListener('click', showPopup)

//Typing effect
//const text = "Initializing system...\nAccess granted.\nWelcome.";
const text = "If you are justice, please do not lie. What is the price for your blind eye?"
const hint = document.getElementById('hint');

let i = 0;

function type() {
    if (i < text.length) {
        hint.textContent += text.charAt(i);
        i++;
        setTimeout(type, 80); // typing speed (ms)
    }
}

//Drag terminal
const topBar = document.getElementById("topBar");

let offsetX = 0;
let offsetY = 0;
let isDragging = false;

terminal.addEventListener("pointerdown", (e) => {
    isDragging = true;
    terminal.setPointerCapture(e.pointerId);

    offsetX = e.clientX - terminal.offsetLeft;
    offsetY = e.clientY - terminal.offsetTop;
});

terminal.addEventListener("pointermove", (e) => {
    if (!isDragging) return;

    terminal.style.left = e.clientX - offsetX + "px";
    terminal.style.top = e.clientY - offsetY + "px";
});

terminal.addEventListener("pointerup", () => {
    isDragging = false;
});

//Password check and navigation
const input = document.getElementById("passwordInput");
const correctPassword = "abribe";

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (input.value === correctPassword) {
            window.location.href = "file.html";
        } else {
            input.value = "";
            input.placeholder = "Wrong password";
            input.classList.add("error");
        }
    }
});

input.addEventListener("animationend", () => {
    input.classList.remove("error");
});
