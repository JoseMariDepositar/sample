document.addEventListener("DOMContentLoaded", () => {
  const burgerToggle = document.getElementById("burgerToggle");
  const mobileLinks = document.getElementById("mobileLinks");
  const closeBtn = document.getElementById("closeBtn");
  const mobileMenuLinks = mobileLinks.querySelectorAll("p");

  let isOpen = false;

  function openMenu() {
    mobileLinks.classList.remove("hidden", "translate-x-[100%]");
    mobileLinks.classList.add("translate-x-0");
    document.body.style.overflow = "hidden"; // Prevent scroll
    isOpen = true;
  }

  function closeMenu() {
    mobileLinks.classList.remove("translate-x-0");
    mobileLinks.classList.add("translate-x-[100%]");
    document.body.style.overflow = ""; // Restore scroll
    isOpen = false;

    // Hide after animation
    setTimeout(() => {
      mobileLinks.classList.add("hidden");
    }, 300);
  }

  burgerToggle.addEventListener("click", () => {
    isOpen ? closeMenu() : openMenu();
  });

  closeBtn.addEventListener("click", () => {
    closeMenu();
  });

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Optional: close if clicked outside
  document.addEventListener("click", (e) => {
    if (
      isOpen &&
      !mobileLinks.contains(e.target) &&
      !burgerToggle.contains(e.target)
    ) {
      closeMenu();
    }
  });
});
