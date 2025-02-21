document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".brand_images  img"); // Select images on this page only
  const impresionImages = document.querySelectorAll(".images  img"); // Select images on this page only
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let currentIndex = 0;
  let imgList = []; // Store only this page's images

  // Collect image sources from the current page
  if (images.length > 0) {
    images.forEach((img, index) => {
      imgList.push(img.src);
      img.addEventListener("click", function () {
        currentIndex = index;
        showLightbox(imgList[currentIndex]);
      });
    });
  } else {
    impresionImages.forEach((img, index) => {
      imgList.push(img.src);
      img.addEventListener("click", function () {
        currentIndex = index;
        showLightbox(imgList[currentIndex]);
      });
    });
  }

  // Show Lightbox with Selected Image
  function showLightbox(imageSrc) {
    lightbox.style.display = "flex";
    lightboxImg.src = imageSrc;
  }

  // Close Lightbox
  closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  // Navigate Previous Image
  prevBtn.addEventListener("click", function () {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : imgList.length - 1;
    lightboxImg.src = imgList[currentIndex];
  });

  // Navigate Next Image
  nextBtn.addEventListener("click", function () {
    currentIndex = currentIndex < imgList.length - 1 ? currentIndex + 1 : 0;
    lightboxImg.src = imgList[currentIndex];
  });

  // Close Lightbox on Outside Click
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  // Close Lightbox with ESC Key and Navigate with Arrow Keys
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      lightbox.style.display = "none";
    } else if (event.key === "ArrowRight") {
      nextBtn.click();
    } else if (event.key === "ArrowLeft") {
      prevBtn.click();
    }
  });
});

// Url Navigation Buttons logic

let urls = [
  "/lufthansaSystems.html",
  "/tedxzurich2015.html",
  "/tedxzurich2016.html",
  "/tedxzurich2017.html",
  "/appway.html",
  "/leonteq.html",
  "/persnal_shop.html",
  "/migrol.html",
  "/novis_vita_juicer.html",
  "/bank_of_cyprus_guidlines.html",
  "/bank_of_cyprus_editorial.html",
  "/360_strategy.html",
];

let urlIndex = parseInt(localStorage.getItem("urlIndex")) || 0;

function navigatBack() {
  if (urlIndex > 0) {
    urlIndex--;
    localStorage.setItem("urlIndex", urlIndex);
    window.location.href = urls[urlIndex];
  }
}

function navigateNext() {
  if (urlIndex < urls.length - 1) {
    urlIndex++;
    localStorage.setItem("urlIndex", urlIndex);
    window.location.href = urls[urlIndex];
  }
}
