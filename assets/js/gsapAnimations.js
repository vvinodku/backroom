export function initHomeAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero animation
    gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });

    // Scroll-triggered feature
    gsap.from(".feature", {
        scrollTrigger: {
            trigger: ".feature",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 100,
        duration: 1
    });

    initCursorSVG();
    initLaserFire();
}

// --- Cursor follow ---
function initCursorSVG() {
    const cursor = document.getElementById("cursor-svg");

    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX - 200, // center the circle
            y: e.clientY - 200,
            duration: 0.1,
            ease: "power3.out"
        });
    });
}

// --- Laser fire ---
function initLaserFire() {
    const cursor = document.getElementById("cursor-svg");
    const button = document.getElementById("fire-btn");

    button.addEventListener("click", () => {
        // Create laser line
        const laser = document.createElementNS("http://www.w3.org/2000/svg", "line");
        laser.setAttribute("x1", 20);
        laser.setAttribute("y1", 20);
        laser.setAttribute("x2", 20);
        laser.setAttribute("y2", 0);
        laser.setAttribute("stroke", "yellow");
        laser.setAttribute("stroke-width", "4");

        cursor.appendChild(laser);

        // Animate laser forward
        gsap.to(laser, {
            y2: -10000,
            duration: 3,
            onComplete: () => {
                laser.remove();
            }
        });
    });
}

function fireLaser() {
    const laser = document.createElement("div");
    laser.classList.add("laser");
    document.body.appendChild(laser);
  
    // Position laser from cursor position or from gun position
    laser.style.left = cursorPos.x + "px";
    laser.style.top = cursorPos.y + "px";
  
    gsap.to(laser, {
      x: 1000,           // or any direction/distance you want
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => laser.remove()
    });
  }
