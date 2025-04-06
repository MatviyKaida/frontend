document.addEventListener("DOMContentLoaded", () => {
    const productList = document.querySelector(".product-list");
    const categorySelect = document.getElementById("category");
    const brandSelect = document.getElementById("brand");
    const priceRange = document.getElementById("price");
    const priceValue = document.getElementById("price-value");
    const applyBtn = document.getElementById("apply-filters");

    let allProducts = [];

    priceRange.addEventListener("input", () => {
        priceValue.textContent = `до ${priceRange.value} грн`;
    });

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

    fetch("products.json")
        .then(response => response.json())
        .then(products => {
            allProducts = products;
            renderProducts(allProducts);
            priceValue.textContent = `до ${priceRange.value} грн`;
        })
        .catch(error => console.error("Помилка завантаження товарів:", error));
});
