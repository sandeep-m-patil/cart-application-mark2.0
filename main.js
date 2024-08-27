<<<<<<< HEAD
        
=======
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
>>>>>>> 9379f67e0103dcd8510dc25885122b0b2927d42b

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


function show_home() {
    document.querySelector('.carts').style.display="none";
    document.querySelector('.bill').style.display="none";


    document.querySelector('.products').style.display="flex";


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
<<<<<<< HEAD
    document.querySelector('.products').innerHTML = a;
    
}


show_home()
=======
    container.innerHTML = a;
}


show_home(products);

console.table(products)

cart = []
function addtoCart(i) {
    alert(products[i].title + " Added to Cart")
    cart.push({
        'img': `${products[i].img}`,
        'title': `${products[i].title}`,
        'price': `${products[i].price}`
    }) ;
    bill += parseInt(products[i].price);

console.table(cart)
>>>>>>> 9379f67e0103dcd8510dc25885122b0b2927d42b




<<<<<<< HEAD
let bill = 0;


let cartlist = JSON.parse(localStorage.getItem("data")) || []


function addtoCart(i){



    cartlist.push({
        'id':i,
        'img':`${products[i].img}`,
        'name':`${products[i].title}`,
        'price':products[i].price
    
    })
    bill+=products[i].price;
    localStorage.setItem("total",bill);

      
    console.table(cartlist)
    total(bill)
=======
}














function show_cart() {

    if (cart.length == 0) {
        container.innerHTML = "Cart is Empty";
    }
    else {
        let b = ``
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



         
        }

        container.innerHTML = b;

    }

total(bill)




}

function total(bill){

    document.querySelector('.bill').innerHTML ="Total Bill Amount is : "+  bill;


}



function rfromCart(i) {
   
>>>>>>> 9379f67e0103dcd8510dc25885122b0b2927d42b

    
    localStorage.setItem("data",JSON.stringify(cartlist))

    
}
    
    


console.log(localStorage.getItem("data"))


function show_cart(){
    document.querySelector('.bill').style.display="block";

        
    let store = JSON.parse(localStorage.getItem("data"));


 

 

    document.querySelector('.products').style.display="none";
    document.querySelector('.carts').style.display="flex";



    
    let b = ``;
    
    for(let i=0;i<store.length;i++){
        b+=`
      <div class="card-cart">
        <img width="10%" src=${store[i].img} alt="Denim Jeans">
        <div class="card-info">
          <p class="ptext">${store[i].name}</p>
          <h2 class="ptext">₹${store[i].price}</h2>
          <p class="ptext"><button class="btn" onclick="rfromCart(${i})">Remove</button></p>
      
        </div>
      </div> 
        `
    }
    
    document.querySelector(".carts").innerHTML=b;


}








function rfromCart(i){
    let index = cartlist.indexOf(cartlist[i]);
    bill-=cartlist[i].price;
    localStorage.setItem("total",bill);


    cartlist.splice(index,1)
    
    localStorage.setItem("data", JSON.stringify(cartlist))
     show_cart()

     total()
}
total()

function total() {

   
        let bill=localStorage.getItem("total")
        console.log(localStorage.getItem("total"))
    
        document.querySelector('.bill').innerHTML = "Total Bill Amount is : " + bill;
    
    
   

}
