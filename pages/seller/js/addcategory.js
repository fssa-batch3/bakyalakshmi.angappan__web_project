// storing the size in ls
let size_list = [];

size_list.push(
    {
        "value": "s",
        "quantity": 12,
        "status": true,
        "id": 1
    },
    {
        "value": "l",
        "quantity": 12,
        "status": true,
        "id": 2
    },
    {
        "value": "m",
        "quantity": 12,
        "status": true,
        "id": 3
    },
    {
        "value": "xl",
        "quantity": 12,
        "status": true,
        "id": 4
    },
    {
        "value": "xxl",
        "quantity": 12,
        "status": true,
        "id": 5
    },

    {
        "value": "32",
        "quantity": 12,
        "status": true,
        "id": 6
    },
    {
        "value": "34",
        "quantity": 12,
        "status": true,
        "id": 7
    },
    {
        "value": "36",
        "quantity": 12,
        "status": true,
        "id": 8
    },
    {
        "value": "38",
        "quantity": 12,
        "status": true,
        "id": 9
    },
    {
        "value": "40",
        "quantity": 12,
        "status": true,
        "id": 10
    }
)

console.log(size_list);
localStorage.setItem('size_list', JSON.stringify(size_list));




// getting the gender_list from ls
const gender = JSON.parse(localStorage.getItem("gender_list"));
// console.log(gender_list);


// function to create gender option from ls
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

let gender_list = [];

gender_list.push(
    {
        "gender": "men",
        "id": 1
    },
    {
        "gender": "women",
        "id": 2
    },
    {
        "gender": "kids",
        "id": 3
    }
);

localStorage.setItem('gender_list', JSON.stringify(gender_list));




// finding the object

// let findgender = gender.find(e => e.inputvalue == gender["value"]);
// console.log(findgender);

// let gender_name = findgender["gender"];
// console.log(gender_name);

//  <button type="button" id="btn_add_cat" class="btn btn-primary">add category</button>

// function exist() {
//     let exist = JSON.parse(localStorage.getItem('category_list')).some(e =>
//         e.category.toLowerCase() == inputcategory.toLowerCase()
//     );
// }


function filter() {

    const inputvalue = document.getElementById("choosecategory").value;

    let localcategory = JSON.parse(localStorage.getItem('category_list')) || [];

    let filteredcategory = localcategory.filter((e) =>
        e.gender == inputvalue
    );

    return filteredcategory;
    // console.log(filteredcategory);
};


// function createcategory(category) {

//     let div_category = document.querySelector(".category");
//     console.log(div_category);

//     let div_name = document.createElement("div");
//     div_name.setAttribute("class", "name");
//     div_name.innerText = category;

//     div_category.append(div_name);

// }



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
        let div_name = document.createElement("div");
        div_name.setAttribute("class", "name");
        div_name.innerHTML = a[i]["category"];

        div_category.append(div_name);
    }
};








let addgender = document.querySelector("#btn_add_cat");
// console.log(addgender);
addgender.addEventListener("click", addcat);

function addcat(e) {

    //  getting the gender value
    const inputvalue = document.getElementById("choosecategory").value;

    // getting the category_list
    let localcategory = JSON.parse(localStorage.getItem('category_list')) || [];
    let seller_uuid = JSON.parse(localStorage.getItem('seller_id'))
    // getting the category by id 
    let inputcategory = document.getElementById("inputcategory").value
    // console.log(inputcategory)

    // getting the filtered products


    // finding the object
    let findcategory = localcategory.find(e => e.category == inputcategory);
    console.log(findcategory)

    if (findcategory) {

        findcategory["status"] = true;
        localStorage.setItem('category_list', JSON.stringify(localcategory));

        alert("category created succesfully ");
    };

    // if (findcategory["status"] == false) {

    // };

    if (!findcategory) {
        localcategory.push({
            "seller_id": seller_uuid,
            "category": inputcategory,
            "id": localcategory.length + 1,
            "gender": inputvalue,
            "status": true
        });

        alert("category created succesfully ");
    }






    localStorage.setItem('category_list', JSON.stringify(localcategory));
};




