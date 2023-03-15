// getting the gender_list from ls
const gender = JSON.parse(localStorage.getItem("gender_list"));

// getting the category_list from ls
const localcategory = JSON.parse(localStorage.getItem("category_list"));

console.log(localcategory)

// getting the gender_list from ls
// const gender = JSON.parse(localStorage.getItem("gender_list"));
// console.log(gender_list);


// function to create gender option from ls
const inputgender = document.querySelector("#inputgendercategory");
inputgender.addEventListener("click", gen);

function gen() {
    const inputValue = document.getElementById("inputgendercategory").value;
    console.log("inputValue" + inputValue);

    function creategender() {
        const inputgender = document.querySelector("#inputgendercategory")
        inputgender.innerHTML = "";
        let selected_option = document.createElement("option");
        // selected_option.setAttribute()
        selected_option.innerHTML = "select gender"
        inputgender.append(selected_option);

        for (i = 0; i < gender.length; i++) {
            let gender_option = document.createElement("option");
            gender_option.value = gender[i]["id"]
            gender_option.innerHTML = gender[i]["gender"];
            inputgender.append(gender_option);
        };
    }

    creategender();
}


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
const inputvalue = document.getElementById("inputgendercategory").value

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
    let gendercategory = document.getElementById("inputgendercategory").value
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

    //details
    let details = document.getElementById("inputdetails").value

    let product_id = crypto.randomUUID();

    //local-storage
    let product_list = JSON.parse(localStorage.getItem('product_list')) || [];
    // let gender_category_list = JSON.parse(localStorage.getItem('gender_category_list')) || [];

    product_list.push({
        // source, gendercategory, category, brand, name, color, size, currency, mrp, value, type, details, product_id
        "product_id": product_id,
        "category": category,

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
        "value": inputvalue
    });

    localStorage.setItem('product_list', JSON.stringify(product_list));
    location.href = "./inventory.html"


};

