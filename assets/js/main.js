import { initHomeAnimations } from './gsapAnimations.js';

document.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains("home")) {
        initHomeAnimations();
    } 
    // else if (document.body.classList.contains("about")) {
    //     initAboutAnimations();
    // }
    //Add animation function calls as new pages are created as seen above
});

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        e.preventDefault();
        fireLaser();
    }
  });

let cursorPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;
});