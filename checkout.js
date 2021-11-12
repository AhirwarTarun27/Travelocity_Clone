let parent = document.getElementById("productDis");

var product = JSON.parse(localStorage.getItem("Single_products"));
console.log("cart:", product);

function showProducts() {
  product.innerHTML = "";
  //   cart.forEach(function (product) {
  console.log(product.img_src);
  //     cart.innerHTML = "";

  let mainDiv = document.createElement("div");

  let bgImgdiv = document.createElement("div");

  bgImgdiv.setAttribute("class", "imgDiv");

  let img = document.createElement("img");
  img.src = product.img_src;

  bgImgdiv.append(img);

  let H3 = document.createElement("h3");

  H3.setAttribute("class", "nameH3");
  H3.textContent = product.name;

  let div2 = document.createElement("div");
  div2.setAttribute("class", "div2");

  let innerDiv = document.createElement("div");
  innerDiv.innerHTML = `<p><strong>${product.rating}/5</strong> stars</p><br>
        <p>Guests rated this property 4.2/5 for cleanliness</p>`;

  let p = document.createElement("p");
  p.innerText = "1 Room: Room, 1 King Bed, Non Smoking, Garden View";

  let p2 = document.createElement("p");
  p2.innerHTML =
    "Check-in: Thu, Nov 25 <br> Check-out: Fri, Nov 26 <br> 1-night stay";

  div2.append(innerDiv, p, p2);

  mainDiv.append(bgImgdiv, H3, div2);

  parent.append(mainDiv);

  let amount = document.getElementById("amount");

  amount.innerHTML = `$${product.rate}`;

  let tax = document.getElementById("tax");
  tax.innerHTML = `$${TaxAmount(product.rate)}`;

  let total = document.getElementById("total");

  total.innerHTML = `$${Tax(product.rate)}`;
  //   });
}

function Tax(num) {
  let red = Number(num) * 0.18;

  num = Number(num) + red;
  return num;
}

function TaxAmount(num) {
  let red = Number(num) * 0.18;
  return red;
}

function discount(num) {
  let code = document.getElementById("coupon").value;
  if (code == "Masai20") {
    alert("Coupon Applied successfully");

    let amount = Tax(product.rate);

    let dis = amount * 0.2;
    let final = amount - dis;

    let total = document.getElementById("total");
    total.innerHTML = `$${final}`;
  } else {
    alert("invalid Coupon Code");
  }
}
code = "";

// for (let i = 0; i < cart.length; i++) {
//   if (cart[i] >= 1) {
//     console.log(cart.length);
//     showProducts();
//   }
// }

showProducts();

function completeBook() {
  window.location.href = "payment_succes.html";
}
