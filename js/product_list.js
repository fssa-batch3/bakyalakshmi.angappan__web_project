
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

// let generalCategoryList = {
//     "gender": {
//         "name": "men",
//         "id": 0,
//         "category": [
//             {
//                 "name": "T-shirts",
//                 "id": 0
//             },
//             {
//                 "name": "shirts",
//                 "id": 1
//             },

//             {
//                 "name": "jean",
//                 "id": 2
//             },

//             {
//                 "name": "trousers",
//                 "id": 3
//             },

//             {
//                 "name": "shorts",
//                 "id": 4
//             },
//         ]
//     },

//     "gender": {
//         "name": "women",
//         "id": 0,
//         "category": [
//             {
//                 "name": "t-shirts",
//                 "id": 0
//             },
//             {
//                 "name": "shirts",
//                 "id": 1
//             },
//             {
//                 "name": "jean",
//                 "id": 2
//             },

//             {
//                 "name": "pallazoes",
//                 "id": 3
//             },

//             {
//                 "name": "skirts",
//                 "id": 4
//             },
//         ]
//     },


//     "gender": {
//         "name": "kid",
//         "id": 0,
//         "category": [
//             {
//                 "name": "boys",
//                 "id": 0
//             },
//             {
//                 "name": "girls",
//                 "id": 1
//             }
//         ]
//     }

// }


// let product = [

//     //mens 

//     //shirt
//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/mens-shirt-1.jpg",
//             "alt": "slim fit casual shirt"
//         },

//         "brand": "highlander",
//         "name": "slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 299,
//                 "type": "rs"
//             }
//         },

//         "ratings": 4.0,
//         "buyers": 170,
//         "gender": 0,
//         "category": 0,
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/mens-shirt-2.jpg",
//             "alt": "slim fit casual shirt"
//         },

//         "brand": "here&now",
//         "name": "men slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 50,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.8,
//         "buyers": 2100,
//         "category": 0
//     },

//     // {
//     //     "image": {
//     //         "source": "../../assets/images/homepage-images/mens fashion/t-shirt-1.jpg",
//     //         "alt": "men typograpy printed t-shirt"
//     //     },

//     //     "brand": "here&now",
//     //     "name": "men typograpy printed t-shirt",

//     //     "price": {

//     //         "currency": "Rs",
//     //         "actual": 599,

//     //         "offer": {
//     //             "value": 50,
//     //             "type": "%"
//     //         }
//     //     },

//     //     "ratings": 3.5,
//     //     "buyers": 100,
//     //     "category": 0
//     // },

//     // {
//     //     "image": {
//     //         "source": "../../assets/images/homepage-images/mens fashion/men-jean-1.jpg",
//     //         "alt": "Mid-Rise Skinny Fit Jeans"
//     //     },

//     //     "brand": "DNMX",
//     //     "name": "Mid-Rise Skinny Fit Jeans",

//     //     "price": {

//     //         "currency": "Rs",
//     //         "actual": 999,

//     //         "offer": {
//     //             "value": 20,
//     //             "type": "%"
//     //         }
//     //     },

//     //     "ratings": 3.2,
//     //     "buyers": 200,
//     //     "category": 0
//     // },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/mens-shirt-3.jpg",
//             "alt": "slim fit casual shirt"
//         },

//         "brand": "highlander",
//         "name": "slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 299,
//                 "type": "rs"
//             }
//         },

//         "ratings": 4.0,
//         "buyers": 170,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/mens-shirt-4.jpg",
//             "alt": "slim fit casual shirt"
//         },

//         "brand": "here&now",
//         "name": "men slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 50,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.8,
//         "buyers": 2100,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/mens-shirt-5.jpg",
//             "alt": "slim fit casual shirt"
//         },

//         "brand": "highlander",
//         "name": "slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 299,
//                 "type": "rs"
//             }
//         },

//         "ratings": 4.0,
//         "buyers": 170,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/mens-shirt-6.jpg",
//             "alt": "slim fit casual shirt"
//         },

//         "brand": "here&now",
//         "name": "men slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 50,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.8,
//         "buyers": 2100,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/mens-shirt-7.jpg",
//             "alt": "slim fit casual shirt"
//         },

//         "brand": "highlander",
//         "name": "slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 299,
//                 "type": "rs"
//             }
//         },

//         "ratings": 4.0,
//         "buyers": 170,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/mens-shirt-8.jpg",
//             "alt": "slim fit casual shirt"
//         },

//         "brand": "here&now",
//         "name": "men slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 50,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.8,
//         "buyers": 2100,
//         "category": 0
//     },

//     //t-shirt


//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/t-shirt-1.jpg",
//             "alt": "slim fit casual shirt"
//         },

//         "brand": "here&now",
//         "name": "men slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 50,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.8,
//         "buyers": 2100,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/t-shirt-2.jpg",
//             "alt": "slim fit casual shirt"
//         },

//         "brand": "here&now",
//         "name": "men slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 50,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.8,
//         "buyers": 2100,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/t-shirt-3.jpg",
//             "alt": "slim fit casual shirt"
//         },

//         "brand": "here&now",
//         "name": "men slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 50,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.8,
//         "buyers": 2100,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/t-shirt-4.jpg",
//             "alt": "slim fit casual shirt"
//         },

//         "brand": "here&now",
//         "name": "men slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 50,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.8,
//         "buyers": 2100,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/t-shirt-5.jpg",
//             "alt": "slim fit casual shirt"
//         },

//         "brand": "here&now",
//         "name": "men slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 50,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.8,
//         "buyers": 2100,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/t-shirt-6.jpg",
//             "alt": "slim fit casual shirt"
//         },

//         "brand": "here&now",
//         "name": "men slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 50,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.8,
//         "buyers": 2100,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/t-shirt-7.jpg",
//             "alt": "slim fit casual shirt"
//         },

//         "brand": "here&now",
//         "name": "men slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 50,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.8,
//         "buyers": 2100,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/t-shirt-8.jpg",
//             "alt": "slim fit casual shirt"
//         },

//         "brand": "here&now",
//         "name": "men slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 50,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.8,
//         "buyers": 2100,
//         "category": 0
//     },

//     //jean

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/men-jean-1.jpg",
//             "alt": "Mid-Rise Skinny Fit Jeans"
//         },

//         "brand": "DNMX",
//         "name": "Mid-Rise Skinny Fit Jeans",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 20,
//                 "type": "%"
//             }
//         },

//         "ratings": 3.2,
//         "buyers": 200,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/men-jean-2.jpg",
//             "alt": "Mid-Rise Skinny Fit Jeans"
//         },

//         "brand": "DNMX",
//         "name": "Mid-Rise Skinny Fit Jeans",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 20,
//                 "type": "%"
//             }
//         },

//         "ratings": 3.2,
//         "buyers": 200,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/men-jean-3.jpg",
//             "alt": "Mid-Rise Skinny Fit Jeans"
//         },

//         "brand": "DNMX",
//         "name": "Mid-Rise Skinny Fit Jeans",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 20,
//                 "type": "%"
//             }
//         },

//         "ratings": 3.2,
//         "buyers": 200,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/men-jean-4.jpg",
//             "alt": "Mid-Rise Skinny Fit Jeans"
//         },

//         "brand": "DNMX",
//         "name": "Mid-Rise Skinny Fit Jeans",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 20,
//                 "type": "%"
//             }
//         },

//         "ratings": 3.2,
//         "buyers": 200,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/men-jean-5.jpg",
//             "alt": "Mid-Rise Skinny Fit Jeans"
//         },

//         "brand": "DNMX",
//         "name": "Mid-Rise Skinny Fit Jeans",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 20,
//                 "type": "%"
//             }
//         },

//         "ratings": 3.2,
//         "buyers": 200,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/men-jean-6.jpg",
//             "alt": "Mid-Rise Skinny Fit Jeans"
//         },

//         "brand": "DNMX",
//         "name": "Mid-Rise Skinny Fit Jeans",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 20,
//                 "type": "%"
//             }
//         },

//         "ratings": 3.2,
//         "buyers": 200,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/men-jean-7.jpg",
//             "alt": "Mid-Rise Skinny Fit Jeans"
//         },

//         "brand": "DNMX",
//         "name": "Mid-Rise Skinny Fit Jeans",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 20,
//                 "type": "%"
//             }
//         },

//         "ratings": 3.2,
//         "buyers": 200,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/men-jean-8.jpg",
//             "alt": "Mid-Rise Skinny Fit Jeans"
//         },

//         "brand": "DNMX",
//         "name": "Mid-Rise Skinny Fit Jeans",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 20,
//                 "type": "%"
//             }
//         },

//         "ratings": 3.2,
//         "buyers": 200,
//         "category": 0
//     },
//     //trousers
//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/men-trousers-1.jpg",
//             "alt": "Mid-Rise Skinny Fit Jeans"
//         },

//         "brand": "DNMX",
//         "name": "Mid-Rise Skinny Fit Jeans",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 20,
//                 "type": "%"
//             }
//         },

//         "ratings": 3.2,
//         "buyers": 200,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/men-trousers-2.jpg",
//             "alt": "Mid-Rise Skinny Fit Jeans"
//         },

//         "brand": "DNMX",
//         "name": "Mid-Rise Skinny Fit Jeans",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 20,
//                 "type": "%"
//             }
//         },

//         "ratings": 3.2,
//         "buyers": 200,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/men-trousers-3.jpg",
//             "alt": "Mid-Rise Skinny Fit Jeans"
//         },

//         "brand": "DNMX",
//         "name": "Mid-Rise Skinny Fit Jeans",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 20,
//                 "type": "%"
//             }
//         },

//         "ratings": 3.2,
//         "buyers": 200,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/men-trousers-4.jpg",
//             "alt": "Mid-Rise Skinny Fit Jeans"
//         },

//         "brand": "DNMX",
//         "name": "Mid-Rise Skinny Fit Jeans",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 20,
//                 "type": "%"
//             }
//         },

//         "ratings": 3.2,
//         "buyers": 200,
//         "category": 0
//     },
//     //shorts

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/men-shorts-1.jpg",
//             "alt": "Mid-Rise Skinny Fit Jeans"
//         },

//         "brand": "DNMX",
//         "name": "Mid-Rise Skinny Fit Jeans",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 20,
//                 "type": "%"
//             }
//         },

//         "ratings": 3.2,
//         "buyers": 200,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/men-shorts-2.jpg",
//             "alt": "Mid-Rise Skinny Fit Jeans"
//         },

//         "brand": "DNMX",
//         "name": "Mid-Rise Skinny Fit Jeans",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 20,
//                 "type": "%"
//             }
//         },

//         "ratings": 3.2,
//         "buyers": 200,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/men-shorts-3.jpg",
//             "alt": "Mid-Rise Skinny Fit Jeans"
//         },

//         "brand": "DNMX",
//         "name": "Mid-Rise Skinny Fit Jeans",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 20,
//                 "type": "%"
//             }
//         },

//         "ratings": 3.2,
//         "buyers": 200,
//         "category": 0
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/mens fashion/men-shorts-4.jpg",
//             "alt": "Mid-Rise Skinny Fit Jeans"
//         },

//         "brand": "DNMX",
//         "name": "Mid-Rise Skinny Fit Jeans",

//         "price": {

//             "currency": "Rs",
//             "actual": 999,

//             "offer": {
//                 "value": 20,
//                 "type": "%"
//             }
//         },

//         "ratings": 3.2,
//         "buyers": 200,
//         "category": 0
//     },


//     //womens

//     //shirts
//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/womens fashion/shirt-1.jpg",
//             "alt": "checked collar shirt"
//         },

//         "brand": "roadster",
//         "name": "slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "current": 599,
//             "actual": 999,

//             "offer": {
//                 "value": 30,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.0,
//         "buyers": 170
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/womens fashion/shirt-2.jpg",
//             "alt": "checked collar shirt"
//         },

//         "brand": "roadster",
//         "name": "slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "current": 599,
//             "actual": 999,

//             "offer": {
//                 "value": 30,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.0,
//         "buyers": 170
//     },


//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/womens fashion/shirt-3.jpg",
//             "alt": "checked collar shirt"
//         },

//         "brand": "roadster",
//         "name": "slim fit casual shirt",

//         "price": {

//             "currency": "Rs",
//             "current": 599,
//             "actual": 999,

//             "offer": {
//                 "value": 30,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.0,
//         "buyers": 170
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/womens fashion/shirt-4.jpg",
//             "alt": "checked casual collar shirt"
//         },

//         "brand": "her by invi",
//         "name": "checked casual collar shirt",

//         "price": {

//             "currency": "Rs",
//             "current": 499,
//             "actual": 999,

//             "offer": {
//                 "value": 50,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.8,
//         "buyers": 2100
//     },

//     //t-shirts

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/womens fashion/skirts-1.jpg",
//             "alt": "women flared skirt"
//         },

//         "brand": "sassafras",
//         "name": "women flared skirt",

//         "price": {

//             "currency": "Rs",
//             "current": 299,
//             "actual": 599,

//             "offer": {
//                 "value": 50,
//                 "type": "%"
//             }
//         },

//         "ratings": 3.5,
//         "buyers": 100
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/womens fashion/women-tshirt-1.jpg",
//             "alt": "printed crew-neck t-shirt"
//         },

//         "brand": "Dillinger",
//         "name": "printed crew-neck t-shirt",

//         "price": {

//             "currency": "Rs",
//             "current": 299,
//             "actual": 999,

//             "offer": {
//                 "value": 70,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.3,
//         "buyers": 1000
//     },

//     //kids
//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/deals for kids/tshirt-1.jpg",
//             "alt": "boys round neck tshirt"
//         },

//         "brand": "h&m",
//         "name": "boys round neck tshirt",

//         "price": {

//             "currency": "Rs",
//             "current": 599,
//             "actual": 999,

//             "offer": {
//                 "value": 30,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.0,
//         "buyers": 170
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/deals for kids/boys-pants-2.jpg",
//             "alt": "boys denim jeans"
//         },

//         "brand": "v-mart",
//         "name": "boys denim jeans",

//         "price": {

//             "currency": "Rs",
//             "current": 499,
//             "actual": 999,

//             "offer": {
//                 "value": 50,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.8,
//         "buyers": 2100
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/deals for kids/frock-2.jpg",
//             "alt": "georgette a line dress"
//         },

//         "brand": "sangria",
//         "name": "georgette a line dress",

//         "price": {

//             "currency": "Rs",
//             "current": 299,
//             "actual": 599,

//             "offer": {
//                 "value": 50,
//                 "type": "%"
//             }
//         },

//         "ratings": 3.5,
//         "buyers": 100
//     },

//     {
//         "image": {
//             "source": "../../assets/images/homepage-images/deals for kids/tshirt-3.jpg",
//             "alt": "boys tshirt"
//         },

//         "brand": "max",
//         "name": "boys tshirt",

//         "price": {

//             "currency": "Rs",
//             "current": 299,
//             "actual": 999,

//             "offer": {
//                 "value": 70,
//                 "type": "%"
//             }
//         },

//         "ratings": 4.3,
//         "buyers": 1000
//     },

// ]


let product = JSON.parse(localStorage.getItem("product_list"));
// console.log(product);
// let filteredProducts = ;

const params = new URLSearchParams(window.location.search);

const urlgender = params.get("gender");

let filteredProducts = product.filter((product) => product.gender === urlgender);
// console.log(filteredProducts);

for (let i = 0; i < filteredProducts.length; i++) {

    // <div class="smallcontainer"></div>
    div_smallcontainer = document.createElement("div");
    div_smallcontainer.setAttribute("class", "smallcontainer");
    div_smallcontainer.setAttribute("data-id", filteredProducts[i]["product_id"]);
    div_smallcontainer.setAttribute("data-gender", filteredProducts[i]["gender"]);
    // console.log(div_smallcontainer);
    document.querySelector("div.products").append(div_smallcontainer);
    // console.log(div_smallcontainer);


    // <a class="product_link" href="../products/product details/mens_product_details/product_details-men-jean1.html"></a>

    //  <div class= "images"> <div>
    div_images = document.createElement("div");
    div_images.setAttribute("class", "images");
    div_smallcontainer.append(div_images);

    // <img class="product_image" src="../../assets/images/homepage-images/mens fashion/men-jean-1.jpg" alt="mens jean" >
    img_product_image = document.createElement("img");
    img_product_image.setAttribute("class", "product_image");
    img_product_image.setAttribute("src", "../../assets/images/homepage-images/deals for kids/tshirt-3.jpg");
    img_product_image.setAttribute("alt", "Shirt");
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
    div_ratings_count.innerText = "33";
    div_ratings.append(div_ratings_count);


    // <i class="star fa-solid fa-star"></i>
    i_star = document.createElement("i");
    i_star.setAttribute("class", "star fa-solid fa-star");
    div_ratings.append(i_star);



    // <p class="buyers_count">4.4</p>
    div_buyers_count = document.createElement("div");
    div_buyers_count.setAttribute("class", "buyers_count");
    div_buyers_count.innerText = "777";
    div_ratings.append(div_buyers_count);

    // <div class ="names"> <div>
    div_names = document.createElement("div");
    div_names.setAttribute("class", "names");
    div_smallcontainer.append(div_names);

    //  <h3 class="brand_name">DNMX</h3>

    h3_brand_name = document.createElement("h3");
    h3_brand_name.setAttribute("class", "brand_name");
    h3_brand_name.innerText = filteredProducts[i]["brand"];
    div_names.append(h3_brand_name);

    //  <h4 class="product_name">Mid-Rise Skinny Fit Jeans</h4>
    h4_product_name = document.createElement("h4");
    h4_product_name.setAttribute("class", "product_name");
    h4_product_name.innerText = filteredProducts[i]["name"];
    div_names.append(h4_product_name);

    // <div class= "prices"> </div>
    div_prices = document.createElement("div");
    div_prices.setAttribute("class", "prices");
    div_smallcontainer.append(div_prices);
    //////price - current calculation
    let mrp = filteredProducts[i]["mrp"];
    let value = filteredProducts[i]["value"];
    let type = filteredProducts[i]["type"];
    let current;

    if (type === "%") {
        current = mrp - mrp * value / 100;
        current = Math.round(current);
    }
    else {
        current = mrp - value;
    }
    // console.log(current);

    // <span class="product_price">rs.799</span>
    span_product_price = document.createElement("span");
    span_product_price.setAttribute("class", "current_price");

    span_product_price.innerText = filteredProducts[i]["currency"] + "." + current;
    div_prices.append(span_product_price);

    // <span class="original_price"><del>rs.999</del></span>
    span_original_price = document.createElement("span");
    span_original_price.setAttribute("class", "mrp_price");
    div_prices.append(span_original_price);

    del_original_price = document.createElement("del");
    del_original_price.innerText = filteredProducts[i]["mrp"];
    span_original_price.append(del_original_price);

    // <span class="product_offer">(30% off)</span>
    span_product_offer = document.createElement("span");
    span_product_offer.setAttribute("class", "product_offer");
    span_product_offer.innerText = "(" + filteredProducts[i]["value"] + filteredProducts[i]["type"] + "off" + ")";
    div_prices.append(span_product_offer);
}


// getting the image 

let product_container = document.querySelectorAll(".smallcontainer");


// console.log(product_container);

product_container.forEach(event => {
    event.addEventListener("click", function () {
        let product_uuid = event.dataset.id
        // console.log(product_uuid);
        location.href = `./product-details.html?product_id=${product_uuid}`
    })
}
);





// function setActive(e) {
//     smallcontainer.forEach((img) => {
//         img.classList.remove('clicked');
//     });
//     e.target.classList.add('clicked');
// }



// function find_product(e) {
//     return e.gendercategory == urlgender;
// };

// let product_filter = product.find(find_product);
// console.log(product_filter);

// document.querySelector("#brand_name").innerText = product_data["brand"];
// document.querySelector("#product_name").innerText = product_data["name"];

