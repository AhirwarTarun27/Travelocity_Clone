// js for input Head in main section
let inpBox = document.getElementsByClassName("inpBox");

function stayy() {
  //   let inpCont = document.createElement("div").setAttribute("id", "inpCont");
  //   let inputTag = document.createElement("input").setAttribute("type", "number");
  //   inpCont.append(inputTag);
  //   inpBox.append(inpBox);
}

document.getElementById("active").addEventListener("click", dropdown);

function dropdown() {
  let showDrop = document.getElementById("showDrop");
  showDrop.style.display = "block";
}

document.getElementById("showDrop").addEventListener("mouseleave", dropup);

function dropup() {
  document.getElementById("showDrop").style.display = "none";
}
