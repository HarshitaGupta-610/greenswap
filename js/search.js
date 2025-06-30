const products = [
  {
    name: "Eco-Friendly Laundry Detergent",
    price: "₹499",
    image: "https://hips.hearstapps.com/hmg-prod/images/eco-friendly-laundry-detergents-667b1189b3af0.png?crop=0.418xw:0.837xh;0.258xw,0.0417xh&resize=640:*"
  },
  {
    name: "Bite Toothpaste Bits",
    price: "₹299",
    image: "https://bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_2024.07.01_homepage_hero_mobile_3.jpg?v=1720816209&width=780"
  },
  {
    name: "Ethique Shampoo Bar",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1669281392832-9181a2b484af?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Bamboo Toothbrush",
    price: "₹149",
    image: "https://images.unsplash.com/photo-1589365252845-092198ba5334?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Reusable Cotton Pads",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1588959570984-9f1e0e9a91a6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Compostable Phone Case",
    price: "₹699",
    image: "https://plus.unsplash.com/premium_photo-1741753569806-c855a2962ead?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Beeswax Wraps",
    price: "₹349",
    image: "https://m.media-amazon.com/images/I/81-cLbynG7L.jpg"
  },
  {
    name: "Reusable Grocery Bag",
    price: "₹249",
    image: "https://plus.unsplash.com/premium_photo-1681498882818-619d328709af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

// Shuffle utility
function shuffleArray(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Display random cards
function displayRandomProducts() {
  const grid = document.getElementById("productGrid");
  const randomProducts = shuffleArray([...products]).slice(0, 6); // Pick 6 random

  grid.innerHTML = randomProducts.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <div class="info">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
      </div>
    </div>
  `).join("");
}

// Search functionality
function searchProduct() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const resultDiv = document.getElementById("search-results");
  const results = products.filter(p => p.name.toLowerCase().includes(query));

  resultDiv.innerHTML = `<h2 style="text-align:center; margin-top: 20px;">Search Results:</h2>`;

  if (results.length === 0) {
    resultDiv.innerHTML += `<p style="text-align:center;">❌ No products found for "${query}"</p>`;
  } else {
    resultDiv.innerHTML += `
      <div class="product-grid">
        ${results.map(p => `
          <div class="product-card">
            <img src="${p.image}" alt="${p.name}">
            <div class="info">
              <h3>${p.name}</h3>
              <p>${p.price}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

// Initial load
window.onload = () => {
  displayRandomProducts();
};
