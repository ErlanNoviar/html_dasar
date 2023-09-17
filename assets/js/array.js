const products = [
    {
        name: "Lenovo Legion 5",
        description: "2XID Ryzen 7 4800H 16GB 512 SSD GTX1650Ti 4GB 144Hz",
        price: "$949.00",
        imageSrc: "../assets/image/product/legion.jpg"
    },
    {
        name: "Dell Alienware Area-51",
        description: "Core i9 3.6GHz 64GB 1TB+1TB 8GB Win10 17.3inch",
        price: "$2,099.00",
        imageSrc: "../assets/image/product/A.png"
    },
    
];

// Menambahkan produk ke dalam galeri produk
const productContainer = document.getElementById("product-container");
        products.forEach(function (product) {
            const card = document.createElement("div");
            card.className = "card";
            card.style.backgroundColor = "rgb(112, 106, 106)";
            card.innerHTML = `
                <img src="${product.imageSrc}" alt="" width="250px">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <button class="tombol">BUY NOW - <br> ${product.price}</button>
            `;
            productContainer.appendChild(card);
        });