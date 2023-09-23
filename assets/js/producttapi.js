fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => {
    const productContainer = document.getElementById("product-new");
    data.forEach((product) => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.backgroundColor = "rgb(112, 106, 106)";
      card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
    `;
      productContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
