
const signUp = e => {
    let full_name = document.getElementById("full_name").value
    let email = document.getElementById("email").value
    let mobile_number = document.getElementById("mobile_number").value
    let password = document.getElementById("password").value
    let re_enter_password = document.getElementById("re_enter_password").value

    let user_list = JSON.parse(localStorage.getItem('user_list')) || [];
    let exist = user_list.length &&
        JSON.parse(localStorage.getItem('user_list')).some(data =>
            data.email.toLowerCase() == email.toLowerCase() &&
            data.password.toLowerCase() == password.toLowerCase()

        );

    if (!exist) {
        user_list.push({ full_name, email, mobile_number, password, re_enter_password });
        localStorage.setItem('user_list', JSON.stringify(user_list));
        document.querySelector('form').reset();
        alert('Account created Successfully');
        location.href = "../../index.html";
    }
    else {
        alert('Sorry the User already Exist!! \n Try with different Email');
        document.querySelector('form').reset();
    }
    e.preventDefault();
}



const signIn = e => {
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
        alert("Login successfully");
        location.href = "../../index.html";
    }
    e.preventDefault();
}
