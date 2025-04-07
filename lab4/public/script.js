document.addEventListener("DOMContentLoaded", () => {
    const productList = document.querySelector(".product-list");
    const categorySelect = document.getElementById("category");
    const brandSelect = document.getElementById("brand");
    const priceRange = document.getElementById("price");
    const priceValue = document.getElementById("price-value");
    const applyBtn = document.getElementById("apply-filters");
    const cartBtn = document.getElementById("cart-button");
    const cartCount = document.getElementById("cart-count");

    const modal = document.getElementById("cart-modal");
    const closeBtn = modal.querySelector(".close");
    const cartItemsList = document.getElementById("cart-items");
    const clearCartBtn = document.getElementById("clear-cart");

    let allProducts = [];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
    }

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    function renderProducts(products) {
        productList.innerHTML = "";

        if (products.length === 0) {
            productList.innerHTML = "<p>Нічого не знайдено</p>";
            return;
        }

        productList.innerHTML = products.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span class="price">${product.price} грн</span>
                <button class="buy-btn">Купити</button>
            </div>
        `).join("");
    }

    function renderCart() {
        cartItemsList.innerHTML = "";

        if (cart.length === 0) {
            cartItemsList.innerHTML = "<li>Кошик порожній</li>";
            return;
        }

        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${item.name} - ${item.price} грн
                <button class="remove-item" data-index="${index}">✕</button>
            `;
            cartItemsList.appendChild(li);
        });
    }

    applyBtn.addEventListener("click", () => {
        const selectedCategory = categorySelect.value;
        const selectedBrand = brandSelect.value;
        const maxPrice = parseInt(priceRange.value);

        const filtered = allProducts.filter(product => {
            const matchCategory = selectedCategory === "all" || product.category === selectedCategory;
            const matchBrand = selectedBrand === "all" || product.brand === selectedBrand;
            const matchPrice = product.price <= maxPrice;
            return matchCategory && matchBrand && matchPrice;
        });

        renderProducts(filtered);
    });

    productList.addEventListener("click", e => {
        if (e.target.classList.contains("buy-btn")) {
            const card = e.target.closest(".product-card");
            const name = card.querySelector("h3").textContent;
            const price = parseInt(card.querySelector(".price").textContent);
            cart.push({ name, price });
            saveCart();
        }
    });

    cartBtn.addEventListener("click", () => {
        modal.classList.remove("hidden");
        renderCart();
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    modal.addEventListener("click", e => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });

    cartItemsList.addEventListener("click", e => {
        if (e.target.classList.contains("remove-item")) {
            const index = parseInt(e.target.dataset.index);
            cart.splice(index, 1);
            saveCart();
            renderCart();
        }
    });

    clearCartBtn.addEventListener("click", () => {
        cart = [];
        saveCart();
        renderCart();
    });

    fetch("products.json")
        .then(response => response.json())
        .then(products => {
            allProducts = products;
            renderProducts(allProducts);
            priceValue.textContent = `до ${priceRange.value} грн`;
        })
        .catch(error => console.error("Помилка завантаження товарів:", error));

    priceRange.addEventListener("input", () => {
        priceValue.textContent = `до ${priceRange.value} грн`;
    });

    updateCartCount();
});
