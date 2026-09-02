let cartCount = 0;


// ================= CART =================

function addToCart() {

    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    alert("Poster added to cart!");
}


// ================= SEARCH =================

function openSearch() {

    document.getElementById("searchOverlay").style.display = "flex";

}


function closeSearch() {

    document.getElementById("searchOverlay").style.display = "none";

}


// ================= NEWSLETTER =================

function subscribe(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;

    alert("Thanks for subscribing!");

    document.getElementById("email").value = "";
}