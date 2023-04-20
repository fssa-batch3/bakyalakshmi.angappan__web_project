

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


// getting the gender_list from ls

const localsize = JSON.parse(localStorage.getItem("size_list"));

function createsize(e) {

    let size_template = ''


    // localsize length
    const noOfItems = localsize.length;



    // localsize values showing in dropdown
    for (let k = 0; k < noOfItems; k++) {
        size_template += `
    <div>
        <input type="checkbox" value="${localsize[k]["id"]}" id="size${k + 1}" />
        <label for="size${k + 1}"> ${localsize[k]["value"]} </label>
    </div>
        `
    }

    let div_option = document.querySelector("#option")
    div_option.innerHTML = ""
    div_option.insertAdjacentHTML("afterbegin", size_template)
}


document.querySelector("#inputsize").addEventListener("click", function (e) {
    e.preventDefault(e);

    // creating size from local storage when clicked
    createsize();
}, { once: true });


const div_option = document.querySelector("#option")


div_option.addEventListener("change", function () {

    // array having only the unique values   if not----eg.[1,2,3,1]

    let newresult = Array.from(new Set());
    for (i = 0; i < localsize.length; i++) {
        // pushing the checked value in newresult
        if (document.querySelector(`#size${i + 1}:checked`)) {
            newresult.push(document.querySelector(`#size${i + 1}:checked`).value)
        }
        // splicing the unchecked value in newresult
        if (!document.querySelector(`#size${i + 1}:checked`)) {
            newresult.splice(i, 1)
        }
    }

    console.log(newresult)
    // console.log(result)

    // finding the size from localstorage by the newresult[] values
    let foundsize = ""
    document.querySelector("#inputsize").value = ""
    document.querySelector("#varients").innerHTML = ""


    for (j = 0; j < newresult.length; j++) {
        for (i = 0; i < localsize.length; i++) {
            foundsize = localsize.find(e => e.id == newresult[j]);
            break;
        }

        // finding all the checkedvalues from localsize ---like s,m,l
        console.log(foundsize);
        document.querySelector("#inputsize").value += foundsize["value"] + ", "

        // creating a div with all the varients showing the found value's size
        create_div = `

        <div class="spec_div form-row d-flex justify-content-between align-items-center p-3">

        
        <div class="form-group d-flex  justify-content-start w-25 column-gap-2">
        <label for="size">size</label>
        <input class="form-group form-control w-50" id="size${j + 1}" value=${foundsize["value"]} readonly></input>
    </div>




    <div class="form-group d-flex justify-content-center w-50 column-gap-2">
        <label for="inputmrp"></label>MRP</label>
        <div class="form-group d-flex">
            <select class="form-control bg-body-secondary w-25" id="inputcurrency${j + 1}">
                <option>rs</option>
            </select>
            <input type="number" min=1 class="form-control w-50" id="inputmrp${j + 1}">
        </div>
    </div>



    <div class="form-group d-flex justify-content-center w-50 column-gap-1" id="offer">

        <label for="inputoffer">offer</label>
        <div class="form-group d-flex">
            <input type="number" min=1 class="form-control w-50" id="inputoffer${j + 1}">
            <select class="form-control w-25" id="inputoffertype${j + 1}">
                <option>%</option>
                <option>rs</option>
            </select>
        </div>

    </div>


    <div class="form-group d-flex justify-content-center w-50 column-gap-2" id="quantity">
        <label for="inputquantity"> quantity</label>
        <input type="number" class="form-control w-50  class=" d-flex justify-content-center""
            id="inputquantity${j + 1}">
    </div>
    </div>
    `

        document.querySelector("#varients").insertAdjacentHTML("afterbegin", create_div)

    }

}
);


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


    // console.log(uncheckedsize)

    // size 


    //     //price

    let currency;
    let mrp;
    let value;
    let type;
    let quantity;


    console.log(currency)


    //details
    let details = document.getElementById("inputdetails").value

    let product_id = crypto.randomUUID();

    //local-storage
    let product_list = JSON.parse(localStorage.getItem('product_list')) || [];

    const localgender = JSON.parse(localStorage.getItem("gender_list"));
    let seller_uuid = JSON.parse(localStorage.getItem('seller_id'))
    // let gender_category_list = JSON.parse(localStorage.getItem('gender_category_list')) || [];



    let inputs = document.querySelectorAll(".form-control");
    console.log(inputs);
    let inputvalue = "";
    inputs.forEach(input => {
        input.addEventListener("change", function (e) {
            inputvalue = e.target.value;
        })
    });

    // let avail_size = JSON.parse(localStorage.getItem("size_list"));
    // console.log(avail_size);

    // let available = false;
    // for (i = 0; i < checkedsize.length; i++) {
    //     let foundsize = avail_size.find(e => e.id == checkedsize[i])
    //     console.log(foundsize)
    //     if (document.querySelector(`#localsize${i}:checked`)) {
    //         available = true;
    //     }
    // }


    
    let div_len = document.querySelectorAll(".spec_div").length
    let push_varients =[]
    for(i=0;i<div_len;i++){
        let current;
            if (document.getElementById(`inputoffertype${i+1}`).value === "%") {
                current = document.getElementById(`inputmrp${i+1}`).value - document.getElementById(`inputmrp${i+1}`).value * document.getElementById(`inputoffer${i+1}`).value / 100;
                current = Math.round(current);
            }
            else {
                current = document.getElementById(`inputmrp${i+1}`).value - document.getElementById(`inputoffer${i+1}`).value;
            }
        push_varients.push(
        {
            "size":document.getElementById(`size${i+1}`).value,
            "price":{
                "currency":document.getElementById(`inputcurrency${i+1}`).value,
                "mrp":document.getElementById(`inputmrp${i+1}`).value,
                "current":current
            },
            "offer":{
                "value":document.getElementById(`inputoffer${i+1}`).value,
                "type":document.getElementById(`inputoffertype${i+1}`).value
            },
            "quantity":document.getElementById(`inputquantity${i+1}`).value
        }
    )
    };

    // if (inputvalue != "") {
    product_list.push({
        // source, gendercategory, category, brand, name, color, size, currency, mrp, value, type, details, product_id
        "seller_id": seller_uuid,
        "product_id": product_id,

        "image": {
            "source": source,
            "alt": name
        },

        "brand": brand,
        "name": name,

        "varients":push_varients ,
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

};



// let valform = document.getElementById("form");

// console.log(valform);

// 
