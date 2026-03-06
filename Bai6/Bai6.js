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
const sortAscBtn = document.getElementById("sort-asc");
const sortDescBtn = document.getElementById("sort-desc");
let currentList = [...products];

function renderProducts(list) {
  productList.innerHTML = "";
  list.forEach(product => {
    const li = document.createElement("li");
    li.classList.add("product-item");
    li.innerText = `${product.name} - ${product.price}đ`;
    productList.appendChild(li);
  });
}
renderProducts(currentList);

searchInput.addEventListener("input", function () {
  const keyword = searchInput.value.toLowerCase();
  currentList = products.filter(product =>
    product.name.toLowerCase().includes(keyword)
  );

  renderProducts(currentList);
});

sortAscBtn.addEventListener("click", function () {
  const sorted = [...currentList].sort((a, b) => a.price - b.price);
  renderProducts(sorted);
});

sortDescBtn.addEventListener("click", function () {
  const sorted = [...currentList].sort((a, b) => b.price - a.price);
  renderProducts(sorted);
});