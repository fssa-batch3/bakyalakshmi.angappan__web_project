
const form = document.getElementById("form");
form.addEventListener("submit", save);

let uuid = JSON.parse(localStorage.getItem("product_uuid"));
let product = JSON.parse(localStorage.getItem("product_list")) || [];

function find_product(e) {
    return e.product_id == uuid;
}

let product_data = product.find(find_product);

document.getElementById("inputsource").value = product_data["source"];
document.getElementById("inputcategory").value = product_data["category"];
document.getElementById("inputbrand").value = product_data["brand"];

document.getElementById("inputname").value = product_data["name"];
document.getElementById("inputcolor").value = product_data["color"];
document.getElementById("inputsize").value = product_data["size"];
document.getElementById("inputcurrency").value = product_data["currency"];

document.getElementById("inputmrp").value = product_data["mrp"];
document.getElementById("inputdetails").value = product_data["details"];

function save(e) {
    e.preventDefault();

    product_data["source"] = document.getElementById("inputsource").value
    product_data["category"] = document.getElementById("inputcategory").value
    product_data["brand"] = document.getElementById("inputbrand").value
    product_data["name"] = document.getElementById("inputname").value
    product_data["color"] = document.getElementById("inputcolor").value
    product_data["size"] = document.getElementById("inputsize").value
    product_data["currency"] = document.getElementById("inputcurrency").value

    product_data["mrp"] = document.getElementById("inputmrp").value;
    product_data["details"] = document.getElementById("inputdetails").value



    localStorage.setItem("product_list", JSON.stringify(product));

    location.href = "./inventory.html"
}