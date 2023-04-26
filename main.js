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

let product_data = [{"seller_id":"vela623@gmail.com","product_id":"4ba94958-e440-497d-beef-f83aeffa0c62","image":{"source":"https://iili.io/HvmlzOv.webp","alt":"Men Black Slim Fit Casual Shirt"},"brand":"Here&Now","name":"Men Black Slim Fit Casual Shirt","varients":[{"size":"1","price":{"currency":"rs","mrp":"159","current":137},"offer":{"value":"14","type":"%"},"quantity":"433"},{"size":"2","price":{"currency":"rs","mrp":"259","current":228},"offer":{"value":"12","type":"%"},"quantity":"3434"},{"size":"3","price":{"currency":"rs","mrp":"299","current":269},"offer":{"value":"10","type":"%"},"quantity":"1212"},{"size":"4","price":{"currency":"rs","mrp":"299","current":269},"offer":{"value":"10","type":"%"},"quantity":"12131"}],"color":"green checked","details":"Black solid opaque Casual shirt , has a spread collar, button placket, short regular sleeves, straight hem\n\nSize & Fit\nFit: Slim Fit\nThe model (height 6') is wearing a size 40\n\nMaterial & Care\nViscose Rayon\nMachine wash","ratings":3.5,"buyers":100,"gender":"1","category":"1","status":true},{"seller_id":"vela623@gmail.com","product_id":"2dddce36-3fc2-4c45-a47b-62cee8aef47f","image":{"source":"https://iili.io/HvmlVX2.webp","alt":"Men maroon Stretchable Sustainable Casual Shirt"},"brand":"Roadster","name":"Men maroon Stretchable Sustainable Casual Shirt","varients":[{"size":"1","price":{"currency":"rs","mrp":"259","current":233},"offer":{"value":"10","type":"%"},"quantity":"424"},{"size":"2","price":{"currency":"rs","mrp":"349","current":328},"offer":{"value":"6","type":"%"},"quantity":"434"},{"size":"3","price":{"currency":"rs","mrp":"349","current":325},"offer":{"value":"7","type":"%"},"quantity":"232"}],"color":"maroon","details":"Maroon solid casual shirt, has a spread collar, long sleeves, button placket, curved hem, and 1 patch pocket\n\nSize & Fit\nRegular Fit\nThe model (height 6') is wearing a size 40\n\nMaterial & Care\nMaterial: 98% Cotton, 2% elastane\nMachine Wash","ratings":3.5,"buyers":100,"gender":"1","category":"1","status":true},{"seller_id":"vela623@gmail.com","product_id":"d8599ad2-1f9a-4c19-8fdb-5548178abbf1","image":{"source":"https://iili.io/HvmlMzl.webp","alt":"Men Dusty Pink Solid Slim Fit Classic Formal Shirt"},"brand":"Louis Philippe","name":"Men Dusty Pink Solid Slim Fit Classic Formal Shirt","varients":[{"size":"1","price":{"currency":"rs","mrp":"249","current":192},"offer":{"value":"23","type":"%"},"quantity":"5455"},{"size":"2","price":{"currency":"rs","mrp":"299","current":251},"offer":{"value":"16","type":"%"},"quantity":"3244"},{"size":"3","price":{"currency":"rs","mrp":"299","current":254},"offer":{"value":"15","type":"%"},"quantity":"2333"},{"size":"4","price":{"currency":"rs","mrp":"299","current":263},"offer":{"value":"12","type":"%"},"quantity":"8787"},{"size":"5","price":{"currency":"rs","mrp":"299","current":263},"offer":{"value":"12","type":"%"},"quantity":"2123"}],"color":"Dusty Pink","details":"Pink solid Formal shirt ,has a spread collar, button placket, 1 patch pocket, long regular sleeves, curved hem\n\nSize & Fit\nBrand Fit: Classic\nFit: Regular Fit\nSize worn by the model: 40\nChest: 39\"\nHeight: 6'1\"\n\nMaterial & Care\n60% Cotton, 40% Linen\nGentle Wash Only","ratings":3.5,"buyers":100,"gender":"1","category":"1","status":true},{"seller_id":"vela623@gmail.com","product_id":"231d3fed-449a-4abb-bc99-49032eed76b3","image":{"source":"https://iili.io/HvmMYHF.webp","alt":"Men Black Slim Fit Mid-Rise Clean Look Stretchable Jeans"},"brand":"Urbano Fashion","name":"Men Black Slim Fit Mid-Rise Clean Look Stretchable Jeans","varients":[{"size":"1","price":{"currency":"rs","mrp":"399","current":375},"offer":{"value":"6","type":"%"},"quantity":"23652"},{"size":"2","price":{"currency":"rs","mrp":"499","current":439},"offer":{"value":"12","type":"%"},"quantity":"2327"},{"size":"3","price":{"currency":"rs","mrp":"499","current":434},"offer":{"value":"13","type":"%"},"quantity":"1999"},{"size":"4","price":{"currency":"rs","mrp":"549","current":456},"offer":{"value":"17","type":"%"},"quantity":"674"}],"color":"black","details":"Black dark wash 5-pocket mid-rise jeans, clean look, no fade, has a button and zip closure, and waistband with belt loops\n\nSize & Fit\nSlim fit\nStretchable\nThe model (height 6') is wearing a size 32\n\nMaterial & Care\n98% cotton, 2% elastane\nMachine-wash","ratings":3.5,"buyers":100,"gender":"1","category":"2","status":true},{"seller_id":"vela623@gmail.com","product_id":"87413199-d585-44e4-864e-425935652585","image":{"source":"https://iili.io/HvmMaAg.webp","alt":"Men Black Skinny Fit Mid-Rise Clean Look Stretchable Jeans"},"brand":"Mast & Harbour","name":"Men Black Skinny Fit Mid-Rise Clean Look Stretchable Jeans","varients":[{"size":"1","price":{"currency":"rs","mrp":"459","current":404},"offer":{"value":"12","type":"%"},"quantity":"63562"},{"size":"2","price":{"currency":"rs","mrp":"549","current":505},"offer":{"value":"8","type":"%"},"quantity":"53267"},{"size":"3","price":{"currency":"rs","mrp":"549","current":505},"offer":{"value":"8","type":"%"},"quantity":"6534"},{"size":"4","price":{"currency":"rs","mrp":"549","current":511},"offer":{"value":"7","type":"%"},"quantity":"12343"}],"color":"black","details":"Black dark wash 5-pocket mid-rise jeans, clean look, no fade, has a button and zip closure, and waistband with belt loops\n\nSize & Fit\nSkinny fit\nStretchable\nThe model (height 6') is wearing a size 32\n\nMaterial & Care\n98% Cotton and 2% elastane\nMachine-wash","ratings":3.5,"buyers":100,"gender":"1","category":"2","status":true},{"seller_id":"vela623@gmail.com","product_id":"f8721e20-f40f-4d6f-9100-3d6f7e306d6e","image":{"source":"https://iili.io/HvmMcNa.webp","alt":"Men Black Skinny Fit Mid-Rise Clean Look Stretchable Jeans"},"brand":"Roadster","name":"Men Black Skinny Fit Mid-Rise Clean Look Stretchable Jeans","varients":[{"size":"1","price":{"currency":"rs","mrp":"599","current":443},"offer":{"value":"26","type":"%"},"quantity":"7676"},{"size":"2","price":{"currency":"rs","mrp":"547","current":432},"offer":{"value":"21","type":"%"},"quantity":"3234"},{"size":"3","price":{"currency":"rs","mrp":"649","current":513},"offer":{"value":"21","type":"%"},"quantity":"22123"},{"size":"4","price":{"currency":"rs","mrp":"699","current":531},"offer":{"value":"24","type":"%"},"quantity":"12334"}],"color":"Black","details":"Black dark wash 5-pocket mid-rise jeans, clean look with no fade, has a button and zip closure, waistband with belt loops\n\nSize & Fit\nSkinny Fit\nStretchable\nThe model (height 6') is wearing a size 32\n\nMaterial & Care\n99% cotton, 1% elastane\nMachine-wash","ratings":3.5,"buyers":100,"gender":"1","category":"2","status":true},{"seller_id":"vela623@gmail.com","product_id":"4a05c71b-8c0f-4dfd-9656-6adaa7fffde2","image":{"source":"https://iili.io/Hvm4YtR.webp","alt":"Women blue-Coloured Printed Cotton Pure Cotton T-shirt"},"brand":"DILLINGER","name":"Women blue-Coloured Printed Cotton Pure Cotton T-shirt","varients":[{"size":"1","price":{"currency":"rs","mrp":"249","current":224},"offer":{"value":"10","type":"%"},"quantity":"55667"},{"size":"2","price":{"currency":"rs","mrp":"299","current":266},"offer":{"value":"11","type":"%"},"quantity":"3234"},{"size":"3","price":{"currency":"rs","mrp":"299","current":257},"offer":{"value":"14","type":"%"},"quantity":"122"}],"color":"blue ","details":"blue-colored T-shirt\nLongline length\nRound neck\nShort, regular sleeves\nKnitted cotton fabric\n\nSize & Fit\nLoose\nThe model (height 5'8) is wearing a size S\n\nMaterial & Care\n100% Cotton\nMachine wash","ratings":3.5,"buyers":100,"gender":"2","category":"4","status":true},{"seller_id":"vela623@gmail.com","product_id":"cba7d282-b625-4709-ac27-024fb3c70bab","image":{"source":"https://iili.io/Hvm4lMN.webp","alt":"Women Black Printed Drop-Shoulder Sleeves Oversized T-shirt"},"brand":"Kook N Keech","name":"Women Black Printed Drop-Shoulder Sleeves Oversized T-shirt","varients":[{"size":"1","price":{"currency":"rs","mrp":"359","current":294},"offer":{"value":"18","type":"%"},"quantity":"5445"},{"size":"2","price":{"currency":"rs","mrp":"259","current":223},"offer":{"value":"14","type":"%"},"quantity":"4665"},{"size":"3","price":{"currency":"rs","mrp":"259","current":228},"offer":{"value":"12","type":"%"},"quantity":"7666"},{"size":"4","price":{"currency":"rs","mrp":"259","current":218},"offer":{"value":"16","type":"%"},"quantity":"3432"}],"color":"Black","details":"Black Tshirt for women\nLongline length\nRound neck\nShort, drop-shoulder sleeves\nKnitted cotton fabric\n\nSize & Fit\nThe model (height 5'8) is wearing a size S\n\nMaterial & Care\n52% Cotton, 48% Polyester\nMachine Wash","ratings":3.5,"buyers":100,"gender":"2","category":"4","status":true},{"seller_id":"vela623@gmail.com","product_id":"454d96bb-790f-4c2b-8823-c9d67162733c","image":{"source":"https://iili.io/Hvm4cnp.webp","alt":" Women Pink Burgundy Printed Round Neck Pure Cotton Longline T-shirt"},"brand":"Roadster","name":" Women Pink Burgundy Printed Round Neck Pure Cotton Longline T-shirt","varients":[{"size":"1","price":{"currency":"rs","mrp":"229","current":204},"offer":{"value":"11","type":"%"},"quantity":"4566"},{"size":"2","price":{"currency":"rs","mrp":"259","current":228},"offer":{"value":"12","type":"%"},"quantity":"5764"},{"size":"3","price":{"currency":"rs","mrp":"279","current":190},"offer":{"value":"32","type":"%"},"quantity":"6665"},{"size":"4","price":{"currency":"rs","mrp":"399","current":271},"offer":{"value":"32","type":"%"},"quantity":"56546"},{"size":"5","price":{"currency":"rs","mrp":"399","current":307},"offer":{"value":"23","type":"%"},"quantity":"2123"}],"color":"navy","details":"navy printed T-shirt, has a round neck, and short sleeves\n\nSize & Fit\nBoxy Fit\nThe model (height 5'8\") is wearing a size S\n\nMaterial & Care\nMaterial: 100% Cotton\nMachine Wash","ratings":3.5,"buyers":100,"gender":"2","category":"4","status":true},{"seller_id":"vela623@gmail.com","product_id":"8c371945-5d04-46e8-a1f1-0bd77cd7288a","image":{"source":"https://iili.io/HvmpjDP.webp","alt":"Women Black Flared Midi Skirt"},"brand":"KASSUALLY","name":"Women Black Flared Midi Skirt","varients":[{"size":"1","price":{"currency":"rs","mrp":"775","current":341},"offer":{"value":"56","type":"%"},"quantity":"455"},{"size":"2","price":{"currency":"rs","mrp":"987","current":543},"offer":{"value":"45","type":"%"},"quantity":"455"},{"size":"3","price":{"currency":"rs","mrp":"877","current":500},"offer":{"value":"43","type":"%"},"quantity":"4455"},{"size":"4","price":{"currency":"rs","mrp":"757","current":265},"offer":{"value":"65","type":"%"},"quantity":"12133"}],"color":"black","details":"Black, grey pleated flared midi skirt, has an elasticated waistband with slip-on closure and flared hem\n\n\nSize & Fit\nThe model (height 5'8\") is wearing a size 28\n\n\nMaterial & Care\nPolyester\nHand-wash\nWash dark colour separately\nDo not bleach\nWarm iron if needed","ratings":3.5,"buyers":100,"gender":"2","category":"5","status":true},{"seller_id":"vela623@gmail.com","product_id":"c7411d56-0ed3-4ed4-ab26-d82684266592","image":{"source":"https://iili.io/HvmphOB.webp","alt":"Black Lace Design A-Line Skirt"},"brand":"SASSAFRAS","name":"Black Lace Design A-Line Skirt","varients":[{"size":"1","price":{"currency":"rs","mrp":"359","current":233},"offer":{"value":"35","type":"%"},"quantity":"46789"},{"size":"2","price":{"currency":"rs","mrp":"459","current":266},"offer":{"value":"42","type":"%"},"quantity":"6754"}],"color":"black","details":"A black lace design A-line skirt, has an elasticated waistband with a zip closure at the back, a lining, straight hem\n\nMaterial & Care\n100% Polyester\nMachine wash","ratings":3.5,"buyers":100,"gender":"2","category":"5","status":true}]



let category_data = [{ "seller_id": "vela623@gmail.com", "category": "Shirt", "id": 1, "gender": "1", "status": true }, { "seller_id": "vela623@gmail.com", "category": "Jean", "id": 2, "gender": "1", "status": true }, { "seller_id": "vela623@gmail.com", "category": "Trousers", "id": 3, "gender": "1", "status": true }, { "seller_id": "vela623@gmail.com", "category": "T-shirt", "id": 4, "gender": "2", "status": true }, { "seller_id": "vela623@gmail.com", "category": "Skirts", "id": 5, "gender": "2", "status": true }, { "seller_id": "vela623@gmail.com", "category": "shirts", "id": 6, "gender": "3", "status": true }, { "seller_id": "vela623@gmail.com", "category": "Pants", "id": 7, "gender": "3", "status": true }]

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







