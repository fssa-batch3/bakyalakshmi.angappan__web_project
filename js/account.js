
const unique_id = localStorage.getItem("unique_id")
let user_profile = document.getElementById("profile");
user_profile.addEventListener("click", function (e) {

    if (unique_id == null) {
        //console.log(user_account)
        location.href = "./pages/homepage/login.html"
    }
    else {
        location.href = "./pages/homepage/account.html"
    }
})

function account() {
    let user_account = document.getElementById("account");
    if (unique_id == null | undefined) {
        user_account.innerText = "login"
    }
    else {
        user_account.innerText = "profile"
    }
}
account();