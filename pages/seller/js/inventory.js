function createProduct(gender, category, brand, name, color, mrp, value, product_id) {

    let crudTable = document.querySelector(".table-light");

    let productData = document.createElement("tr");

    let td_index = document.createElement("td");
    let td_gender= document.createElement("td");
    let td_category = document.createElement("td");
    let td_brand = document.createElement("td");
    let td_name = document.createElement("td");
    let td_color = document.createElement("td");

    let td_mrp = document.createElement("td");
    // let td_currency = document.createElement("td");
    let td_offer = document.createElement("td");
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

    td_index.innerText = i + 1;

    // finding the gender from the localgender using id

    let localgender = JSON.parse(localStorage.getItem("gender_list"));
    console.log(localgender);
    let findgender = localgender.find(e => e.id == gender);
    console.log(findgender);

    td_gender.innerText = findgender["gender"];

    // finding the category from the localcategory using id

    let localcategory = JSON.parse(localStorage.getItem("category_list"));
    console.log(localcategory);

    let findcategory = localcategory.find(e => e.id == category);
    console.log(findcategory);

    td_category.innerText = findcategory["category"];

    td_brand.innerText = brand;
    td_name.innerText = name;
    td_color.innerText = color;
    td_mrp.innerText = mrp;
    td_offer.innerText = value;

    productData.append(td_index, td_gender, td_category, td_brand, td_name, td_color,td_mrp, td_offer, td_actions);
    crudTable.append(productData);
};



let product = JSON.parse(localStorage.getItem("product_list"));
console.log(product)

for (i = 0; i < product.length; i++) {
    createProduct(product[i]["gender"], product[i]["category"], product[i]["brand"], product[i]["name"],product[i]["color"],product[i]["varients"][i]["price"]["currency"]+"."+product[i]["varients"][i]["price"]["mrp"], product[i]["varients"][i]["offer"]["value"] + product[i]["varients"][i]["offer"]["type"] , product[i]["product_id"]);
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


