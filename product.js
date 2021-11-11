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
    rate: 269,
  },
  {
    name: "Hilton Goa Resort",
    view: "ocean",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 3.5,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: 389,
  },
  {
    name: "Hilton Goa Resort",
    view: "ocean",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 2.5,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: 239,
  },
  {
    name: "villa Goa Resort",
    view: "villa",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 5,
    img_src:
      "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmlsbGElMjBob3RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rate: 309,
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
    rate: 129,
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
    rate: 129,
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
    rate: 129,
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
    rate: 129,
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
    rate: 169,
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
    rate: 889,
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
    rate: 899,
  },
  {
    name: "Hilton Goa Resort",
    view: "ocean",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 5,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: 929,
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
    rate: 629,
  },
  {
    name: "Hilton Goa Resort",
    view: "ocean",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 2.5,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: 129,
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
    rate: 279,
  },
  {
    name: "Hilton Goa Resort",
    view: "ocean",
    city: "Saipem",
    num: 3,
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 3.9,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: 289,
  },
];

let prodBox = document.getElementById("prodContainer");

displayProducts();

function displayProducts() {
  data.map(function (item) {
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

function Tax(num) {
  let red = num * 0.18;

  num = num + red;
  return num;
}
