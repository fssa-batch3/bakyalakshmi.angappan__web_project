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
        "image": {
            "source": "../../../assets/images/homepage-images/deals for kids/tshirt-1.jpg",
            "alt": "boys round neck tshirt"
        },

        "brand": "h&m",
        "name": "boys round neck tshirt",

        "price": {

            "currency": "Rs",
            "current": 599,
            "actual": 999,

            "offer": {
                "value": 30,
                "type": "%"
            }
        },

        "ratings": 4.0,
        "buyers": 170
    },

    {
        "image": {
            "source": "../../../assets/images/homepage-images/deals for kids/boys-pants-2.jpg",
            "alt": "boys denim jeans"
        },

        "brand": "v-mart",
        "name": "boys denim jeans",

        "price": {

            "currency": "Rs",
            "current": 499,
            "actual": 999,

            "offer": {
                "value": 50,
                "type": "%"
            }
        },

        "ratings": 4.8,
        "buyers": 2100
    },

    {
        "image": {
            "source": "../../../assets/images/homepage-images/deals for kids/frock-2.jpg",
            "alt": "georgette a line dress"
        },

        "brand": "sangria",
        "name": "georgette a line dress",

        "price": {

            "currency": "Rs",
            "current": 299,
            "actual": 599,

            "offer": {
                "value": 50,
                "type": "%"
            }
        },

        "ratings": 3.5,
        "buyers": 100
    },

    {
        "image": {
            "source": "../../../assets/images/homepage-images/deals for kids/tshirt-3.jpg",
            "alt": "boys tshirt"
        },

        "brand": "max",
        "name": "boys tshirt",

        "price": {

            "currency": "Rs",
            "current": 299,
            "actual": 999,

            "offer": {
                "value": 70,
                "type": "%"
            }
        },

        "ratings": 4.3,
        "buyers": 1000
    },

]

for (let i = 0; i < product_list.length; i++) {

    // <div class="smallcontainer"></div>
    div_smallcontainer = document.createElement("div");
    div_smallcontainer.setAttribute("class", "smallcontainer");
    console.log(div_smallcontainer);
    document.querySelector("div.products").append(div_smallcontainer);


    // <a class="product_link" href="../products/product details/mens_product_details/product_details-men-jean1.html"></a>
    a_product_link = document.createElement("a");
    a_product_link.setAttribute("class", "product_link");
    a_product_link.setAttribute("href", "../../products/product details/mens_product_details/product_details-men-jean1.html");
    div_smallcontainer.append(a_product_link);


    //  <div class= "images"> <div>
    div_images = document.createElement("div");
    div_images.setAttribute("class", "images");
    a_product_link.append(div_images);

    // <img class="product_image" src="../../assets/images/homepage-images/mens fashion/men-jean-1.jpg" alt="mens jean" >
    img_product_image = document.createElement("img");
    img_product_image.setAttribute("class", "product_image");
    img_product_image.setAttribute("src", product_list[i]["image"]["source"]);
    img_product_image.setAttribute("alt", product_list[i]["image"]["alt"]);
    div_images.append(img_product_image);

    // <i class="wishlist" class="fa-solid fa-heart"></i>
    i_wishlist = document.createElement("i");
    i_wishlist.setAttribute("class", "wishlist fa-solid fa-heart");
    div_images.append(i_wishlist);

    // <div class="ratings"></div>
    div_ratings = document.createElement("div");
    div_ratings.setAttribute("class", "ratings");
    div_images.append(div_ratings);

    // <div class="ratings_count">4.4</div>
    div_ratings_count = document.createElement("div");
    div_ratings_count.setAttribute("class", "ratings_count");
    div_ratings_count.innerText = product_list[i]["ratings"];
    div_ratings.append(div_ratings_count);


    // <i class="star fa-solid fa-star"></i>
    i_star = document.createElement("i");
    i_star.setAttribute("class", "star fa-solid fa-star");
    div_ratings.append(i_star);



    // <p class="buyers_count">4.4</p>
    div_buyers_count = document.createElement("div");
    div_buyers_count.setAttribute("class", "buyers_count");
    div_buyers_count.innerText = product_list[i]["buyers"];
    div_ratings.append(div_buyers_count);


    // <div class ="names"> <div>
    div_names = document.createElement("div");
    div_names.setAttribute("class", "names");
    div_smallcontainer.append(div_names);

    //  <h3 class="brand_name">DNMX</h3>

    h3_brand_name = document.createElement("h3");
    h3_brand_name.setAttribute("class", "brand_name");
    h3_brand_name.innerText = product_list[i]["brand"];
    div_names.append(h3_brand_name);

    //  <h4 class="product_name">Mid-Rise Skinny Fit Jeans</h4>
    h4_product_name = document.createElement("h4");
    h4_product_name.setAttribute("class", "product_name");
    h4_product_name.innerText = product_list[i]["name"];
    div_names.append(h4_product_name);

    // <div class= "prices"> </div>
    div_prices = document.createElement("div");
    div_prices.setAttribute("class", "prices");
    div_smallcontainer.append(div_prices);
    //////price - current calculation

    let actual = product_list[i]["price"]["actual"];
    let value = product_list[i]["price"]["offer"]["value"];
    let type = product_list[i]["price"]["offer"]["type"];
    let current;

    if (type === "%") {
        current = actual - actual * value / 100;
        current = Math.round(current);
    }
    else {
        current = actual - value;

    }

    // <span class="product_price">rs.799</span>
    span_product_price = document.createElement("span");
    span_product_price.setAttribute("class", "current_price");
    span_product_price.innerText = product_list[i]["price"]["currency"] + "." + current;
    div_prices.append(span_product_price);


    // <span class="original_price"><del>rs.999</del></span>
    span_original_price = document.createElement("span");
    span_original_price.setAttribute("class", "actual_price");
    div_prices.append(span_original_price);

    del_original_price = document.createElement("del");
    del_original_price.innerText = product_list[i]["price"]["actual"];
    span_original_price.append(del_original_price);

    // <span class="product_offer">(30% off)</span>
    span_product_offer = document.createElement("span");
    span_product_offer.setAttribute("class", "product_offer");
    span_product_offer.innerText = "(" + product_list[i]["price"]["offer"]["value"] + product_list[i]["price"]["offer"]["type"] + "off" + ")";
    div_prices.append(span_product_offer);
}
