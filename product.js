// dropdown script for more travel

document.getElementById("active").addEventListener("click", dropdown);

function dropdown() {
  let showDrop = document.getElementById("showDrop");
  showDrop.style.display = "block";
}

document.getElementById("showDrop").addEventListener("mouseleave", dropup);

function dropup() {
  document.getElementById("showDrop").style.display = "none";
}

// middle box script

let midBox = document.getElementById("middleBox");

let data = [
  {
    name: "Hilton Goa Resort",
    view: "ocean",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 4.5,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: "269",
  },
  {
    name: "Real Palace Resort",
    view: "ocean",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 3.5,
    img_src:
      "https://images.unsplash.com/photo-1501117716987-c8c394bb29df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2NlYW4lMjB2aWV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "389",
  },
  {
    name: "Ocean Feel Resort",
    view: "ocean",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 2.5,
    img_src:
      "https://images.unsplash.com/photo-1541753464332-08b3ebf7f993?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2NlYW4lMjB2aWV3JTIwaG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "239",
  },
  {
    name: "Villa Goa Resort",
    view: "villa",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 5,
    img_src:
      "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmlsbGElMjBob3RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "309",
  },
  {
    name: "Royal Villa Resort",
    view: "villa",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 4,
    img_src:
      "https://images.unsplash.com/photo-1636484807469-e33af13716b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmlsbGElMjBob3RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "129",
  },
  {
    name: "Times Now Resort",
    view: "villa",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 4,
    img_src:
      "https://images.unsplash.com/photo-1439130490301-25e322d88054?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGElMjBob3RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "129",
  },
  {
    name: "Family Villa Resort",
    view: "villa",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 4.5,
    img_src:
      "https://images.unsplash.com/photo-1585169595746-31a414233959?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHZpbGxhJTIwaG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "178",
  },
  {
    name: "Shyam Villa Resort",
    view: "villa",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 3.8,
    img_src:
      "https://images.unsplash.com/photo-1636484807469-e33af13716b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmlsbGElMjBob3RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "287",
  },
  {
    name: "Beach Goa Resort",
    view: "beach",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 3.5,
    img_src:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "169",
  },
  {
    name: "Hilton Goa Resort",
    view: "ocean",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 4.2,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: "889",
  },
  {
    name: "Sun Beach Resort",
    view: "beach",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 5,
    img_src:
      "https://images.unsplash.com/photo-1537640685236-a9df2496e232?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwaG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "899",
  },
  {
    name: "Hawai Resort",
    view: "ocean",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 5,
    img_src:
      "https://images.unsplash.com/photo-1579427421635-a0015b804b2e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG9jZWFuJTIwdmlldyUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "969",
  },
  {
    name: "Beach Resort",
    view: "beach",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 3.5,
    img_src:
      "https://images.unsplash.com/photo-1537640685236-a9df2496e232?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwaG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "629",
  },
  {
    name: "Matafour Ocean Resort",
    view: "ocean",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 4.5,
    img_src:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "380",
  },
  {
    name: "Finland goa beach Resort",
    view: "beach",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 3.5,
    img_src:
      "https://images.unsplash.com/photo-1527142879-95b61a0b8226?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoJTIwaG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "279",
  },
  {
    name: "Rameshvar Ocean Resort",
    view: "ocean",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 2.9,
    img_src:
      "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "429",
  },
  {
    name: "Royal Hotel",
    view: "hotel",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 3.9,
    img_src:
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "859",
  },
  {
    name: "Real Hotel",
    view: "hotel",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 4.1,
    img_src:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "999",
  },
  {
    name: "Navabi Hotel",
    view: "hotel",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 4.9,
    img_src:
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "859",
  },
  {
    name: "Shivam Hotel",
    view: "hotel",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 4.9,
    img_src:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "691",
  },
  {
    name: "Emerial Hotel",
    view: "hotel",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 4.7,
    img_src:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "759",
  },
  {
    name: "The Palace Hotel",
    view: "hotel",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 4.1,
    img_src:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "580",
  },
  {
    name: "Mira Hotel",
    view: "hotel",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 2.9,
    img_src:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: "219",
  },
];

let prodBox = document.getElementById("prodContainer");

// let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

function displayProducts(product) {
  prodBox.innerHTML = "";
  product.map(function (item) {
    let mainDiv = document.createElement("div");

    mainDiv.setAttribute("class", "mainDiv");

    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "imgDiv");

    let img = document.createElement("img");
    img.setAttribute("src", item.img_src);

    imgDiv.append(img);

    let secDiv = document.createElement("div");
    secDiv.setAttribute("class", "secDiv");

    let div1 = document.createElement("div");

    let H2 = document.createElement("h2");
    H2.textContent = item.name;

    let p1 = document.createElement("p");
    p1.setAttribute("class", "city");
    p1.textContent = item.city;

    let p2 = document.createElement("p");
    p2.textContent = item.info;

    let p3 = document.createElement("p");
    p3.setAttribute("class", "green");
    p3.textContent = "Fully refundable";

    let rate = document.createElement("p");
    rate.setAttribute("class", "rating");
    rate.textContent = `${item.rating}/5`;

    div1.append(H2, p1, p2, p3, rate);

    let div2 = document.createElement("div");

    let btn = document.createElement("button");
    btn.innerText = "Reserve a room";
    btn.addEventListener("click", function () {
      addToCart(item, parent);
      alert("Room reserved sucessfully! Now proceed to checkout");
    });

    let ptag1 = document.createElement("p");
    ptag1.setAttribute("class", "greenBg");
    ptag1.innerHTML = `<span>We have ${item.num} left</span>`;

    let H2tag = document.createElement("h2");
    H2tag.innerText = `$${item.rate}`;

    let ptag2 = document.createElement("p");
    ptag2.innerHTML = `per night <br> <strong>$${Tax(
      item.rate
    )} total</strong><br> Includes Taxes & fees`;
    //   second div

    div2.append(btn, ptag1, H2tag, ptag2);

    secDiv.append(div1, div2);

    mainDiv.append(imgDiv, secDiv);

    prodBox.append(mainDiv);
  });
}

displayProducts(data);

function Tax(num) {
  let red = Number(num) * 0.18;

  num = Number(num) + red;
  return num;
}

function addToCart(item, parent) {
  data.forEach((element) => {
    let { name, view, city, num, info, rating, img_src, rate } = element;

    localStorage.setItem("Single_products", JSON.stringify(element));
  });
  // let flag = false;

  // for (let i = 0; i < cart.length; i++) {
  //   if (
  //     item.name == cart[i].name &&
  //     item.rating == cart[i].rating &&
  //     item.rate == cart[i].rate
  //   ) {
  //     flag = true;
  //     break;
  //   }
  // }

  // if (flag == false) {
  //   var { name,view,city, } = element;
  // } else if (flag == true) {
  //   alert("This item is already in the checkout.");
  // }
  //
  // localStorage.setItem("cartItems", JSON.stringify(cart));
}

var Ocount = 0;
function oceanView() {
  if (Ocount == 0) {
    Ocount++;
    console.log("oceanView");
    console.log(data.length);
    var arr = [];

    for (var i = 0; i < data.length; i++) {
      if (data[i].view == "ocean") {
        arr.push(data[i]);
      }
    }
    displayProducts(arr);
  } else {
    displayProducts(data);
    Ocount = 0;
  }
}

Vcount = 0;

var Vcount = 0;
function villa() {
  if (Vcount == 0) {
    Vcount++;
    console.log("villa");
    console.log(data.length);
    var arr = [];

    for (var i = 0; i < data.length; i++) {
      if (data[i].view == "villa") {
        arr.push(data[i]);
      }
    }
    displayProducts(arr);
  } else {
    displayProducts(data);
    Vcount = 0;
  }
}
Vcount = 0;

var Ccount = 0;
function calBeach() {
  if (Ccount == 0) {
    Ccount++;
    console.log("Beach");
    console.log(data.length);
    var arr = [];

    for (var i = 0; i < data.length; i++) {
      if (data[i].view == "beach") {
        arr.push(data[i]);
      }
    }
    displayProducts(arr);
  } else {
    displayProducts(data);
    Ccount = 0;
  }
}
Ccount = 0;

function allIncl() {
  displayProducts(data);
}

var Hcount = 0;
function hotel() {
  if (Hcount == 0) {
    Hcount++;
    console.log("hotel");
    console.log(data.length);
    var arr = [];

    for (var i = 0; i < data.length; i++) {
      if (data[i].view == "hotel") {
        arr.push(data[i]);
      }
    }
    displayProducts(arr);
  } else {
    displayProducts(data);
    Hcount = 0;
  }
}
Hcount = 0;

// sorting script

// document.getElementById("L2H").addEventListener("click", sortLH);

function sortLH() {
  let arr = data.sort(function (a, b) {
    return a.rate - b.rate;
  });
  displayProducts(arr);
}

function sortHL() {
  let arr = data.sort(function (a, b) {
    return b.rate - a.rate;
  });
  displayProducts(arr);
}

function sortRating() {
  let arr = data.sort(function (a, b) {
    return b.rating - a.rating;
  });
  displayProducts(arr);
}
