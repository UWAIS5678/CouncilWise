document.addEventListener("DOMContentLoaded", () => {
  // === Load All GIFs Immediately with cache busting ===
  document.querySelectorAll("[data-gif]").forEach(img => {
    img.src = img.dataset.gif + "?t=" + Date.now();
  });

  // === Mobile: Tap to activate pain point hover effect ===
  document.querySelectorAll('.pain-points').forEach(card => {
    card.addEventListener('touchstart', () => {
      card.classList.toggle('hovered');
    });
  });

  // === Hamburger Menu Toggle ===
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
    hamburger.setAttribute("aria-expanded", !expanded);
  });

  // === Highlight contact icons on click ===
  document.querySelectorAll('.contact-icons a').forEach(link => {
    link.addEventListener('click', () => {
      link.classList.add('glowing');
    });
  });

  // === Toggle Team Circle Visibility ===
  const toggleBtn = document.querySelector('.team-toggle-btn');
  const teamSection = document.querySelector('.team-circle');

  toggleBtn.addEventListener('click', () => {
    teamSection.classList.toggle('hidden');
    toggleBtn.textContent = teamSection.classList.contains('hidden') 
      ? 'Meet the Team' 
      : 'Hide Team';
  });

  // === Focus individual team member and blur others ===
  const orbits = document.querySelectorAll('.orbit');

  orbits.forEach(orbit => {
    orbit.addEventListener('click', () => {
      const isAlreadyFocused = orbit.classList.contains('focused');

      orbits.forEach(o => {
        o.classList.remove('focused', 'blur');
      });

      if (!isAlreadyFocused) {
        orbit.classList.add('focused');
        orbits.forEach(o => {
          if (o !== orbit) o.classList.add('blur');
        });
      }
    });
  });
});
