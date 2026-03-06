const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

const productList = document.getElementById("product-list");

        function renderProducts() {
            products.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.className = "product";
                const name = document.createElement("p");
                name.innerText = product.name;
                const price = document.createElement("p");
                price.innerText = product.price + "VND";
                productDiv.appendChild(name);
                productDiv.appendChild(price);
                productList.appendChild(productDiv);
            });
        }

        renderProducts();