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
let cpyarray=[];
let arr=[];
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
	   const cartList=document.getElementById('cart-list');
    if (sessionStorage.getItem('cart')!=null) {
        let a=JSON.parse(sessionStorage.getItem('cart'));
        console.log(a);
         a.forEach((prod,i)=>{
            const li = document.createElement("li");
            li.innerHTML = `${prod.name} - $${prod.price} <button onclick='removeFromCart(${prod.id})' class="remove-to-cart-btn" data-id="${prod.id}">Remove</button>`;
        li.setAttribute('data-id',`${prod.id}`);
        cartList.appendChild(li);
    cpyarray.push(prod);
         });
         arr=[];
   cpyarray.forEach((item)=>{
if (item!=null) {
    arr.push(item);}
    });

}
}

// Add item to cart
function addToCart(id) {
	const cartList=document.getElementById('cart-list');
   const li = document.createElement("li");
   products.forEach((prod,i)=>{
    if (prod.id==id) {
        li.innerHTML = `${prod.name} - $${prod.price} <button onclick='removeFromCart(${id})' class="remove-to-cart-btn" data-id="${prod.id}">Remove</button>`;
        li.setAttribute('data-id',`${id}`);
        cartList.appendChild(li);
    cpyarray.push(products[id-1]);
     } 
   });
   arr=[];
   cpyarray.forEach((item)=>{
if (item!=null) {
    arr.push(item);}
 });
   sessionStorage.setItem('cart',JSON.stringify(arr));
}

// Remove item from cart
function removeFromCart(a) {
	let removecart=true;
let removecart1=true;
  //  const cartList=document.getElementById('cart-list');
    const remove=document.querySelectorAll(`#cart-list>li`);
   remove.forEach((item,i)=>{
     if (item.getAttribute(`data-id`)==a && removecart) {
            item.remove(); 
            removecart=false;  
        cpyarray.forEach((elem,j)=>{       
if (elem.id==a && removecart1) {
    delete cpyarray[j];
    removecart1=false;
} });  
       }
    });
   arr=[];
   cpyarray.forEach((item)=>{
if (item!=null) {
    arr.push(item);
}
   });
    sessionStorage.clear();
    sessionStorage.setItem('cart',JSON.stringify(arr));
}

// Clear cart
function clearCart() {
	const clear=document.querySelectorAll(`#cart-list>li`);
  clear.forEach((item)=>{
    item.remove();
  });
  sessionStorage.clear();
  arr=[];
  cpyarray=[];
}

// Initial render
renderProducts();
renderCart();
