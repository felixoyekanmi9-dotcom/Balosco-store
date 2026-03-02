const products = {
  1: {
    name: "T-Shirt",
    price: "₦5,000",
    img: "image/t-shirt.jpg",
    desc: "High quality cotton T-shirt. Comfortable and stylish.",
    rating: "⭐⭐⭐⭐☆ (4.5)",
    buyers: "👥 120 people bought this"
  },
  2: {
    name: "Phone",
    price: "₦15,000",
    img: "image/images.jpg",
    desc: "Smartphone with strong battery and fast performance.",
    rating: "⭐⭐⭐⭐⭐ (5.0)",
    buyers: "👥 300 people bought this"
  },
  3: {
    name: "Shoes",
    price: "₦15,000",
    img: "image/shoes.jpg",
    desc: "Comfortable sneakers for sports and casual wear.",
    rating: "⭐⭐⭐⭐☆ (4.2)",
    buyers: "👥 90 people bought this"
  },
  4: {
    name: "Generator",
    price: "₦350,000",
    img: "image/generator.jpg",
    desc: "Powerful generator for home and office use.",
    rating: "⭐⭐⭐⭐⭐ (4.8)",
    buyers: "👥 45 people bought this"
  },
  5: {
    name: "Smart Watch",
    price: "₦30,000",
    img: "image/smartwatch.jpg",
    desc: "Track your fitness, steps, heart rate and notifications easily.",
    rating: "⭐⭐⭐⭐☆ (4.3)",
    buyers: "👥 150 people bought this"
  },
  6: {
    name: "Headset",
    price: "₦12,000",
    img: "image/headset.jpg",
    desc: "High quality headset with clear sound and noise reduction.",
    rating: "⭐⭐⭐⭐☆ (4.1)",
    buyers: "👥 70 people bought this"
  },
  7: {
    name: "Backpack",
    price: "₦18,000",
    img: "image/backpack.jpg",
    desc: "Durable backpack for school, travel and work.",
    rating: "⭐⭐⭐⭐☆ (4.4)",
    buyers: "👥 85 people bought this"
  }
};

// get product id from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const product = products[id];

// display product info
document.getElementById("productImg").src = product.img;
document.getElementById("productName").textContent = product.name;
document.getElementById("productPrice").textContent = product.price;
document.getElementById("productDesc").textContent = product.desc;
document.getElementById("productRating").textContent = product.rating;
document.getElementById("productBuyers").textContent = product.buyers;

// quantity counter
let qty = 1;

function increase() {
  qty++;
  document.getElementById("count").textContent = qty;
}

function decrease() {
  if (qty > 1) {
    qty--;
    document.getElementById("count").textContent = qty;
  }
}

function buyProduct() {
  alert(`You bought ${qty} ${product.name}(s) 🛒`);
}