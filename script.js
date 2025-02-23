// images lightBox

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

// video lightBox
document.addEventListener("DOMContentLoaded", function () {
  const video_lightbox = document.getElementById("video_lightbox");
  const videothumnail_div = document.querySelectorAll(".videothumnail_div");
  const closeBtn = document.getElementById("close-btn");
  const iframe = document.querySelector(".lightbox_video");
  videothumnail_div.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      video_lightbox.style.display = "flex";
      console.log("click");
    });
  });
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      video_lightbox.style.display = "none";
      iframe.src = iframe.src;
    });
  }
});

// video thumbnails

function loadVideo(video_container) {
  const imgElement = video_container.querySelector("img");
  const videoUrl = imgElement.alt;

  video_container.innerHTML = `
     <iframe
          src=${videoUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          class="video">
    </iframe>`;
}

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

let urlIndex = urls.findIndex((url) => url === window.location.pathname);
function navigatBack() {
  if (urlIndex === 0) {
    urlIndex = urlIndex + 11;
    window.location.href = urls[urlIndex];
  } else if (urlIndex === 1) {
    window.location.href = urls[11];
  } else {
    urlIndex--;
    window.location.href = urls[urlIndex];
  }
}

function navigateNext() {
  if (urlIndex === 11) {
    window.location.href = urls[1];
  } else {
    urlIndex = urls.findIndex((url) => url === window.location.pathname);
    urlIndex++;
    window.location.href = urls[urlIndex];
  }
}
