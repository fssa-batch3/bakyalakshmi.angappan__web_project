{/* <div class="smallcontainer">
    <a class="product_link" href="../products/product details/mens_product_details/product_details-men-jean1.html">

    <div class= "images">
        <img class="product_image" src="../../assets/images/homepage-images/mens fashion/men-jean-1.jpg"
            alt="mens jean">
        <i class="wishlist" class="fa-solid fa-heart"></i>
    </div>

    <div class ="names">
        <h3 class="brand_name">DNMX</h3>
        <h4 class="product_name">Mid-Rise Skinny Fit Jeans</h4>
    </div>

    <div class="ratings">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa fa-star-half-full"></i>
        <i class="fa fa-star-o"></i>
    </div>

    <div class= "prices">
        <span class="product_price">rs.799</span>
        <span class="original_price"><del>rs.999</del></span>
        <span class="product_offer">(30% off)</span>
    </div>
</a>

</div> */}


let div_smallcontainer;
let a_product_link;
let div_images;
let img_product_image;
let i_wishlist;
let div_names;
let h3_brand_name;
let h4_product_name;
let div_ratings;
let i_star;
let div_prices;
let span_product_price;
let span_original_price;
let del_original_price;
let span_product_offer;

let product_list = [

    {
        "product_image": "../../assets/images/homepage-images/mens fashion/men-jean-1.jpg",
        "brand_name": "DNMX",
        "product_name": "Mid-Rise Skinny Fit Jeans",
        "product_price": "Rs.799",
        "original_price": "rs.999",
        "product_offer": "(30% off)"
    },

    {
        "product_image": "../../assets/images/homepage-images/mens fashion/men-jean-2.jpg",
        "brand_name": "DNMX",
        "product_name": "Mid-Rise Skinny Fit Jeans",
        "product_price": "Rs.799",
        "original_price": "rs.999",
        "product_offer": "(30% off)"
    },

    {
        "product_image": "../../assets/images/homepage-images/mens fashion/men-jean-3.jpg",
        "brand_name": "DNMX",
        "product_name": "Mid-Rise Skinny Fit Jeans",
        "product_price": "Rs.799",
        "original_price": "rs.999",
        "product_offer": "(30% off)"
    },

    {
        "product_image": "../../assets/images/homepage-images/mens fashion/men-jean-4.jpg",
        "brand_name": "DNMX",
        "product_name": "Mid-Rise Skinny Fit Jeans",
        "product_price": "Rs.799",
        "original_price": "rs.999",
        "product_offer": "(30% off)"
    },

    {
        "product_image": "../../assets/images/homepage-images/mens fashion/men-jean-5.jpg",
        "brand_name": "DNMX",
        "product_name": "Mid-Rise Skinny Fit Jeans",
        "product_price": "Rs.799",
        "original_price": "rs.999",
        "product_offer": "(30% off)"
    },

    {
        "product_image": "../../assets/images/homepage-images/mens fashion/men-jean-6.jpg",
        "brand_name": "DNMX",
        "product_name": "Mid-Rise Skinny Fit Jeans",
        "product_price": "Rs.799",
        "original_price": "rs.999",
        "product_offer": "(30% off)"
    },

    {
        "product_image": "../../assets/images/homepage-images/mens fashion/men-jean-7.jpg",
        "brand_name": "DNMX",
        "product_name": "Mid-Rise Skinny Fit Jeans",
        "product_price": "Rs.799",
        "original_price": "rs.999",
        "product_offer": "(30% off)"
    },

    {
        "product_image": "../../assets/images/homepage-images/mens fashion/men-jean-8.jpg",
        "brand_name": "DNMX",
        "product_name": "Mid-Rise Skinny Fit Jeans",
        "product_price": "Rs.799",
        "original_price": "rs.999",
        "product_offer": "(30% off)"
    },


    {
        "product_image": "../../assets/images/homepage-images/mens fashion/men-jean-9.jpg",
        "brand_name": "DNMX",
        "product_name": "Mid-Rise Skinny Fit Jeans",
        "product_price": "Rs.799",
        "original_price": "rs.999",
        "product_offer": "(30% off)"
    },

    {
        "product_image": "../../assets/images/homepage-images/mens fashion/men-jean-10.jpg",
        "brand_name": "DNMX",
        "product_name": "Mid-Rise Skinny Fit Jeans",
        "product_price": "Rs.799",
        "original_price": "rs.999",
        "product_offer": "(30% off)"
    },

    {
        "product_image": "../../assets/images/homepage-images/mens fashion/men-jean-11.jpg",
        "brand_name": "DNMX",
        "product_name": "Mid-Rise Skinny Fit Jeans",
        "product_price": "Rs.799",
        "original_price": "rs.999",
        "product_offer": "(30% off)"
    },

    {
        "product_image": "../../assets/images/homepage-images/mens fashion/men-jean-12.jpg",
        "brand_name": "DNMX",
        "product_name": "Mid-Rise Skinny Fit Jeans",
        "product_price": "Rs.799",
        "original_price": "rs.999",
        "product_offer": "(30% off)"
    },

    {
        "product_image": "../../assets/images/homepage-images/mens fashion/men-jean-13.jpg",
        "brand_name": "DNMX",
        "product_name": "Mid-Rise Skinny Fit Jeans",
        "product_price": "Rs.799",
        "original_price": "rs.999",
        "product_offer": "(30% off)"
    },

    {
        "product_image": "../../assets/images/homepage-images/mens fashion/men-jean-14.jpg",
        "brand_name": "DNMX",
        "product_name": "Mid-Rise Skinny Fit Jeans",
        "product_price": "Rs.799",
        "original_price": "rs.999",
        "product_offer": "(30% off)"
    },

    {
        "product_image": "../../assets/images/homepage-images/mens fashion/men-jean-15.jpg",
        "brand_name": "DNMX",
        "product_name": "Mid-Rise Skinny Fit Jeans",
        "product_price": "Rs.799",
        "original_price": "rs.999",
        "product_offer": "(30% off)"
    },

    {
        "product_image": "../../assets/images/homepage-images/mens fashion/men-jean-16.jpg",
        "brand_name": "DNMX",
        "product_name": "Mid-Rise Skinny Fit Jeans",
        "product_price": "Rs.799",
        "original_price": "rs.999",
        "product_offer": "(30% off)"
    },


]

for (let i = 0; i < 16; i++) {

    // <div class="smallcontainer"></div>
    div_smallcontainer = document.createElement("div");
    div_smallcontainer.setAttribute("class", "smallcontainer");
    console.log(div_smallcontainer);
    document.querySelector("div.products").append(div_smallcontainer);


    // <a class="product_link" href="../products/product details/mens_product_details/product_details-men-jean1.html"></a>
    a_product_link = document.createElement("a");
    a_product_link.setAttribute("class", "product_link");
    a_product_link.setAttribute("href", "../products/product details/mens_product_details/product_details-men-jean1.html");
    div_smallcontainer.append(a_product_link);



    //  <div class= "images"> <div>
    div_images = document.createElement("div");
    div_images.setAttribute("class", "images");
    div_smallcontainer.append(div_images);

    // <img class="product_image" src="../../assets/images/homepage-images/mens fashion/men-jean-1.jpg" alt="mens jean" >
    img_product_image = document.createElement("img");
    img_product_image.setAttribute("class", "product_image");
    img_product_image.setAttribute("src", product_list[i]["product_image"]);
    img_product_image.setAttribute("alt", "mens jean");
    div_images.append(img_product_image);

    // <i class="wishlist" class="fa-solid fa-heart"></i>
    i_wishlist = document.createElement("i");
    i_wishlist.setAttribute("class", "wishlist");
    div_images.append(i_wishlist);

    // <div class ="names"> <div>
    div_names = document.createElement("div");
    div_names.setAttribute("class", "names");
    div_smallcontainer.append(div_names);

    //  <h3 class="brand_name">DNMX</h3>

    h3_brand_name = document.createElement("h3");
    h3_brand_name.setAttribute("class", "brand_name");
    h3_brand_name.innerText = product_list[i]["brand_name"];
    div_names.append(h3_brand_name);

    //  <h4 class="product_name">Mid-Rise Skinny Fit Jeans</h4>
    h4_product_name = document.createElement("h4");
    h4_product_name.setAttribute("class", "product_name");
    h4_product_name.innerText = product_list[i]["product_name"];
    div_names.append(h4_product_name);

    // <div class="ratings"> </div>
    div_ratings = document.createElement("div");
    div_ratings.setAttribute("class", "ratings");
    div_smallcontainer.append(div_ratings);

    // <i class="fa-solid fa-star"></i>
    i_star = document.createElement("i");
    i_star.setAttribute("class", "fa-solid fa-star");
    i_star.setAttribute("class", "fa-solid fa-star");
    i_star.setAttribute("class", "fa-solid fa-star");
    i_star.setAttribute("class", "fa-solid fa-star");
    i_star.setAttribute("class", "fa-solid fa-star");
    div_ratings.append(i_star);


    // <div class= "prices"> </div>
    div_prices = document.createElement("div");
    div_prices.setAttribute("class", "prices");
    div_smallcontainer.append(div_prices);

    // <span class="product_price">rs.799</span>

    span_product_price = document.createElement("span");
    span_product_price.setAttribute("class", "product_price");
    span_product_price.innerText = product_list[i]["product_price"];
    div_prices.append(span_product_price);


    // <span class="original_price"><del>rs.999</del></span>
    span_original_price = document.createElement("span");
    span_original_price.setAttribute("class", "original_price");
    div_prices.append(span_original_price);

    del_original_price = document.createElement("del");
    del_original_price.innerText = product_list[i]["original_price"];
    span_original_price.append(del_original_price);

    // <span class="product_offer">(30% off)</span>
    span_product_offer = document.createElement("span");
    span_product_offer.setAttribute("class", "product_offer");
    span_product_offer.innerText = product_list[i]["product_offer"];
    div_prices.append(span_product_offer);
}



// document.querySelector("div.products").append(div_smallcontainer);

