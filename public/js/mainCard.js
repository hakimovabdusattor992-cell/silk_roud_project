// Sample images - replace with real product images
const productImages = [
  "https://via.placeholder.com/400?text=Ornament+1",
  "https://via.placeholder.com/400?text=Ornament+2",
  "https://via.placeholder.com/400?text=Ornament+3",
  "https://via.placeholder.com/400?text=Ornament+4",
  "https://via.placeholder.com/400?text=Ornament+5",
  "https://via.placeholder.com/400?text=Ornament+6",
];

// Initialize thumbnails
function initThumbnails() {
  const container = document.getElementById("thumbnailContainer");
  productImages.forEach((img, index) => {
    const thumbnail = document.createElement("div");
    thumbnail.className = `thumbnail ${index === 0 ? "active" : ""}`;
    thumbnail.innerHTML = `<img src="${img}" alt="Product ${index + 1}">`;
    thumbnail.addEventListener("click", () => selectImage(index, thumbnail));
    container.appendChild(thumbnail);
  });
}

function selectImage(index, thumbnail) {
  document.getElementById("mainImage").src = productImages[index];
  document
    .querySelectorAll(".thumbnail")
    .forEach((t) => t.classList.remove("active"));
  thumbnail.classList.add("active");
}

// Like button
document.getElementById("likeBtn").addEventListener("click", function () {
  this.classList.toggle("liked");
  this.textContent = this.classList.contains("liked") ? "❤️" : "♡";
});

// Quantity controls
document.getElementById("decreaseBtn").addEventListener("click", function () {
  const input = document.getElementById("quantityInput");
  const value = parseInt(input.value);
  if (value > 1) input.value = value - 1;
});

document.getElementById("increaseBtn").addEventListener("click", function () {
  const input = document.getElementById("quantityInput");
  const value = parseInt(input.value);
  if (value < 100) input.value = value + 1;
});

document
  .getElementById("quantityInput")
  .addEventListener("change", function () {
    let value = parseInt(this.value) || 1;
    if (value < 1) value = 1;
    if (value > 100) value = 100;
    this.value = value;
  });

// Show notification
function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

// Add to cart
document.getElementById("addCartBtn").addEventListener("click", function () {
  const color = document.getElementById("colorSelect").value;
  const variant = document.getElementById("variantSelect").value;
  const quantity = document.getElementById("quantityInput").value;
  if (variant === "variant1") {
    showNotification("Iltimos, it rangini tanlang!");
    return;
  }

  const productData = {
    color: color,
    variant: variant,
    quantity: quantity,
    price: 12.51,
    timestamp: new Date().toISOString(),
  };

  console.log("Savat qoshildi:", productData);
  showNotification(`Mahsulot savat qoshildi! (${quantity} dona)`);
});

// Buy now
document.getElementById("buyNowBtn").addEventListener("click", function () {
  const variant = document.getElementById("variantSelect").value;

  if (variant === "variant1") {
    showNotification("Iltimos, mahsulot variantini tanlang!");
    return;
  }

  const color = document.getElementById("colorSelect").value;
  const quantity = document.getElementById("quantityInput").value;

  console.log("Hozir sotib olinmoqda:", { color, variant, quantity });
  showNotification("Checkout sahifasiga yo'naltirilmoqdasiz...");

  setTimeout(() => {
    // Redirect to checkout (replace with your checkout URL)
    // window.location.href = '/checkout';
  }, 1500);
});

// Initialize on load
document.addEventListener("DOMContentLoaded", function () {
  initThumbnails();
});
