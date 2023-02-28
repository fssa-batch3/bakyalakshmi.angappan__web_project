const form = document.getElementById("form");
form.addEventListener("submit", upload);



//product_list.foreach(createProduct);

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

    //local-storage
    let product_list = JSON.parse(localStorage.getItem('product_list')) || [];

    product_list.push({ source, category, brand, name, color, size, currency, mrp, value, type, details, product_id });

    localStorage.setItem('product_list', JSON.stringify(product_list));


    location.href = "./inventory.html"

};









