function signUp(e) {
  e.preventDefault();

  const full_name = document.getElementById("full_name").value;
  const email = document.getElementById("email").value;
  const mobile_number = document.getElementById("mobile_number").value;
  const password = document.getElementById("password").value;
  const re_enter_password = document.getElementById("re_enter_password").value;
  const unique_id = crypto.randomUUID();

  /// extra details collecting from user
  const gender = "";
  const dob = "";
  const address = "";
  const hintname = "";

  const seller_list = JSON.parse(localStorage.getItem("seller_list")) || [];
  const exist =
    seller_list.length &&
    JSON.parse(localStorage.getItem("seller_list")).some(
      (data) =>
        data.email.toLowerCase() == email.toLowerCase() &&
        data.password.toLowerCase() == password.toLowerCase()
    );

  if (!exist) {
    seller_list.push({
      full_name,
      email,
      mobile_number,
      password,
      re_enter_password,
      gender,
      dob,
      address,
      hintname,
      unique_id,
    });
    localStorage.setItem("seller_list", JSON.stringify(seller_list));
    document.querySelector("form").reset();
    alert("Account created Successfully");
    location.href = "./seller-login.html";
  } else {
    alert("Sorry the User already Exist!! \n Try with different Email");
    document.querySelector("form").reset();
  }
}

function signIn(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const seller_list = JSON.parse(localStorage.getItem("seller_list")) || [];
  const exist =
    seller_list.length &&
    JSON.parse(localStorage.getItem("seller_list")).some(
      (data) =>
        data.email.toLowerCase() == email.toLowerCase() &&
        data.password.toLowerCase() == password.toLowerCase()
    );

  if (!exist) {
    alert("Incorrect login credentials");
  } else {
    // console.log(user_detail);
    localStorage.setItem("seller_id", JSON.stringify(email));

    // console.log(user_detail);
    alert("Login successfully");
    location.href = "../seller/seller-account.html";
  }
}

// function signUp(e) {

//     e.preventDefault();

//     validate();

// }

// function validate() {
//    if
// }
