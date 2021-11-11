document.getElementById("createAcc").addEventListener("click", signUp);

function signUp() {
  let firstName = document.getElementById("firstN").value;
  let lastName = document.getElementById("lastN").value;
  let email = document.getElementById("emailA").value;
  let pass = document.getElementById("pass").value;
  let confPass = document.getElementById("confPass").value;

  let arrData = JSON.parse(localStorage.getItem("userInform")) || [];

  if (pass == confPass) {
    let userData = {
      firstName: firstName,
      emailId: email,
      pass: pass,
    };
    arrData.push(userData);

    localStorage.setItem("userInform", JSON.stringify(arrData));
    alert("Account Created Successfully");
    window.location.href = "signIn.html";
  } else {
    alert("Password not match");
    window.location.href = "create_account.html";
  }
}
