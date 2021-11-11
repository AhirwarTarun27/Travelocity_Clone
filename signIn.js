document.getElementById("signInAcc").addEventListener("click", signin);

function signin(e) {
  e.preventDefault();
  let email = document.getElementById("emailA").value;
  let Password = document.getElementById("pass").value;

  let regUser = JSON.parse(localStorage.getItem("userInform"));

  let flag = false;
  regUser.forEach(function (userData) {
    if (email === userData.emailId && Password === userData.pass) {
      alert("sign In succesful");

      let addName = document.getElementById("SignChange");

      let name = userData.firstName;

      addName.innerHTML = `<p>${name}</p>`;
    } else if (email !== userData.emailId && Password === userData.pass) {
      alert("Incorrect email");
    } else if (email === userData.emailId && Password !== userData.pass) {
      alert("Incorrect password");
    } else {
      alert("Not yet register!");
    }
  });
}
