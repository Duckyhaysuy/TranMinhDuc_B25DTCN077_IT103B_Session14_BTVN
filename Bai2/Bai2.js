function renderProducts() {
  productList.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.classList.add("product-item");

    li.innerHTML = `
        <div class="product">
            <span>${product.name}</span> - 
            <span>${product.price} VND</span>
        </div>
    `;

    productList.appendChild(li);
  });
}

renderProducts();

productForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = productName.value.trim();
  const price = productPrice.value.trim();

  if (name === "" || price === "") {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  const newProduct = {
    id: Date.now(),
    name: name,
    price: Number(price),
  };

  products.push(newProduct);

  const li = document.createElement("li");
  li.classList.add("product-item");

  li.innerHTML = `
        <div class="product">
            <span>${newProduct.name}</span> - 
            <span>${newProduct.price} VND</span>
        </div>
    `;

  productList.appendChild(li);

  productName.value = "";
  productPrice.value = "";
});