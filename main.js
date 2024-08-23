console.log("hello world!")


function login_des(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "sandeep" && password == "123") {
        window.location.href = "catalog.html";
    }
    else {
        document.getElementById("login-info").innerText = "Username or Password Mismatched"
    }
}

let container = document.querySelector('.container');
let cartainer = document.querySelector('.cart');

let products = [
    {
        'img': 'https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg',
        'title': "Apple iPhone 15 (128 GB)",
        'price': 70900
    },
    {
        'img': 'https://m.media-amazon.com/images/I/511jgZKz8UL._SR240,220_.jpg',
        'title': "Dyazo Laptop bag - Grey",
        'price': 299
    }
    ,
    {
        'img': 'https://m.media-amazon.com/images/I/41ruti33J+L._AC._SR180,230.jpg',
        'title': "ProElite Smart Case for iPad",
        'price': 699
    },
    {
        'img': 'https://m.media-amazon.com/images/I/41GMgZG6zdL.AC_SX250.jpg',
        'title': "Razer Headset",
        'price': 1200
    }
    ,
    {
        'img': 'https://m.media-amazon.com/images/I/51dRoa85BNL._SR480,440_.jpg',
        'title': "Samsung Smart TV",
        'price': 66900
    },
    {
        'img': 'https://m.media-amazon.com/images/I/61NqrZdoh6L._SY695_.jpg',
        'title': "YOHO Stride Sneakers",
        'price': 1799
    }
    ,
    {
        'img': 'https://images-eu.ssl-images-amazon.com/images/I/61-SNkMcaqL._AC_UL675_SR675,480_.jpg',
        'title': "Safari Pentagon 3 Pc Set",
        'price': 6299
    },
    {
        'img': 'https://m.media-amazon.com/images/I/81Q7WuKlezL._AC_UL480_FMwebp_QL65_.jpg',
        'title': "Leather Grant Analog Watch",
        'price': 13999
    }

];




function show_home(products) {
    let a = ``;
    for (let i = 0; i < products.length; i++) {

        a += `
      
  
    <div class="card">
    <img src=${products[i].img} alt=${products[i].title}>
    <h3>${products[i].title}</h3>
    <p class="price">₹${products[i].price}</p>
    <p>Electronic</p>
    <p><button onclick="addtoCart(${i})">Add to Cart</button></p>
  </div>
  `
    }
    container.innerHTML = a;
}


show_home(products);

console.table(products)

cart = []
c = 0;
function addtoCart(i) {
    alert(products[i].title + " Added to Cart")
    cart[c] = {
        'img': `${products[i].img}`,
        'title': `${products[i].title}`,
        'price': `${products[i].price}`
    }

    c += 1;


}

function show_cart() {
    if (cart.length == 0) {
        container.innerHTML = "Cart is Empty";
    }
    else {
        let b = ``
        let bill = 0;

        for (let i = 0; i < cart.length; i++) {
            b += `<div class="card-cart">
    <img width="10%" src=${cart[i].img} alt="Denim Jeans">
    <div class="card-info">
      <p class="ptext">${cart[i].title}</p>
      <h2 class="ptext">₹${cart[i].price}</h2>
      <p class="ptext"><button class="btn" onclick="rfromCart(${i})">Remove</button></p>
  
    </div>
  </div>    
    `

            bill += parseInt(cart[i].price);
        }

        container.innerHTML = b;


document.querySelector('.bill').innerHTML ="Total Bill Amount is : "+  bill;

    }


}



function rfromCart(i) {

}







function logout() {
    alert("Logging Out");
    window.location.href = "index.html";

}