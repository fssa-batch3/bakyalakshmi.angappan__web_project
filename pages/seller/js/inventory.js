

function createProduct(category, brand, name, color, size, mrp, value, product_id) {

    let crudTable = document.getElementById("crudtable");

    let productData = document.createElement("tr");

    let td_index = document.createElement("td");
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
    edit_button.setAttribute("type", "button");
    edit_button.setAttribute("data-id", product_id);
    edit_button.innerText = "edit";
    td_actions.append(edit_button);

    let del_button = document.createElement("button");
    del_button.setAttribute("class", "del_button");
    del_button.setAttribute("data-id", product_id);
    del_button.innerText = "delete";
    td_actions.append(del_button);


    td_index.innerText = i;
    td_category.innerText = category;
    td_brand.innerText = brand;
    td_name.innerText = name;
    td_color.innerText = color;
    td_size.innerText = size;
    td_mrp.innerText = mrp;
    // td_currency.innerText = currency;
    td_value.innerText = value;
    // td_type.innerText = type;

    productData.append(td_index, td_category, td_brand, td_name, td_color, td_size, td_mrp, td_value, td_actions);
    crudTable.append(productData);
};

let product = JSON.parse(localStorage.getItem("product_list"));
for (i = 0; i < product.length; i++) {
    createProduct(product[i]["category"], product[i]["brand"], product[i]["name"], product[i]["color"], product[i]["size"], product[i]["mrp"], product[i]["value"], product[i]["product_id"]);
}



// function to edit product



let edit = document.querySelectorAll("button.edit_button")
edit.forEach(function (find) {
    find.addEventListener("click", function () {
        let product_id = this.dataset.id;
        // console.log(product_id)
        let uuid = JSON.parse(localStorage.getItem("product_uuid"));

        localStorage.setItem("product_uuid", JSON.stringify(product_id));

        location.href = "./editproduct.html"
    })


});


//function to delete a product 

let del = document.querySelectorAll("button.del_button")
del.forEach(function (find) {

    find.addEventListener('click', function () {
        let product_id = this.dataset.id;
        localStorage.setItem("product_uuid", JSON.stringify(product_id));

        let uuid = JSON.parse(localStorage.getItem("product_uuid"));
        let product = JSON.parse(localStorage.getItem("product_list"));

        function find_product(e) {
            return e.product_id == uuid;
        }

        let product_data = product.find(find_product);

        let indexOfProduct = product.indexOf(product_data);
        product.splice(indexOfProduct, 1);

        localStorage.setItem("product_list", JSON.stringify(product));

        location.reload();

    })

});


