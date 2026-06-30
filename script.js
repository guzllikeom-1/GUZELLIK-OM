// ===============================
// GUZELLIK OM Shopping Cart
// ===============================
// إنشاء السلة أو استرجاعها
let cart = JSON.parse(localStorage.getItem("cart")) || [];
// ===============================
// إضافة منتج إلى السلة
// ===============================
function addToCart(name, price, image) {
    cart.push({
        name: name,
        price: price,
        image: image
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    const toast=document.getElementById("toast");
if(toast){
toast.classList.add("show");
setTimeout(()=>{
toast.classList.remove("show");
},2000);
}
}
// ===============================
// عرض المنتجات داخل cart.html
// ===============================
function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const total = document.getElementById("total");
    const checkout = document.getElementById("checkout");
    if (!cartItems) return;
    cartItems.innerHTML = "";
    let totalPrice = 0;
    let message = "مرحباً، أرغب بطلب المنتجات التالية:%0A%0A";
    cart.forEach((product, index) => {
        totalPrice += product.price;
        message +=
        "• " + product.name +
        " - " + product.price +
        " ر.ع%0A";
        cartItems.innerHTML += `
        <div class="cart-item">
            <img src="${product.image}" alt="${product.name}">
            <div class="cart-info">
                <h3>${product.name}</h3>
                <p>${product.price} ر.ع</p>
            </div>
            <button class="remove-btn"
            onclick="removeItem(${index})">
            حذف
            </button>
        </div>
        `;
    });
    total.innerHTML = totalPrice.toFixed(3) + " ر.ع";
    checkout.href =
    "https://wa.me/96891102129?text=" + message;
}
// ===============================
// حذف منتج
// ===============================
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
	updateCartCount();
    displayCart();
}
// ===============================
// تشغيل السلة تلقائياً
// ===============================
displayCart();
// ======================
// تحديث عداد السلة
// ======================
function updateCartCount(){
    const count=document.getElementById("cart-count");
    if(count){
        count.innerText=cart.length;
    }
}
updateCartCount();