document.querySelectorAll(".file-tab").forEach((tab, i) => {
    tab.style.top = `${i * 38}px`;     // overlap
    tab.style.zIndex = 100 - i;
  });

document.querySelectorAll(".file-tab").forEach(tab => {
    tab.addEventListener("mouseenter", () => {
      gsap.to(tab, {
        y: -20,
        zIndex: 999,
        duration: 0.3,
        ease: "power3.out"
      });
  
      gsap.to(tab.querySelector(".details"), {
        opacity: 1,
        y: 10,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  
    tab.addEventListener("mouseleave", () => {
      gsap.to(tab, {
        y: 0,
        zIndex: tab.dataset.index,
        duration: 0.3,
        ease: "power3.out"
      });
  
      gsap.to(tab.querySelector(".details"), {
        opacity: 0,
        y: 0,
        duration: 0.2
      });
    });
  });
  