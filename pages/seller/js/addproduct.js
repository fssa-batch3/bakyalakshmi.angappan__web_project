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
        "gender": gendercategory,
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
        "buyers": 100
    });

    localStorage.setItem('product_list', JSON.stringify(product_list));


    location.href = "./inventory.html"

};

let gender_category_list = []

gender_category_list.push(
    {
        "gender": "men",
        "category": [
            {
                "name": "t_shirt"
            }
        ]
    },
    {
        "gender": "women",
        "category": [
            {
                "name": "t_shirt"
            }
        ]
    },
    {
        "gender": "kids",
        "category": [
            {
                "name": "t_shirt"
            }
        ]
    }
);
localStorage.setItem('gender_category_list', JSON.stringify(gender_category_list));









