let user_list = JSON.parse(localStorage.getItem("user_list"));
let gender_list = JSON.parse(localStorage.getItem("gender_list"));
let size_list = JSON.parse(localStorage.getItem("size_list"));
let product_list = JSON.parse(localStorage.getItem("product_list"));
let category_list = JSON.parse(localStorage.getItem("category_list"));

let user_data = [{ "full_name": "bakya", "email": "bakyalakshmi.angappan@fssa.freshworks.com", "mobile_number": "9789853625", "password": "123456", "re_enter_password": "123456", "gender": "", "dob": "", "address": "", "hintname": "", "unique_id": "9ddbfffb-fa10-4d46-898b-e6cf8b81bf00" }]

// static datas
let gender_data = [{ "gender": "men", "id": 1 }, { "gender": "women", "id": 2 }, { "gender": "kids", "id": 3 }]
let size_data = [
    {
        "value": "xs",
        "id": 1,
    },
    {
        "value": "s",
        "id": 2,

    },
    {
        "value": "l",
        "id": 3,

    },
    {
        "value": "m",
        "id": 4,

    },
    {
        "value": "xl",
        "id": 5,

    },
    {
        "value": "2xl",
        "id": 6,

    },
    {
        "value": "3xl",
        "id": 7,

    },
    {
        "value": "28",
        "id": 8,

    },
    {
        "value": "30",
        "id": 9,

    },
    {
        "value": "32",
        "id": 10,
    },
    {
        "value": "34",
        "id": 11,
    },
    {
        "value": "36",
        "id": 12,
    },
    {
        "value": "38",
        "id": 13,
    },

    {
        "value": "40",
        "id": 14,
    },]

let product_data = [{ "seller_id": "vela623@gmail.com", "product_id": "eaf6a487-bd15-4152-9dd6-ba7a91378118", "image": { "source": "https://iili.io/HOIHESp.webp", "alt": "midrise jeans" }, "brand": "highlander", "name": "midrise jeans", "price": { "currency": "rs", "mrp": "500", "current": 440, "offer": { "value": "12", "type": "%" } }, "size": [{ "id": 1, "availability": true }, { "id": 2, "availability": true }, { "id": 3, "availability": true }, { "id": 4, "availability": true }, { "id": 5, "availability": true }, { "id": 6, "availability": true }, { "id": 7, "availability": true }, { "id": 8, "availability": true }, { "id": 9, "availability": true }, { "id": 10, "availability": true }, { "id": 11, "availability": true }, { "id": 12, "availability": true }, { "id": 13, "availability": true }, { "id": 14, "availability": true }], "color": "black", "details": "", "ratings": 3.5, "buyers": 100, "gender": "1", "category": "3", "stock": "231", "status": true }, { "seller_id": "vela623@gmail.com", "product_id": "37a9d498-9922-4dda-9c2f-96ae52bb0063", "image": { "source": "https://iili.io/HOIHESp.webp", "alt": "relaxed fit jean" }, "brand": "here&now", "name": "relaxed fit jean", "price": { "currency": "rs", "mrp": "453", "current": 399, "offer": { "value": "12", "type": "%" } }, "size": [{ "id": 1, "availability": true }, { "id": 2, "availability": true }, { "id": 3, "availability": true }, { "id": 4, "availability": true }, { "id": 5, "availability": true }, { "id": 6, "availability": true }, { "id": 7, "availability": true }, { "id": 8, "availability": true }, { "id": 9, "availability": true }, { "id": 10, "availability": true }, { "id": 11, "availability": true }, { "id": 12, "availability": true }, { "id": 13, "availability": true }, { "id": 14, "availability": true }], "color": "black", "details": "", "ratings": 3.5, "buyers": 100, "gender": "1", "category": "3", "stock": "21", "status": true }, { "seller_id": "vela623@gmail.com", "product_id": "94cdbe0b-01d7-4ba0-b26a-2cd65fd6ab39", "image": { "source": "https://iili.io/HOIHESp.webp", "alt": "skinny fit jean" }, "brand": "highlander", "name": "skinny fit jean", "price": { "currency": "rs", "mrp": "623", "current": 492, "offer": { "value": "21", "type": "%" } }, "size": [{ "id": 1, "availability": true }, { "id": 2, "availability": true }, { "id": 3, "availability": true }, { "id": 4, "availability": true }, { "id": 5, "availability": true }, { "id": 6, "availability": true }, { "id": 7, "availability": true }, { "id": 8, "availability": true }, { "id": 9, "availability": true }, { "id": 10, "availability": true }, { "id": 11, "availability": true }, { "id": 12, "availability": true }, { "id": 13, "availability": true }, { "id": 14, "availability": true }], "color": "black", "details": "", "ratings": 3.5, "buyers": 100, "gender": "1", "category": "3", "stock": "117", "status": true }]



let category_data = [{ "seller_id": "vela623@gmail.com", "category": "shirt", "id": 1, "gender": "1", "status": true }, { "seller_id": "vela623@gmail.com", "category": "t-shirt", "id": 2, "gender": "1", "status": true }, { "seller_id": "vela623@gmail.com", "category": "jean", "id": 3, "gender": "1", "status": true }, { "seller_id": "vela623@gmail.com", "category": "trousers", "id": 4, "gender": "1", "status": true }, { "seller_id": "vela623@gmail.com", "category": "skirts", "id": 5, "gender": "2", "status": true }]

if (!user_list) {
    localStorage.setItem(("user_list"), JSON.stringify(user_data));
}

if (!gender_list) {
    localStorage.setItem(("gender_list"), JSON.stringify(gender_data));
}

if (!size_list) {
    localStorage.setItem(("size_list"), JSON.stringify(size_data));
}

if (!product_list) {
    localStorage.setItem(("product_list"), JSON.stringify(product_data));
}

if (!category_list) {
    localStorage.setItem(("category_list"), JSON.stringify(category_data));
}


// storing the size in ls
// let size_list = [];

// size_list.push(

//     {
//         "value": "xs",
//         "id": 1,
//     },
//     {
//         "value": "s",
//         "id": 2,

//     },
//     {
//         "value": "l",
//         "id": 3,

//     },
//     {
//         "value": "m",
//         "id": 4,

//     },
//     {
//         "value": "xl",
//         "id": 5,

//     },
//     {
//         "value": "2xl",
//         "id": 6,

//     },
//     {
//         "value": "3xl",
//         "id": 7,

//     },
//     {
//         "value": "28",
//         "id": 8,

//     },
//     {
//         "value": "30",
//         "id": 9,

//     },
//     {
//         "value": "32",
//         "id": 10,
//     },
//     {
//         "value": "34",
//         "id": 11,
//     },
//     {
//         "value": "36",
//         "id": 12,
//     },
//     {
//         "value": "38",
//         "id": 13,
//     },

//     {
//         "value": "40",
//         "id": 14,
//     },
// )

// console.log(size_list);
// localStorage.setItem('size_list', JSON.stringify(size_list));


// let gender_list = [];

// gender_list.push(
//     {
//         "gender": "men",
//         "id": 1
//     },
//     {
//         "gender": "women",
//         "id": 2
//     },
//     {
//         "gender": "kids",
//         "id": 3
//     }
// );

// localStorage.setItem('gender_list', JSON.stringify(gender_list));







