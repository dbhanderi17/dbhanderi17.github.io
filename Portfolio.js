document.addEventListener("DOMContentLoaded", () => {
  const themeSwitcher = document.getElementById("theme-switcher");
  themeSwitcher.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const themeIcon = themeSwitcher.querySelector(".theme-icon");
    themeIcon.textContent = themeIcon.textContent === "🌞" ? "🌙" : "🌞";
  });
});

// JS CODE FOR TIMELINE PAGE

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    {
      threshold: 0.5, // Adjust this value based on when you want the animation to start
    }
  );

  document.querySelectorAll(".timeline-block").forEach((block) => {
    observer.observe(block);
  });
});
