function swapImage(imgElement) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = imgElement.src;
  mainImage.alt = imgElement.alt;
}

function swapImage(thumbnail) {
  // Get the main image element
  const mainImage = document.getElementById('mainImage');

  // Swap the source and alt text of the main image
  mainImage.src = thumbnail.src;
  mainImage.alt = thumbnail.alt;
}


function setupTabFocus() {
  console.log("Page loaded. Setting tabindex...");
  const images = document.querySelectorAll(".gallery img");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}


