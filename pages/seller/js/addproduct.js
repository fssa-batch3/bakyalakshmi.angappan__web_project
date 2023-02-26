const form = document.getElementById("form");
form.addEventListener("submit", upload);


function createProduct(category, brand, name, color, size, mrp, value) {

    let crudTable = document.getElementById("crudtable");

    let productData = document.createElement("tr");

    let td_category = document.createElement("td");
    let td_brand = document.createElement("td");
    let td_name = document.createElement("td");
    let td_color = document.createElement("td");
    let td_size = document.createElement("td");
    let td_mrp = document.createElement("td");
    //  let td_currency = document.createElement("td");
    let td_value = document.createElement("td");
    // let td_type = document.createElement("td");
    let td_actions = document.createElement("td");

    let edit_button = document.createElement("button");
    edit_button.setAttribute("class", "edit_button");
    edit_button.innerText = "edit";
    td_actions.append(edit_button);


    let del_button = document.createElement("button");
    del_button.setAttribute("class", "del_button");
    del_button.innerText = "delete";
    td_actions.append(del_button);

    td_category.innerText = category;
    td_brand.innerText = brand;
    td_name.innerText = name;
    td_color.innerText = color;
    td_size.innerText = size;
    td_mrp.innerText = mrp;
    // td_currency.innerText = currency;
    td_value.innerText = value;
    // td_type.innerText = type;

    productData.append(td_category, td_brand, td_name, td_color, td_size, td_mrp, td_value, td_actions)
    crudTable.append(productData);
};

product_list.foreach(createProduct);

function upload(e) {
    e.preventDefault();

    let source = document.getElementById("inputsource").value
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


    createProduct(category, brand, name, color, size,mrp, value);


    let product_list = JSON.parse(localStorage.getItem('product_list')) || [];

    product_list.push({ source, category, brand, name, color, size, currency, mrp, value, type, details, product_id });



    localStorage.setItem('product_list', JSON.stringify(product_list));

}

