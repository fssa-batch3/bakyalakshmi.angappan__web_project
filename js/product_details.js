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

////////////leftside////////////

let product = JSON.parse(localStorage.getItem("product_list"));
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

// for (let i = 0; i < product["source"].length; i++) {

//     thumbnail_img = document.createElement("img");
//     thumbnail_img.setAttribute("class", "thumbnail_image");
//     thumbnail_img.setAttribute("src", product["source"]);
//     div_thumbnailproducts.append(thumbnail_img);

// };


//<div class="product_image"></div>

div_product_image = document.createElement("div");
div_product_image.setAttribute("class", "product_image");
div_leftside.append(div_product_image);

//<img src="../../assets/images/homepage-images/mens fashion/men-jean-1.jpg" alt=""></img>

img_product_image = document.createElement("img");
img_product_image.setAttribute("id", "product_image");
img_product_image.setAttribute("src", product["source"]);
img_product_image.setAttribute("alt", product["alt"]);
div_product_image.append(img_product_image);

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
h3_brand_name.innerText = product["brand"];
div_names.append(h3_brand_name);

//<h4 class="product_name">Mid-Rise Skinny Fit Jeans</h4>

h4_product_name = document.createElement("h3");
h4_product_name.setAttribute("id", "product_name");
h4_product_name.innerText = product["name"];
div_names.append(h4_product_name);

//<div class="prices"></div>

div_prices = document.createElement("div");
div_prices.setAttribute("class", "prices");
div_rightside.append(div_prices);

//<div class="current_price">rs.799</div>;
div_current_price = document.createElement("div");
div_current_price.setAttribute("class", "current_price");
div_current_price.innerText = "Rs.799";
div_prices.append(div_current_price);


//<div class="product_offer">MRP<del>rs.999</del><b>(20%OFF)</b></div>

div_product_offer = document.createElement("div");
div_product_offer.setAttribute("class", "product_offer");
div_prices.append(div_product_offer);

del_actual = document.createElement("del");
del_actual.innerText = product["currency"] + "." + product["mrp"];
div_product_offer.append(del_actual)

// `(${product["price"]["offer"]["value"]} ${product["price"]["offer"]["type"]} off)`
b_offer = document.createElement("b");
b_offer.innerText = 12
div_product_offer.append(b_offer);


//<div class="product_tax"></div>
div_product_tax = document.createElement("div");
div_product_tax.setAttribute("class", "product_tax");
div_product_tax.innerText = "Price inclusive of all taxes";
div_prices.append(div_product_tax);


//<div class="color"></div>
div_color = document.createElement("div");
div_color.setAttribute("class", "color");
div_color.innerText = "black";
div_rightside.append(div_color);

//<div class="choosecolor"></div>
div_choosecolor = document.createElement("div");
div_choosecolor.setAttribute("class", "choosecolor");
div_color.append(div_choosecolor);

//<div class="size"></div>
div_size = document.createElement("div");
div_size.setAttribute("class", "size");
div_rightside.append(div_size);

// <p>select size</p>
p_select_size = document.createElement("p");
p_select_size.innerText = "selectsize";
div_size.append(p_select_size);


// const size = product["size"];
// const noOfItems = size.length;

// //  <span class="size_no">28</span>

// for (let k = 0; k < noOfItems; k++) {

//     span_size_no = document.createElement("span");
//     span_size_no.setAttribute("class", "size_no");
//     console.log(size)
//     span_size_no.innerText = size[k]["sizenumber"];
//     div_size.append(span_size_no);

// }

//<div class="buttons"></div>
div_buttons = document.createElement("div");
div_buttons.setAttribute("class", "buttons");
div_rightside.append(div_buttons);

// <div class="addtobag"></div>

//<button>ADD TO BAG</button>
button_bag = document.createElement("button");
button_bag.setAttribute("class", "addtobag");
button_bag.innerText = "ADD TO BAG";
div_buttons.append(button_bag);

//<button> wishlist </button>
button_wishlist = document.createElement("button");
button_wishlist.setAttribute("class", "wishlist");
button_wishlist.innerText = "wishlist";
div_buttons.append(button_wishlist);

//<div class="product"></div>
div_product = document.createElement("div");
div_product.setAttribute("class", "product");
div_rightside.append(div_product);

//<h3>Product Details</h3>
h3_Product = document.createElement("h3");
h3_Product.innerText = "Product Details";
div_product.append(h3_Product);

ul_details = document.createElement("ul");
ul_details.setAttribute("class", "details");
div_product.append(ul_details);


// searching values in url params
const params = new URLSearchParams(window.location.search);

const urlproduct_id = params.get("product_id");

function find_product(e) {
    return e.product_id == urlproduct_id;
};

let product_data = product.find(find_product);
// console.log(product_data);

document.querySelector("#brand_name").innerText = product_data["brand"];
document.querySelector("#product_name").innerText = product_data["name"];













