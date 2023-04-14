{/* <div class="leftside">
<div class="thumbmnailproducts">
    <img src="../../assets/images/product-images/product_thumbnail-1.jpg" alt="">
    <img src="../../assets/images/product-images/product_thumbnail-2.jpg" alt="">
    <img src="../../assets/images/product-images/product_thumbnail-3.jpg" alt="">
    <img src="../../assets/images/product-images/product_thumbnail-4.jpg" alt="">
</div>

<div class="product_image">
    <img src="../../assets/images/product_list-images/product_list-1.jpg" alt="">
    <p class="modelsize">Our model wears a size 32</p>
</div>
</div> */}

{/* <div class="rightside">
<div class="names">
    <h3 class="brand_name">DNMX</h3>
    <h4 class="product_name">Mid-Rise Skinny Fit Jeans</h4>
</div>

<div class="prices">
    <div class="price">rs.799</div>
    <div class="product_offer">MRP<del>rs.999</del><b>(20%OFF)</b></div>
    <div class="product_tax">
        <p>Price inclusive of all taxes</p>
    </div>
</div>


<div class="color">
    <p>black</p>
    <div class="choosecolor"></div>
</div>

<div class="size">
    <p>select size</p>
    <span class="size_no">28</span>
    <span class="size_no">30</span>
    <span class="size_no">32</span>
    <span class="size_no">34</span>
    <span class="size_no">36</span>
</div>

<div class="buttons">
    <div class="addtobag">
        <a href="../../../orders/shopping_bag.html"><button>ADD TO BAG</button></a>
    </div>

    <div class="wishlist">
        <a href="../../../orders/wishlist.html">
            <button> <i class="fa fa-heart-o"></i>SAVE TO WISHLIST</button>
        </a>
    </div>
</div>

<div class="product">
    <h3>Product Details</h3>
    <ul class="details">
        <li> 5-pocket styling</li>
        <li> Zip fly with button closure</li>
        <li> Machine wash</li>
        <li> Mid Rise</li>
        <li> Cotton Blend</li>
    </ul>
</div>

</div>  */}

///////object//////////

// const product =
// {
//     "image": [
//         {
//             "source": "../../assets/images/product-images/product_thumbnail-1.jpg",
//             "alt": ""
//         },

//         {
//             "source": "../../assets/images/product-images/product_thumbnail-2.jpg",
//             "alt": ""
//         },

//         {
//             "source": "../../assets/images/product-images/product_thumbnail-3.jpg",
//             "alt": ""
//         },

//         {
//             "source": "../../assets/images/product-images/product_thumbnail-4.jpg",
//             "alt": ""
//         }
//     ],


//     "brand": "dnmx",
//     "name": "Mid-Rise Skinny Fit Jeans",


//     "modelsize": 32,


//     "price": {
//         "currency": "rs",
//         "actual": 999,
//         "offer": {
//             "value": 20,
//             "type": "%"
//         }
//     },

//     "size": [
//         {
//             "sizenumber": 28,
//             "quantity": 1
//         },
//         {
//             "sizenumber": 30,
//             "quantity": 1
//         },
//         {
//             "sizenumber": 32,
//             "quantity": 1
//         },
//         {
//             "sizenumber": 34,
//             "quantity": 1
//         },
//         {
//             "sizenumber": 38,
//             "quantity": 1
//         },
//     ]
// }


let product = JSON.parse(localStorage.getItem("product_list"));

// searching values in url params
const params = new URLSearchParams(window.location.search);

const urlproduct_id = params.get("product_id");

function find_product(e) {
    return e.product_id == urlproduct_id;
};

let productdata = product.find(find_product);

////////////leftside////////////

// console.log(product);

// <div class="leftside"></div>
div_leftside = document.createElement("div");
div_leftside.setAttribute("class", "leftside");
document.querySelector("div.content").append(div_leftside);

//<div class="thumbnailproducts"></div>
div_thumbnailproducts = document.createElement("div");
div_thumbnailproducts.setAttribute("class", "thumbnailproducts");
div_leftside.append(div_thumbnailproducts);

// //<img src="../../assets/images/product-images/product_thumbnail-1.jpg" alt=""></img>

// for (let i = 0; i < productdata["source"].length; i++) {

//     thumbnail_img = document.createElement("img");
//     thumbnail_img.setAttribute("class", "thumbnail_image");
//     thumbnail_img.setAttribute("src", productdata["image"]["source"]);
//     div_thumbnailproducts.append(thumbnail_img);

// };


//<div class="product_image"></div>

div_product_image = document.createElement("div");
div_product_image.setAttribute("class", "product_image");
div_leftside.append(div_product_image);

//<img src="../../assets/images/homepage-images/mens fashion/men-jean-1.jpg" alt=""></img>

img_product_image = document.createElement("img");
img_product_image.setAttribute("id", "product_image");
img_product_image.setAttribute("src", productdata['image']["source"]);
img_product_image.setAttribute("alt", productdata['image']["alt"]);
div_product_image.append(img_product_image);

// console.log(img_product_image);

// <p class="modelsize">Our model wears a size 32</p>
p_modelsize = document.createElement("p");
p_modelsize.setAttribute("id", "modelsize");
p_modelsize.innerText = `Our model wears a size` + " " + 32;
div_product_image.append(p_modelsize);

////////////rightside//////////////

//<div class="rightside"></div>
div_rightside = document.createElement("div");
div_rightside.setAttribute("class", "rightside");
document.querySelector("div.content").append(div_rightside);

//<div class="names"></div>
div_names = document.createElement("div");
div_names.setAttribute("class", "names");
div_rightside.append(div_names);

// <h3 class="brand_name">DNMX</h3>
h3_brand_name = document.createElement("h3");
h3_brand_name.setAttribute("id", "brand_name");
h3_brand_name.innerText = productdata["brand"];
div_names.append(h3_brand_name);

//<h4 class="product_name">Mid-Rise Skinny Fit Jeans</h4>

h4_product_name = document.createElement("h3");
h4_product_name.setAttribute("id", "product_name");
h4_product_name.innerText = productdata["name"];
div_names.append(h4_product_name);

//<div class="prices"></div>

div_prices = document.createElement("div");
div_prices.setAttribute("class", "prices");
div_rightside.append(div_prices);

//<div class="current_price">rs.799</div>;
div_current_price = document.createElement("div");
div_current_price.setAttribute("class", "current_price");
div_current_price.innerText = productdata["price"]["currency"] + "." + productdata["price"]["current"];
div_prices.append(div_current_price);


//<div class="product_offer">MRP<del>rs.999</del><b>(20%OFF)</b></div>

div_product_offer = document.createElement("div");
div_product_offer.setAttribute("class", "product_offer");
div_prices.append(div_product_offer);

del_actual = document.createElement("del");
del_actual.innerText = productdata["price"]["currency"] + "." + productdata["price"]["mrp"];
div_product_offer.append(del_actual)

// `(${product["price"]["offer"]["value"]} ${product["price"]["offer"]["type"]} off)`
b_offer = document.createElement("b");
b_offer.innerText = productdata["price"]["offer"]["value"] + productdata["price"]["offer"]["type"] + "off"
div_product_offer.append(b_offer);


//<div class="product_tax"></div>
div_product_tax = document.createElement("div");
div_product_tax.setAttribute("class", "product_tax");
div_product_tax.innerText = "Price inclusive of all taxes";
div_prices.append(div_product_tax);


//<div class="color"></div>
div_color = document.createElement("div");
div_color.setAttribute("class", "color");
div_color.innerText = "color: " + productdata["color"];
div_rightside.append(div_color);

//<div class="choosecolor"></div>
// div_choosecolor = document.createElement("div");
// div_choosecolor.setAttribute("class", "choosecolor");
// div_color.append(div_choosecolor);
p_select_size = document.createElement("p");
p_select_size.innerText = "size";
div_rightside.append(p_select_size);

//<div class="size"></div>
div_size = document.createElement("div");
div_size.setAttribute("class", "size");
div_rightside.append(div_size);

{/* <p>select size</p> */ }



// ------------- single size  

// let find_size = size.find(e => e.id == productdata["size"]);

// div_size = document.createElement("div");
// div_size.setAttribute("class", "size");
// div_size.innerText = "size: "+find_size["value"];
// div_rightside.append(div_size);

// -------------------------- multiple size  

let productsize = productdata["size"];
const noOfItems = productsize.length;

// {/* <input type="radio" id="option1" name="radio-group" value="option1">
// <label for="option1">Option 1</label> */}
let localsize = JSON.parse(localStorage.getItem("size_list"))

let filter_avial_size = productsize.filter(e => e.availability == true)
console.log(filter_avial_size)

let filteredsize = [];
for (i = 0; i < 5; i++) {
    filteredsize.push(localsize.find(e => e.id == filter_avial_size[i]["id"]))
}

console.log(filteredsize)


for (j = 0; j < filteredsize.length; j++) {
    input_size_no = document.createElement("input");
    input_size_no.setAttribute("class", "size_no");
    input_size_no.setAttribute("id", `productsize${j}`)
    input_size_no.setAttribute("type", "radio");
    input_size_no.setAttribute("name", "rad");

    input_size_no.setAttribute("value", filteredsize[j]["id"]);
    div_size.append(input_size_no);

    label_size_no = document.createElement("label");
    label_size_no.setAttribute("for", `productsize${j}`)
    label_size_no.innerText = filteredsize[j]["value"];
    div_size.append(label_size_no);
}



// console.log(filter_avial_size)


div_qty = document.createElement("div");
div_qty.setAttribute("class", "divlbl");
div_rightside.append(div_qty);


// input_lbl = document.createElement("label");
// input_lbl.setAttribute("class", "inputlbl");
// input_lbl.innerText = "quantity: "
// div_qty.append(input_lbl);


// input_qty = document.createElement("input");
// input_qty.setAttribute("class", "inputquantity");
// input_qty.setAttribute("type", "number");
// input_qty.setAttribute("value", 1);
// input_qty.setAttribute("min", 1);
// div_qty.append(input_qty);


//<div class="buttons"></div>
div_buttons = document.createElement("div");
div_buttons.setAttribute("class", "buttons");
div_rightside.append(div_buttons);

// <div class="addtobag"></div>

//<button>ADD TO BAG</button>
button_bag = document.createElement("button");
button_bag.setAttribute("class", "addtobag");
button_bag.setAttribute("id", "bag");
button_bag.innerText = "ADD TO BAG";
div_buttons.append(button_bag);

console.log(button_bag);

//<button> wishlist </button>
button_wishlist = document.createElement("button");
button_wishlist.setAttribute("class", "wishlist");
button_wishlist.setAttribute("id", "wishlist");
button_wishlist.innerText = "wishlist";
div_buttons.append(button_wishlist);

//<div class="product"></div>
div_product = document.createElement("div");
div_product.setAttribute("class", "product");
div_rightside.append(div_product);

//<h3>Product Details</h3>
h3_Product = document.createElement("h3");
h3_Product.innerText = productdata["details"];
div_product.append(h3_Product);

ul_details = document.createElement("ul");
ul_details.setAttribute("class", "details");
div_product.append(ul_details);


button_bag.addEventListener("click", bag);

function bag() {

    let bag_id = crypto.randomUUID();
    let unique_id = JSON.parse(localStorage.getItem("unique_id"));
    const params = new URLSearchParams(window.location.search);

    const urlproduct_id = params.get("product_id");
    // let input_quantity = document.querySelector(".inputquantity").value;

    // console.log(input_quantity)

    // let input_size;
    // for (i = 0; i < 5; i++) {
    //     if (document.querySelector(`#productsize${i}:checked`)) {
    //         input_size = document.querySelector(`#productsize${i}:checked`).value;
    //     }
    // }


    let addtobag = JSON.parse(localStorage.getItem("bag")) || [];

    let exist = addtobag.some(
        e=>e.product_id == urlproduct_id 
    )

    if (unique_id == null || unique_id == undefined) {
        alert("please login to add products into bag")
        location.href = "/pages/homepage/login.html"
    }

    else if(exist){
        alert("product aldready added to cart")
    }


    if(unique_id == 0 || unique_id == undefined && !exist){
        addtobag.push(
            {
                "bag_id": bag_id,
                "user_id": unique_id,
                "product_id": urlproduct_id,
                "quantity": 1,
                "size": "xs"
            }
        );
        // ${input_size}
        location.href = `/pages/orders/shopping_bag.html?sizeid=1`

    }

    localStorage.setItem("bag", JSON.stringify(addtobag));


}

















