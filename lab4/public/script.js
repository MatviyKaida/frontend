document.addEventListener("DOMContentLoaded", () => {
    const productList = document.querySelector(".product-list");

    fetch("products.json")
        .then(response => response.json())
        .then(products => {
            productList.innerHTML = products.map(product => `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <span class="price">${product.price} грн</span>
                    <button class="buy-btn">Купити</button>
                </div>
            `).join("");
        })
        .catch(error => console.error("Помилка завантаження товарів:", error));
});
