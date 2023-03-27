const gender = JSON.parse(localStorage.getItem("gender_list"));
console.log(gender);

const inputgender = document.querySelector("#choosecategory")
function creategender() {
    for (i = 0; i < gender.length; i++) {
        let gender_option = document.createElement("option");
        gender_option.value = gender[i]["id"]
        gender_option.innerText = gender[i]["gender"]
        inputgender.append(gender_option);
    };
}

creategender();

function filter() {

    const inputvalue = document.getElementById("choosecategory").value;

    let localcategory = JSON.parse(localStorage.getItem('category_list')) || [];

    let filteredcategory = localcategory.filter((e) =>
        e.gender == inputvalue
    );

    return filteredcategory;
    // console.log(filteredcategory);
};

let show_category = document.querySelector("#btn_cat");
show_category.addEventListener("click", showcat)

function showcat() {

    const inputvalue = document.getElementById("choosecategory").value;

    let localcategory = JSON.parse(localStorage.getItem('category_list')) || [];

    // console.log(filter());
    console.log(filter());

    let a = filter();
    console.log(a);

    let div_category = document.querySelector(".category")

    div_category.innerHTML = ""


    for (i = 0; i < a.length; i++) {

        let div_show = document.createElement("div");
        div_show.setAttribute("id", "div_show")

        let div_name = document.createElement("div");
        div_name.setAttribute("class", "name");

        div_name.innerHTML = a[i]["category"];

        div_show.append(div_name);

        let button = document.createElement("button");
        button.setAttribute("class", "btn btn-danger ");
        button.setAttribute("id", "del_btn");
        button.setAttribute("data-id", localcategory[i]["id"]);
        button.innerHTML = "delete";

        div_show.append(button);

        div_category.append(div_show);
    }



    let del_button = document.querySelectorAll("#del_btn")
    console.log(del_button);

    del_button.forEach(del => {
        del.addEventListener("click", function (e) {
            e.preventDefault();
            // clicked id 
            let category_id = this.dataset.id;
            console.log(category_id)

            let find_category = localcategory.find(e => e.id == category_id)
            console.log(find_category)

            find_category["status"] = false;

            localStorage.setItem("category_list", JSON.stringify(localcategory));
        }
        )

    });

};







