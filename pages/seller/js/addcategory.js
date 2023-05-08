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

// getting the gender_list from ls
const gender = JSON.parse(localStorage.getItem("gender_list"));
// console.log(gender_list);

// function to create gender option from ls
const inputgender = document.querySelector("#choosecategory");
function creategender() {
  for (i = 0; i < gender.length; i++) {
    const gender_option = document.createElement("option");
    gender_option.value = gender[i].id;
    gender_option.innerText = gender[i].gender;
    inputgender.append(gender_option);
  }
}

creategender();

function filter() {
  const inputvalue = document.getElementById("choosecategory").value;

  const localcategory = JSON.parse(localStorage.getItem("category_list")) || [];

  const filteredcategory = localcategory.filter((e) => e.gender == inputvalue);

  return filteredcategory;
  // console.log(filteredcategory);
}

// function createcategory(category) {

//     let div_category = document.querySelector(".category");
//     console.log(div_category);

//     let div_name = document.createElement("div");
//     div_name.setAttribute("class", "name");
//     div_name.innerText = category;

//     div_category.append(div_name);

// }

const show_category = document.querySelector("#btn_cat");
show_category.addEventListener("click", showcat);

function showcat() {
  const inputvalue = document.getElementById("choosecategory").value;

  const localcategory = JSON.parse(localStorage.getItem("category_list")) || [];

  // console.log(filter());
  console.log(filter());

  const a = filter();
  console.log(a);
  const div_category = document.querySelector(".category");
  div_category.innerHTML = "";

  for (i = 0; i < a.length; i++) {
    const div_name = document.createElement("td");
    div_name.setAttribute("class", "name");
    div_name.innerHTML = a[i].category;

    div_category.append(div_name);
  }
}


const form = document.getElementById("form");
form.addEventListener("submit", addcat);

function addcat(e) {
  //  getting the gender value
  const inputvalue = document.getElementById("choosecategory").value;

  // getting the category_list
  const localcategory = JSON.parse(localStorage.getItem("category_list")) || [];
  const seller_uuid = JSON.parse(localStorage.getItem("seller_id"));
  // getting the category by id
  const inputcategory = document.getElementById("inputcategory").value;
  // console.log(inputcategory)

  // getting the filtered products

  let filteredcategory = filter()

  // finding the object
  const findcategory = filteredcategory.find((e) => e.category == inputcategory);
  console.log(findcategory);

  if (findcategory) {
    findcategory.status = true;
    localStorage.setItem("category_list", JSON.stringify(localcategory));

    alert("category aldredy exists ");
  }

  // if (findcategory["status"] == false) {

  // };

  if (!findcategory) {
    localcategory.push({
      seller_id: seller_uuid,
      category: inputcategory,
      id: localcategory.length + 1,
      gender: inputvalue,
      status: true,
    });

    alert("category created succesfully ");
  }

  localStorage.setItem("category_list", JSON.stringify(localcategory));
}
