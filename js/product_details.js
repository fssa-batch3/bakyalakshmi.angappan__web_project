{/* <div class="leftside">
<div class="thumbmnailproducts">
    <img src="../../../../assets/images/product_details-images/product_thumbnail-1.jpg" alt="">
    <img src="../../../../assets/images/product_details-images/product_thumbnail-2.jpg" alt="">
    <img src="../../../../assets/images/product_details-images/product_thumbnail-3.jpg" alt="">
    <img src="../../../../assets/images/product_details-images/product_thumbnail-4.jpg" alt="">
</div>

<div class="product_image">
    <img src="../../../../assets/images/product_list-images/product_list-1.jpg" alt="">
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

<div class="product_details">
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

////////////leftside////////////

// <div class="leftside"></div>
div_leftside = document.createElement("div");
div_leftside.setAttribute("class", "leftside");
console.log(div_leftside);
document.querySelector("div.content").append(div_leftside);

//<div class="thumbmnailproducts"></div>
div_thumbmnailproducts = document.createElement("div");
div_thumbmnailproducts.setAttribute("class", "thumbmnailproducts");
div_leftside.append(div_thumbmnailproducts);

//<img src="../../../../assets/images/product_details-images/product_thumbnail-1.jpg" alt=""></img>
thumbnail_img = document.createElement("img");
thumbnail_img.setAttribute("class", "thumbnail_image_1");
thumbnail_img.setAttribute("src", "../../../../assets/images/product_details-images/product_thumbnail-1.jpg");
thumbnail_img.setAttribute("alt", "");
div_thumbmnailproducts.append(thumbnail_img);

thumbnail_img = document.createElement("img");
thumbnail_img.setAttribute("class", "thumbnail_image_2");
thumbnail_img.setAttribute("src", "../../../../assets/images/product_details-images/product_thumbnail-2.jpg");
thumbnail_img.setAttribute("alt", "");
div_thumbmnailproducts.append(thumbnail_img);

thumbnail_img = document.createElement("img");
thumbnail_img.setAttribute("class", "thumbnail_image_3");
thumbnail_img.setAttribute("src", "../../../../assets/images/product_details-images/product_thumbnail-3.jpg");
thumbnail_img.setAttribute("alt", "");
div_thumbmnailproducts.append(thumbnail_img);

thumbnail_img = document.createElement("img");
thumbnail_img.setAttribute("class", "thumbnail_image_4");
thumbnail_img.setAttribute("src", "../../../../assets/images/product_details-images/product_thumbnail-4.jpg");
thumbnail_img.setAttribute("alt", "");
div_thumbmnailproducts.append(thumbnail_img);

//<div class="product_image"></div>
div_product_image = document.createElement("div");
div_product_image.setAttribute("class", "product_image");
div_leftside.append(div_product_image);

//<img src="../../../../assets/images/homepage-images/mens fashion/men-jean-1.jpg" alt=""></img>

img_product_image = document.createElement("img");
img_product_image.setAttribute("src", "../../../../assets/images/homepage-images/mens fashion/men-jean-1.jpg");
img_product_image.setAttribute("alt", "");
div_product_image.append(img_product_image);

// <p class="modelsize">Our model wears a size 32</p>
p_modelsize = document.createElement("p");
p_modelsize.setAttribute("class", "modelsize");
p_modelsize.innerText = `Our model wears a size 32`;
div_product_image.append(p_modelsize);

////////////rightside//////////////

//<div class="rightside"></div>
div_rightside = document.createElement("div");
div_rightside.setAttribute("class", "rightside");
console.log(div_rightside);
document.querySelector("div.content").append(div_rightside);

//<div class="names"></div>
div_names = document.createElement("div");
div_names.setAttribute("class", "names");
div_rightside.append(div_names);

// <h3 class="brand_name">DNMX</h3>
h3_brand_name = document.createElement("h3");
h3_brand_name.setAttribute("class", "brand_name");
h3_brand_name.innerText = "DNMX";
div_names.append(h3_brand_name);


//<h4 class="product_name">Mid-Rise Skinny Fit Jeans</h4>

h4_product_name = document.createElement("h3");
h4_product_name.setAttribute("class", "product_name");
h4_product_name.innerText = "Mid-Rise Skinny Fit Jeans";
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

//<p>Price inclusive of all taxes</p>

//<div class="product_offer">MRP<del>rs.999</del><b>(20%OFF)</b></div>

// div_product_offer = document.createElement("div");
// div_product_offer.setAttribute("class", "product_offer");
// div_prices.append(div_product_offer);


//<div class="product_tax"></div>
div_product_tax = document.createElement("div");
div_product_tax.setAttribute("class", "product_tax");
div_product_tax.innerText = "Price inclusive of all taxes";
div_prices.append(div_product_tax);

//<p>Price inclusive of all taxes</p>
// p_product_tax = document.createElement("p");
// p_product_tax.setAttribute("class", "product_tax");

// div_prices.append(p_product_tax);

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

//  <span class="size_no">28</span>
span_size_no = document.createElement("span");
span_size_no.setAttribute("class", "size_no");
span_size_no.innerText = 28;
div_size.append(span_size_no);

span_size_no = document.createElement("span");
span_size_no.setAttribute("class", "size_no");
span_size_no.innerText = 28;
div_size.append(span_size_no);

span_size_no = document.createElement("span");
span_size_no.setAttribute("class", "size_no");
span_size_no.innerText = 28;
div_size.append(span_size_no);

span_size_no = document.createElement("span");
span_size_no.setAttribute("class", "size_no");
span_size_no.innerText = 28;
div_size.append(span_size_no);

span_size_no = document.createElement("span");
span_size_no.setAttribute("class", "size_no");
span_size_no.innerText = 28;
div_size.append(span_size_no);

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

//<div class="product_details"></div>
div_product_details = document.createElement("div");
div_product_details.setAttribute("class", "product_details");
div_rightside.append(div_product_details);

//<h3>Product Details</h3>
h3_Product_Details = document.createElement("h3");
h3_Product_Details.innerText = "Product Details";
div_product_details.append(h3_Product_Details);

ul_details = document.createElement("ul");
ul_details.setAttribute("class", "details");
div_product_details.append(ul_details);

li = document.createElement("li");
li.innerText = " 5-pocket styling";
ul_details.append(li);

li = document.createElement("li");
li.innerText = " 5-pocket styling";
ul_details.append(li);

li = document.createElement("li");
li.innerText = " 5-pocket styling";
ul_details.append(li);

li = document.createElement("li");
li.innerText = " 5-pocket styling";
ul_details.append(li);

li = document.createElement("li");
li.innerText = " 5-pocket styling";
ul_details.append(li);













