// function signUp(e) {

//     e.preventDefault();

//     let full_name = document.getElementById("full_name").value
//     let email = document.getElementById("email").value
//     let mobile_number = document.getElementById("mobile_number").value
//     let password = document.getElementById("password").value
//     let re_enter_password = document.getElementById("re_enter_password").value
//     let unique_id = crypto.randomUUID();

//     ///extra details collecting from user
//     let gender = "";
//     let dob = "";
//     let address = "";
//     let hintname = "";

//     let user_list = JSON.parse(localStorage.getItem('user_list')) || [];
//     let exist = user_list.length &&
//         JSON.parse(localStorage.getItem('user_list')).some(data =>
//             data.email.toLowerCase() == email.toLowerCase() &&
//             data.password.toLowerCase() == password.toLowerCase()
//         );

//     if (!exist) {
//         if (password == re_enter_password) {
//             user_list.push({ full_name, email, mobile_number, password, re_enter_password, gender, dob, address, hintname, unique_id });
//             localStorage.setItem('user_list', JSON.stringify(user_list));
//             document.querySelector('form').reset();
//             alert('Account created Successfully');
//             location.href = "./login.html";
//         }
//         else {
//             alert("password must be the same")
//         }
//     }
//     else {
//         alert('Sorry the User already Exist!! \n Try with different Email');
//         document.querySelector('form').reset();
//     }
// }


let full_name = document.getElementById("full_name")
let email = document.getElementById("email")
let mobile_number = document.getElementById("mobile_number")
let password = document.getElementById("password")
let re_enter_password = document.getElementById("re_enter_password")

function signUp(e) {

    e.preventDefault();

    let full_namevalue = full_name.value.trim()
    let emailvalue = email.value.trim()
    let mobile_numbervalue = mobile_number.value.trim()
    let passwordvalue = password.value
    let re_enter_passwordvalue = re_enter_password.value
    let unique_id = crypto.randomUUID();

    ///extra details collecting from user
    let gender = "";
    let dob = "";
    let address = "";
    let hintname = "";

    full_namespace = /\s/;
    fullnamepattern = /^[a-zA-Z]+$/;
    emailpattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    mobilenumberpattern = /^[1-9]\d{9}$/;


    if (full_namevalue == "") {
        setErrorFor(full_name, "Enter your Fullname")
    }
    if (full_namespace.test(full_namevalue)) {
        setErrorFor(full_name, "name must not contain spaces")
    }
    if (fullnamepattern.test(full_namevalue)) {
        setSuccessFor(full_name)
    }

    let user_list = JSON.parse(localStorage.getItem('user_list')) || [];
    console.log(user_list)

        let exist = user_list.length &&
        JSON.parse(localStorage.getItem('user_list')).some(data =>
            data.email.toLowerCase() == emailvalue.toLowerCase() &&
            data.password.toLowerCase() == passwordvalue.toLowerCase()
        ); 

        console.log(exist)


    if (emailvalue == "") {
        setErrorFor(email, "enter your email address");
    }
    else if (!emailpattern.test(emailvalue)) {
        setErrorFor(email, "Please enter a valid email address");
    }
    else if(exist){
            setErrorFor(email, "Sorry the User already Exist!! \n Try with different Email'");
    }

    else {
            setSuccessFor(email);
    }

    if (mobile_numbervalue == "") {
        setErrorFor(mobile_number, "Enter your mobile number")
    }
    else if (!mobilenumberpattern.test(mobile_numbervalue)) {
        setErrorFor(mobile_number, "Please enter a valid mobilenumber");
    }
    else {
        setSuccessFor(mobile_number)
    }


    if (passwordvalue == "") {
        setErrorFor(password, "Enter the password")
    }
    else if (passwordvalue.length <6) {
        setErrorFor(password, "password must contain at least 6 characters")
    }
    else {
        setSuccessFor(password);    
    }

    if (re_enter_passwordvalue == "") {
        setErrorFor(re_enter_password, "Enter the password")
    }
    if (re_enter_passwordvalue !== passwordvalue) {
        setErrorFor(re_enter_password, "password must be the same")
    }
    if (re_enter_passwordvalue == passwordvalue){
        setSuccessFor(re_enter_password);
    }

    function setErrorFor(input, message) {
        const formcontrol = input.parentElement;
        console.log(formcontrol)
        const small_msg = formcontrol.querySelector("small")
        console.log(small_msg)

        small_msg.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${message}`;

        formcontrol.className = "form-control error"
    }


    function setSuccessFor(input, message) {

        const formcontrol = input.parentElement;
        const small_msg = formcontrol.querySelector("small")
        console.log(small_msg)

        // formcontrol.addEventListener("keyup",function(){
            small_msg.innerHTML = ""
            formcontrol.className = "form-control success"
        // })
    }

    // if(full_namevalue !== "" && !full_namespace.test(full_namevalue) && fullnamepattern.test(full_namevalue) && emailpattern.test(emailvalue) && emailvalue !== "" && !exist && mobile_numbervalue !== "" && passwordvalue !== "" && re_enter_passwordvalue !== "" && re_enter_passwordvalue == passwordvalue ){
    //     let input = document.querySelectorAll(".form-control")
    //     input.addEventListener("keyup",function(input){
    //         const formcontrol = input.parentElement;
    //         console.log(formcontrol)
    //         const small_msg = formcontrol.querySelector("small")
    //         console.log(small_msg)
    
    //         small_msg.innerHTML = "";
    
    //         formcontrol.className = "form-control error"
    //     }
    //     )
    // }


    

    if(full_namevalue !== "" && !full_namespace.test(full_namevalue) && fullnamepattern.test(full_namevalue) && emailpattern.test(emailvalue) && emailvalue !== "" && !exist && mobile_numbervalue !== "" && mobilenumberpattern.test(mobile_numbervalue) && passwordvalue !== "" && re_enter_passwordvalue !== "" && re_enter_passwordvalue == passwordvalue ){
        user_list.push({
            "full_name": full_namevalue,
            "email": emailvalue,
            "mobile_number": mobile_numbervalue,
            "password": passwordvalue,
            "re_enter_password": re_enter_passwordvalue, 
            "gender":gender, 
            "dob":dob,
            "address":address,
            "hintname":hintname,
             "unique_id":unique_id
        });

        localStorage.setItem('user_list', JSON.stringify(user_list));
        document.querySelector('form').reset();
        alert('Account created Successfully');

        document.querySelector('form').reset();

        location.href = "./login.html";



    }
}


console.log(document.querySelectorAll(".form-control.success"))


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

