// getting the gender_list from ls
const localsize = JSON.parse(localStorage.getItem("size_list"));

console.log(localsize)

// create option for gender
const inputsize = document.querySelector("#inputsize")
inputsize.innerHTML = "";

function createsize() {
    for (i = 0; i < localsize.length; i++) {
        let size_option = document.createElement("option");
        size_option.value = localsize[i]["id"]
        size_option.innerHTML = localsize[i]["value"];
        inputsize.append(size_option);
    };
}
createsize();

// getting the gender_list from ls
const localgender = JSON.parse(localStorage.getItem("gender_list"));

// getting the category_list from ls
const localcategory = JSON.parse(localStorage.getItem("category_list"));

console.log(localcategory)

// create option for gender
const inputgender = document.querySelector("#inputgendercategory")
inputgender.innerHTML = "";
let selected_option = document.createElement("option");
// selected_option.setAttribute()
selected_option.innerHTML = "select gender"
inputgender.append(selected_option);
function creategender() {
    for (i = 0; i < localgender.length; i++) {
        let gender_option = document.createElement("option");
        gender_option.value = localgender[i]["id"]
        gender_option.innerHTML = localgender[i]["gender"];
        inputgender.append(gender_option);
    };
}
creategender();


// function to create gender option from ls
let inputcate = document.querySelector("#inputgendercategory");
inputcate.addEventListener("change", cate);

function cate() {

    let inputcatevalue = document.querySelector("#inputcategory").value;
    console.log(inputcatevalue);

    const inputvalue = document.getElementById("inputgendercategory").value;
    console.log(inputvalue);

    let localcategory = JSON.parse(localStorage.getItem('category_list')) || [];

    let filteredcategory = localcategory.filter((e) =>
        e.gender == inputvalue
    );

    // return filteredcategory;

    let inputcate = document.querySelector("#inputcategory");
    inputcate.innerHTML = " <option> selected category </option> ";
    // let selected_option = document.createElement("option");
    // selected_option.setAttribute("class", "selected")
    // selected_option.innerHTML = "select category"

    for (i = 0; i < filteredcategory.length; i++) {
        let category_option = document.createElement("option");
        category_option.value = filteredcategory[i]["id"];
        category_option.innerHTML = filteredcategory[i]["category"];
        inputcate.append(category_option);
    }

};

















// const option = document.querySelector("#inputcategory option");
// // console.log(option);
// option.addEventListener("onchange", opt)

// function opt() {



//     // let inputcatevalue = document.querySelector("#inputcategory").value;
//     // console.log(inputcatevalue)

//     // let localcategory = JSON.parse(localStorage.getItem('category_list'));

//     // let filteredcategory = localcategory.find((e) =>
//     //     e.id == inputcatevalue
//     // );

//     // console.log(filteredcategory)


//     console.log("hsfya")

//     // document.querySelector("#inputcategory").value = filteredcategory


// }


// console.log(filteredcategory);

// const inputcategory = document.querySelector("#inputgendercategory")

// function createcategory() {
//     for (i = 0; i < category.length; i++) {
//         let category_option = document.createElement("option");
//         category_option.value = filteredcategory[i]["id"]
//         category_option.innerText = filteredcategory[i]["category"]
//         inputgender.append(category_option);
//     };
// }
// createcategory();


// function to store the gender name stored on ls 
// const inputvalue = document.getElementById("inputgendercategory").value

// // finding the object

// let findgender = gender.find(e => e.inputvalue == gender["value"]);
// console.log(findgender);

// let gender_name = findgender["gender"];
// console.log(gender_name);

// function when from on submit
const form = document.getElementById("form");
form.addEventListener("submit", upload);

//product_list.foreach(createProduct);

function upload(e) {

    e.preventDefault();

    let source = document.getElementById("inputsource").value
    let gender = document.getElementById("inputgendercategory").value
    let category = document.getElementById("inputcategory").value
    let brand = document.getElementById("inputbrand").value
    let name = document.getElementById("inputname").value
    let color = document.getElementById("inputcolor").value
    let size = document.getElementById("inputsize").value

    //price
    let currency = document.getElementById("inputcurrency").value
    let mrp = document.getElementById("inputmrp").value
    //offer
    let value = document.getElementById("inputoffer").value
    let type = document.getElementById("inputoffertype").value

    let quantity = document.getElementById("inputquantity").value

    //details
    let details = document.getElementById("inputdetails").value

    let product_id = crypto.randomUUID();

    //local-storage
    let product_list = JSON.parse(localStorage.getItem('product_list')) || [];

    const localgender = JSON.parse(localStorage.getItem("gender_list"));
    // let gender_category_list = JSON.parse(localStorage.getItem('gender_category_list')) || [];



    let inputs = document.querySelectorAll(".form-control");
    console.log(inputs);
    let inputvalue = ""
    inputs.forEach(input => {
        input.addEventListener("change", function (e) {
            inputvalue = e.target.value;
            // console.log(inputvalue);
        })
    })
    if (inputvalue != "") {
        product_list.push({
            // source, gendercategory, category, brand, name, color, size, currency, mrp, value, type, details, product_id
            "product_id": product_id,

            "image": {
                "source": source,
                "alt": name
            },

            "brand": brand,
            "name": name,

            "price": {

                "currency": currency,
                "mrp": mrp,

                "offer": {
                    "value": value,
                    "type": type
                }
            },
            "size": size,
            "color": color,
            "details": details,
            "ratings": 3.5,
            "buyers": 100,
            "gender": gender,
            "category": category,
            "stock": quantity,
            "status": true
        });


        localStorage.setItem('product_list', JSON.stringify(product_list));
        location.href = "./inventory.html"
    }

    else {
        alert("please fill in all the required fields")
        document.querySelector('form').reset();
    }

};



// let valform = document.getElementById("form");

// console.log(valform);


