document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    if (email !== "" && name !== "") {
      document.getElementById("coupon-status").textContent =
        "Купон: Активовано скидка 15%";
    } else {
      document.getElementById("coupon-status").textContent =
        "Купон: Не активовано";
    }
  });

function showBlocks(option) {
  var blocks = document.getElementById("main-sectione");
  blocks.innerHTML = ""; // Очистити вміст перед додаванням нових блоків

  var texts = getTexts(option);
  texts.forEach(function (text) {
    var div = document.createElement("div");
    div.className = "block";
    div.textContent = text;
    blocks.appendChild(div);
  });
}

function getTexts(option) {
  // Ваш код для визначення масиву текстів на основі вибраної опції
  // Наприклад, тут можна використати switch або if/else для різних опцій
  switch (option) {
    case "option1":
      return ["Block 1-1", "Block 1-2", "Block 1-3", "Block 1-4", "Block 1-5"];
    case "option2":
      return ["Block 2-1", "Block 2-2", "Block 2-3", "Block 2-4", "Block 2-5"];
    case "option3":
      return ["Block 3-1", "Block 3-2", "Block 3-3", "Block 3-4", "Block 3-5"];
    case "option4":
      return ["Block 4-1", "Block 4-2", "Block 4-3", "Block 4-4", "Block 4-5"];
    case "option5":
      return ["Block 5-1", "Block 5-2", "Block 5-3", "Block 5-4", "Block 5-5"];
    // Додайте інші опції тут
    default:
      return []; // Повернути порожній масив, якщо опція не визначена
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");
  const cartItems = document.querySelector(".cart-items");
  const totalPrice = document.getElementById("total-price");
  const clearCartBtn = document.querySelector(".clear-cart");
  const buyBtn = document.querySelector(".buy-btn"); // Добавляем эту строку

  let total = 0;

  products.forEach(function (product) {
    const addToCartBtn = product.querySelector(".add-to-cart");
    const name = product.getAttribute("data-name");
    const price = parseFloat(product.getAttribute("data-price"));

    addToCartBtn.addEventListener("click", function () {
      const li = document.createElement("li");
      li.textContent = name + " - $" + price.toFixed(2);
      cartItems.appendChild(li);
      total += price;
      totalPrice.textContent = total.toFixed(2);
    });
  });

  clearCartBtn.addEventListener("click", function () {
    cartItems.innerHTML = "";
    total = 0;
    totalPrice.textContent = total.toFixed(2);
  });

  buyBtn.addEventListener("click", function () {
    cartItems.innerHTML = "Спасибо за покупку!";
    total = 0;
    totalPrice.textContent = total.toFixed(2);
    const randomNum = Math.floor(Math.random() * 90000) + 10000; // Генерация случайного числа от 10000 до 99999
    alert("Ваш номер покупки: " + randomNum);
  });
});
