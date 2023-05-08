// getting the gender_list from ls
const localgender = JSON.parse(localStorage.getItem("gender_list"));

// getting the category_list from ls
const localcategory = JSON.parse(localStorage.getItem("category_list"));

console.log(localcategory);

// create option for gender
const inputgender = document.querySelector("#inputgendercategory");
inputgender.innerHTML = "";
const selected_option = document.createElement("option");
// selected_option.setAttribute()
selected_option.innerHTML = "Select Gender";
inputgender.append(selected_option);
function creategender() {
for( let i =  0; i < localgender.length; i++) {
    const gender_option = document.createElement("option");
    gender_option.value = localgender[i].id;
    gender_option.innerHTML = localgender[i].gender;
    inputgender.append(gender_option);
  }
}
creategender();

// function to create gender option from ls
const inputcate = document.querySelector("#inputgendercategory");
inputcate.addEventListener("change", cate);

function cate() {
  const inputcatevalue = document.querySelector("#inputcategory").value;
  console.log(inputcatevalue);

  const inputvalue = document.getElementById("inputgendercategory").value;
  console.log(inputvalue);

  const localcategory = JSON.parse(localStorage.getItem("category_list")) || [];

  const filteredcategory = localcategory.filter((e) => e.gender == inputvalue);

  // return filteredcategory;

  const inputcate = document.querySelector("#inputcategory");
  inputcate.innerHTML = " <option> Selected Category </option> ";
  // let selected_option = document.createElement("option");
  // selected_option.setAttribute("class", "selected")
  // selected_option.innerHTML = "select category"

for( let i =  0; i < filteredcategory.length; i++) {
    const category_option = document.createElement("option");
    category_option.value = filteredcategory[i].id;
    category_option.innerHTML = filteredcategory[i].category;
    inputcate.append(category_option);
  }
}

// getting the gender_list from ls

const localsize = JSON.parse(localStorage.getItem("size_list"));

function createsize(e) {
  let size_template = "";

  // localsize length
  const noOfItems = localsize.length;

  // localsize values showing in dropdown
  for (let k = 0; k < noOfItems; k++) {
    size_template += `
    <div>
        <input type="checkbox" value="${localsize[k].id}" id="size${k + 1}" />
        <label for="size${k + 1}"> ${localsize[k].value} </label>
    </div>
        `;
  }

  const div_option = document.querySelector("#option");
  div_option.innerHTML = "";
  div_option.insertAdjacentHTML("afterbegin", size_template);
}

document.querySelector("#inputsize").addEventListener(
  "click",
  (e) => {
    e.preventDefault(e);

    // creating size from local storage when clicked
    createsize();
  },
  { once: true }
);

const div_option = document.querySelector("#option");

div_option.addEventListener("change", () => {
  // array having only the unique values   if not----eg.[1,2,3,1]

  const newresult = Array.from(new Set());
for( let i =  0; i < localsize.length; i++) {
    // pushing the checked value in newresult
    if (document.querySelector(`#size${i + 1}:checked`)) {
      newresult.push(document.querySelector(`#size${i + 1}:checked`).value);
    }
    // splicing the unchecked value in newresult
    if (!document.querySelector(`#size${i + 1}:checked`)) {
      newresult.splice(i, 1);
    }
  }

  console.log(newresult);
  // console.log(result)

  // finding the size from localstorage by the newresult[] values
  let foundsize = "";
  document.querySelector("#inputsize").value = "";
  document.querySelector("#varients").innerHTML = "";

for( let j =  0; j < newresult.length; j++) {
  for( let i =  0; i < localsize.length; i++) {
      foundsize = localsize.find((e) => e.id == newresult[j]);
      break;
    }

    // finding all the checkedvalues from localsize ---like s,m,l
    console.log(foundsize);
    document.querySelector("#inputsize").value += `${foundsize.value}, `;

    // creating a div with all the varients showing the found value's size
    create_div = `

        <div class="spec_div form-row d-flex justify-content-between align-items-center p-3">

        
        <div class="form-group d-flex  justify-content-start w-25 column-gap-2">
        <label for="size">size</label>
        <input class="form-group form-control w-50" id="sizevalue${
          j + 1
        }" value=${foundsize.value} data-size_id=${
      foundsize.id
    } readonly required></input>
    </div>




    <div class="form-group d-flex justify-content-center w-50 column-gap-2">
        <label for="inputmrp"></label>MRP</label>
        <div class="form-group d-flex">
            <select class="form-control bg-body-secondary w-25" id="inputcurrency${
              j + 1
            }">
                <option>RS</option>
            </select>
            <input type="number" min=1 class="form-control w-50" id="inputmrp${
              j + 1
            }" required>
        </div>
    </div>



    <div class="form-group d-flex justify-content-center w-50 column-gap-1" id="offer">

        <label for="inputoffer">offer</label>
        <div class="form-group d-flex">
            <input type="number" min=1 class="form-control w-50" id="inputoffer${
              j + 1
            }" required>
            <select class="form-control w-25" id="inputoffertype${j + 1}" required>
                <option>%</option>
                <option>RS</option>
            </select>
        </div>

    </div>


    <div class="form-group d-flex justify-content-center w-50 column-gap-2" id="quantity">
        <label for="inputquantity"> quantity</label>
        <input type="number" class="form-control w-50  class=" d-flex justify-content-center""
            id="inputquantity${j + 1}" required>
    </div>
    </div>
    `;

    document
      .querySelector("#varients")
      .insertAdjacentHTML("afterbegin", create_div);
  }
});

// function when from on submit
const form = document.getElementById("form");
form.addEventListener("submit", upload);

// product_list.foreach(createProduct);

function upload(e) {
  e.preventDefault();

  const source = document.getElementById("inputsource").value;
  const gender = document.getElementById("inputgendercategory").value;
  const category = document.getElementById("inputcategory").value;
  const brand = document.getElementById("inputbrand").value;
  const name = document.getElementById("inputname").value;
  const color = document.getElementById("inputcolor").value;

  // console.log(uncheckedsize)

  // size

  //     //price

  let currency;
  let mrp;
  let value;
  let type;
  let quantity;

  console.log(currency);

  // details
  const details = document.getElementById("inputdetails").value;

  const product_id = crypto.randomUUID();

  // local-storage
  const product_list = JSON.parse(localStorage.getItem("product_list")) || [];

  const localgender = JSON.parse(localStorage.getItem("gender_list"));
  const seller_uuid = JSON.parse(localStorage.getItem("seller_id"));
  // let gender_category_list = JSON.parse(localStorage.getItem('gender_category_list')) || [];

  const inputs = document.querySelectorAll(".form-control");
  console.log(inputs);
  let inputvalue = "";
  inputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      inputvalue = e.target.value;
    });
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

  const div_len = document.querySelectorAll(".spec_div").length;
  const push_varients = [];
for( let i =  0; i < div_len; i++) {
    let current;
    if (document.getElementById(`inputoffertype${i + 1}`).value === "%") {
      current =
        document.getElementById(`inputmrp${i + 1}`).value -
        (document.getElementById(`inputmrp${i + 1}`).value *
          document.getElementById(`inputoffer${i + 1}`).value) /
          100;
      current = Math.round(current);
    } else {
      current =
        document.getElementById(`inputmrp${i + 1}`).value -
        document.getElementById(`inputoffer${i + 1}`).value;
    }

    console.log(document.getElementById(`sizevalue${i + 1}`).value);

    push_varients.push({
      size: document.getElementById(`sizevalue${i + 1}`).dataset.size_id,
      price: {
        currency: document.getElementById(`inputcurrency${i + 1}`).value,
        mrp: document.getElementById(`inputmrp${i + 1}`).value,
        current,
      },
      offer: {
        value: document.getElementById(`inputoffer${i + 1}`).value,
        type: document.getElementById(`inputoffertype${i + 1}`).value,
      },
      quantity: document.getElementById(`inputquantity${i + 1}`).value,
    });
  }

  // if (inputvalue != "") {
  product_list.push({
    // source, gendercategory, category, brand, name, color, size, currency, mrp, value, type, details, product_id
    seller_id: seller_uuid,
    product_id,

    image: {
      source,
      alt: name,
    },

    brand,
    name,

    varients: push_varients,
    color,
    details,
    ratings: 3.5,
    buyers: 100,
    gender,
    category,
    stock: quantity,
    status: true,
  });

  localStorage.setItem("product_list", JSON.stringify(product_list));

  alert("product uploaded")
  window.location.reload()
  // location.href = "./inventory.html"
}

// let valform = document.getElementById("form");

// console.log(valform);

//
