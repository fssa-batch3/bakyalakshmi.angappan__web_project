function signUp(e) {

    e.preventDefault();

    let full_name = document.getElementById("full_name").value
    let email = document.getElementById("email").value
    let mobile_number = document.getElementById("mobile_number").value
    let password = document.getElementById("password").value
    let re_enter_password = document.getElementById("re_enter_password").value
    let unique_id = crypto.randomUUID();

    ///extra details collecting from user
    let gender = "";
    let dob = "";
    let address = "";
    let hintname = "";

    let user_list = JSON.parse(localStorage.getItem('user_list')) || [];
    let exist = user_list.length &&
        JSON.parse(localStorage.getItem('user_list')).some(data =>
            data.email.toLowerCase() == email.toLowerCase() &&
            data.password.toLowerCase() == password.toLowerCase()
        );

    if (!exist) {
        if (password == re_enter_password) {
            user_list.push({ full_name, email, mobile_number, password, re_enter_password, gender, dob, address, hintname, unique_id });
            localStorage.setItem('user_list', JSON.stringify(user_list));
            document.querySelector('form').reset();
            alert('Account created Successfully');
            location.href = "./login.html";
        }
        else {
            alert("password must be the same")
        }
    }
    else {
        alert('Sorry the User already Exist!! \n Try with different Email');
        document.querySelector('form').reset();
    }
}

function signIn(e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    console.log(email)
    let password = document.getElementById('password').value;
    console.log(password)
    let user_list = JSON.parse(localStorage.getItem('user_list')) || [];
    let exist = user_list.length &&
        JSON.parse(localStorage.getItem('user_list')).some(data =>
            data.email.toLowerCase() == email.toLowerCase() &&
            data.password.toLowerCase() == password.toLowerCase()
        );

    console.log(exist);


    if (exist) {
        //console.log(user_detail);
        localStorage.setItem("unique_id", JSON.stringify(email));

        console.log("user_detail");
        alert("Login successfully");
        location.href = "./account.html";
    }

    if (!exist) {
        alert("Incorrect login credentials");
    }

}


// function signUp(e) {

//     e.preventDefault();

//     validate();

// }

// function validate() {
//    if
// }




