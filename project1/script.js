document.addEventListener("DOMContentLoaded", function () {
  const slide = document.querySelector(".slider");
  let curIndex = 0;
  let interval;

  function slideShow(index) {
    const newPos = -index * 100 + "%";
    slide.style.transform = "translateX(" + newPos + ")";
  }

  function next() {
    curIndex = (curIndex + 1) % 3;
    slideShow(curIndex);
  }

  function prev() {
    curIndex = (curIndex - 1 + 3) % 3;
    slideShow(curIndex);
  }
  function startInterval() {
    interval = setInterval(next, 1000);
  }
  function stopInterval() {
    clearInterval(interval);
  }
  if (window.innerWidth < 600) {
    startInterval();
    document
      .querySelector(".card-container")
      .addEventListener("mouseover", stopInterval);

    document
      .querySelector(".card-container")
      .addEventListener("mouseout", startInterval);
  }
});

function stickyComponent() {
  const desktopView = window.matchMedia("(min-width:600px").matches;
  const stickContainer = document.getElementById("sticky-container");

  if (desktopView && !localStorage.getItem("stickyClosed")) {
    if (!stickContainer) {
      const container = document.createElement("div");
      container.id = "sticky-container";

      const closeButton = document.createElement("span");
      closeButton.id = "close-button";
      closeButton.textContent = "close";
      closeButton.onclick = closeStickyComponent;

      const pSLink = document.createElement("a");
      pSLink.id = "playStoreLink";
      pSLink.textContent = "Google Play Store";
      pSLink.href = "https://play.google.com/";
      pSLink.target = "_blank";

      const appLink = document.createElement("a");
      appLink.id = "appStoreLink";
      appLink.target = "_blank";
      appLink.textContent = "Apple App Store";
      appLink.href = "https://www.apple.com/id/app-store/";

      const content = document.createTextNode("Download Aplikasi Kami");

      container.appendChild(closeButton);
      container.appendChild(pSLink);
      container.appendChild(appLink);
      container.appendChild(content);

      document.body.appendChild(container);
    } else {
      stickContainer.style.display = "block";
    }
  } else {
    if (stickContainer) {
      stickContainer.style.display = "none";
    }
  }
}

function closeStickyComponent() {
  const stickContainer = document.getElementById("sticky-container");
  if (stickContainer) {
    stickContainer.style.display = "none";

    localStorage.setItem("stickClosed", true);
  }
}

stickyComponent();
// window.addEventListener("resize", createStickyComponent);

function dark() {
  const check = document.querySelector("#checkbox");
  check.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });
}

dark();
