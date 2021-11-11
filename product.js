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
    city: "Saipem",
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 4.5,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: 269,
  },
  {
    name: "Hilton Goa Resort",
    city: "Saipem",
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 3.5,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: 389,
  },
  {
    name: "Hilton Goa Resort",
    city: "Saipem",
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 2.5,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: 239,
  },
  {
    name: "Hilton Goa Resort",
    city: "Saipem",
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 5,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: 309,
  },
  {
    name: "Hilton Goa Resort",
    city: "Saipem",
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 4,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: 129,
  },
  {
    name: "Hilton Goa Resort",
    city: "Saipem",
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 3.5,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: 169,
  },
  {
    name: "Hilton Goa Resort",
    city: "Saipem",
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 4.2,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: 889,
  },
  {
    name: "Hilton Goa Resort",
    city: "Saipem",
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 5,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: 899,
  },
  {
    name: "Hilton Goa Resort",
    city: "Saipem",
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 5,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: 929,
  },
  {
    name: "Hilton Goa Resort",
    city: "Saipem",
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 3.5,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: 629,
  },
  {
    name: "Hilton Goa Resort",
    city: "Saipem",
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 2.5,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: 129,
  },
  {
    name: "Hilton Goa Resort",
    city: "Saipem",
    info: "Enjoy your stay inclusive of breakfast, one major meal, shared airport transfers, one Goan Masterclass and more.",
    rating: 3.5,
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTqapzMPqp1sAYhaN-nVrjgLmaJobNAHOnA&usqp=CAU",
    rate: 279,
  },
  {
    name: "Hilton Goa Resort",
    city: "Saipem",
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

    //   second div
    secDiv.append(div1);

    mainDiv.append(imgDiv, secDiv);

    prodBox.append(mainDiv);
  });
}
