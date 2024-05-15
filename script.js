// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button onclick='addToCart(${product.id})' class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
	 if (sessionStorage.getItem('cartItems')!=null) {
        const a=document.createElement('ul');
     a.innerHTML=sessionStorage.getItem('cartItems');
     //console.log(a);
const cartList=document.getElementById('cart-list');
cartList.replaceWith(a);  
    }

}

// Add item to cart
let num=0;
function addToCart(id) {
	const cartList=document.getElementById('cart-list');
   const li = document.createElement("li");
   products.forEach((prod,i)=>{
    if (prod.id==id) {
        li.innerHTML = `${prod.name} - $${prod.price} <button onclick='removeFromCart(${num})' class="remove-to-cart-btn" id=${num} data-id="${prod.id}">Remove</button>`;
   li.setAttribute('id',`0${num}`);
        cartList.appendChild(li);
    num++; 
   console.log(JSON.stringify(cartList),'strings');
   console.log(cartList);
    sessionStorage.clear();
    sessionStorage.setItem(`cartItems`,cartList.innerHTML);
    } 
   });
}

// Remove item from cart
function removeFromCart(a) {
	const remove=document.querySelectorAll(`#cart-list>li`);
   remove.forEach((item,i)=>{
     if (item.getAttribute(`id`)==`0${a}`) {
        item.remove();
       }
    });
    console.log(cartList);
    sessionStorage.clear();
    sessionStorage.setItem('cartItems',JSON.stringify(cartList));

}

// Clear cart
function clearCart() {
	const clear=document.querySelectorAll(`#cart-list>li`);
  clear.forEach((item)=>{
    item.remove();
  });
  sessionStorage.clear();
}

// Initial render
renderProducts();
renderCart();
