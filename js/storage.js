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

    function valPassword() {
        if (password !== re_enter_password) {
            alert('incorrect password');
            re_enter_password.value = reset();
        }
    }
    valPassword();

    let user_list = JSON.parse(localStorage.getItem('user_list')) || [];
    let exist = user_list.length &&
        JSON.parse(localStorage.getItem('user_list')).some(data =>
            data.email.toLowerCase() == email.toLowerCase() &&
            data.password.toLowerCase() == password.toLowerCase()
        );

    if (!exist) {
        user_list.push({ full_name, email, mobile_number, password, re_enter_password, gender, dob, address, hintname, unique_id });
        localStorage.setItem('user_list', JSON.stringify(user_list));
        document.querySelector('form').reset();
        alert('Account created Successfully');
        location.href = "./login.html";
    }
    else {
        alert('Sorry the User already Exist!! \n Try with different Email');
        document.querySelector('form').reset();
    }
}

// const signUpForm = document.querySelector("signup");


// let inputFullName = document.querySelector("full_name");
// let inputEmail = document.querySelector("email");
// let inputMobileNumber = document.querySelector("mobile_number");
// let inputPassword = document.querySelector("password");
// let inputReEnterPassword = document.querySelector("re_enter_password");

// let users = [];

// function adduser(full_name, email, mobile_number, password, re_enter_password) {
//     users.push(
//         {
//             full_name,
//             email,
//             mobile_number,
//             password,
//             re_enter_password
//         }
//     );

//     localStorage.setItem("users", JSON.stringify(users));

//     return ({
//         full_name,
//         email,
//         mobile_number,
//         password,
//         re_enter_password
//     });
// }

// function signup(event) {
//     event.preventDefault();
//     const newUser = adduser(

//         inputFullName.value,
//         inputEmail.value,
//         inputMobileNumber.value,
//         inputPassword.value,
//         inputReEnterPassword.value
//     )

// }


function signIn(e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let user_list = JSON.parse(localStorage.getItem('user_list')) || [];
    let exist = user_list.length &&
        JSON.parse(localStorage.getItem('user_list')).some(data =>
            data.email.toLowerCase() == email.toLowerCase() &&
            data.password.toLowerCase() == password.toLowerCase()

        );
    if (!exist) {
        alert("Incorrect login credentials");
    }
    else {
        //console.log(user_detail);
        localStorage.setItem("unique_id", JSON.stringify(email));

        //console.log(user_detail);
        alert("Login successfully");
        location.href = "./account.html";
    }

}

// const signUp = e => {
//     e.preventdefault();

//     let full_name = document.getElementById("full_name").value
//     let email = document.getElementById("email").value
//     let mobile_number = document.getElementById("mobile_number").value
//     let password = document.getElementById("password").value
//     let re_enter_password = document.getElementById("re_enter_password").value

//     let user_storage = {
//         full_name: full_name,
//         email: email,
//         mobile_number: mobile_number,
//         password: password,
//         re_enter_password: re_enter_password
//     }

//     localStorage.setItem("user_storage", JSON.stringify(user_storage))

// }
//getting values from




// const signUp = e => {
//     e.preventdefault();

//     var full_name = document.getElementById('full_name').value;
//     var password = document.getElementById('password').value;

//     // let stored_users = JSON.parse(localStorage.getItem('users'));
//     if (stored_users) {
//         stored_users.push({ full_name: full_name, password: password });
//         localStorage.setItem('users', JSON.stringify(stored_users));
//     }
//     else {
//         localStorage.setItem('users', JSON.stringify([{ full_name: full_name, password: password }]));
//     }
// }





    // JSON.push(user_storage)(
    //     full_name, email, mobile_number, password, re_enter_password
    // )

    // user_storage = JSON.parse(user_storage)
    // localStorage.getItem("user_storage");


    // JSON.parse(user_storage).push(
    //     full_name, email, mobile_number, password, re_enter_password
    // )


    // myjson = JSON.parse(user_storage);










//     let exist = user_list.length &&
//         JSON.parse(localStorage.getItem('user_list')).some(data =>
//             data.email.toLowerCase() == email.toLowerCase() &&
//             data.password.toLowerCase() == password.toLowerCase()

//         );

//     if (!exist) {
//         user_list.push({ full_name, email, mobile_number, password, re_enter_password });
//         localStorage.setItem('user_list', JSON.stringify(user_list));
//         document.querySelector('form').reset();
//         alert('Account created Successfully');
//         location.href = "../../index.html";
//     }
//     else {
//         alert('Sorry the User already Exist!! \n Try with different Email');
//         document.querySelector('form').reset();

//         location.href = "./login.html"


//     }
//     e.preventDefault();
// }



// const signIn = e => {
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;

//     let user_list = JSON.parse(localStorage.getItem('user_list')) || [];
//     let exist = user_list.length &&
//         JSON.parse(localStorage.getItem('user_list')).some(data =>
//             data.email.toLowerCase() == email.toLowerCase() &&
//             data.password.toLowerCase() == password.toLowerCase()

//         );
//     if (!exist) {
//         alert("Incorrect login credentials");
//     }
//     else {
//         alert("Login successfully");
//         location.href = "../homepage/account.html";
//     }
//     e.preventDefault();
// }
