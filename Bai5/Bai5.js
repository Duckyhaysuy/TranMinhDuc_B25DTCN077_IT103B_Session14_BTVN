const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");

products.forEach(product => {
    const li = document.createElement("li");
    li.classList.add("product-item");
    li.innerText = product.name + " - " + product.price + "đ";
    productList.appendChild(li);
});


searchInput.addEventListener("input", function () {
    const keyword = searchInput.value.toLowerCase();
    const items = document.querySelectorAll(".product-item");
    items.forEach(item => {
        const name = item.innerText.toLowerCase();
        if (name.includes(keyword)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });
});