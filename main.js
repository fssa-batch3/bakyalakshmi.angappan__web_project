const user_list = JSON.parse(localStorage.getItem("user_list"));
const gender_list = JSON.parse(localStorage.getItem("gender_list"));
const size_list = JSON.parse(localStorage.getItem("size_list"));
const product_list = JSON.parse(localStorage.getItem("product_list"));
const category_list = JSON.parse(localStorage.getItem("category_list"));
const address_list = JSON.parse(localStorage.getItem("address_list"));

const user_data = [
  {
    full_name: "bakya",
    email: "bakyalakshmi.angappan@fssa.freshworks.com",
    mobile_number: "9789853625",
    password: "123456",
    re_enter_password: "123456",
    gender: "",
    dob: "",
    hintname: "",
    unique_id: "9ddbfffb-fa10-4d46-898b-e6cf8b81bf00",
  },
];

// static datas
const gender_data = [
  { gender: " Men", id: 1 },
  { gender: "Women", id: 2 },
  { gender: "Kids", id: 3 },
];
const size_data = [
  {
    value: "xs",
    id: 1,
  },
  {
    value: "s",
    id: 2,
  },
  {
    value: "l",
    id: 3,
  },
  {
    value: "m",
    id: 4,
  },
  {
    value: "xl",
    id: 5,
  },
  {
    value: "2xl",
    id: 6,
  },
  {
    value: "3xl",
    id: 7,
  },
  {
    value: "28",
    id: 8,
  },
  {
    value: "30",
    id: 9,
  },
  {
    value: "32",
    id: 10,
  },
  {
    value: "34",
    id: 11,
  },
  {
    value: "36",
    id: 12,
  },
  {
    value: "38",
    id: 13,
  },

  {
    value: "40",
    id: 14,
  },
];

const product_data = [{"seller_id":"vela623@gmail.com","product_id":"bf5a89fe-31fa-4c26-bc8c-87eb68680576","image":{"source":"https://iili.io/HvByRhQ.webp","alt":"Men Red Printed Round Neck Pure Cotton T-shirt"},"brand":"Roadster","name":"Men Red Printed Round Neck Pure Cotton T-shirt","varients":[{"size":"1","price":{"currency":"RS","mrp":"249","current":217},"offer":{"value":"13","type":"%"},"quantity":"245"},{"size":"2","price":{"currency":"RS","mrp":"256","current":225},"offer":{"value":"12","type":"%"},"quantity":"234"},{"size":"3","price":{"currency":"RS","mrp":"349","current":269},"offer":{"value":"23","type":"%"},"quantity":"1345"}],"color":"Red","details":"Red printed T-shirt, has a round neck, and short sleeves\n\nSize & Fit\nThe model (height 6') is wearing a size M\n\nMaterial & Care\nMaterial: 100% Cotton\nMachine Wash","ratings":3.5,"buyers":100,"gender":"1","category":"1","status":true},{"seller_id":"vela623@gmail.com","product_id":"c3e36d1d-ddaa-47a9-8fb2-66de04701457","image":{"source":"https://iili.io/HSI63ua.webp","alt":"Men Beige Sustainable T-shirt"},"brand":"Huetrap","name":"Men Beige Sustainable T-shirt","varients":[{"size":"1","price":{"currency":"RS","mrp":"239","current":210},"offer":{"value":"12","type":"%"},"quantity":"256"},{"size":"2","price":{"currency":"RS","mrp":"259","current":223},"offer":{"value":"14","type":"%"},"quantity":"244"},{"size":"3","price":{"currency":"RS","mrp":"269","current":221},"offer":{"value":"18","type":"%"},"quantity":"2456"},{"size":"4","price":{"currency":"RS","mrp":"349","current":269},"offer":{"value":"23","type":"%"},"quantity":"3456"},{"size":"5","price":{"currency":"RS","mrp":"349","current":307},"offer":{"value":"12","type":"%"},"quantity":"11334"}],"color":"beige","details":"Beige T-shirt, has a round neck, and short sleeves\n\nSize & Fit\nThe model (height 6') is wearing a size M\n\nMaterial & Care\nMaterial: 52% Cotton 48% Polyester\nMachine Wash","ratings":3.5,"buyers":100,"gender":"1","category":"1","status":true},{"seller_id":"vela623@gmail.com","product_id":"775c58f0-6871-4a99-a403-9eefdfc5358e","image":{"source":"https://iili.io/HSI6dyg.webp","alt":"Men Olive Green Solid Slim Fit Round Neck Pure Cotton T-shirt"},"brand":"Here&now","name":"Men Olive Green Solid Slim Fit Round Neck Pure Cotton T-shirt","varients":[{"size":"2","price":{"currency":"RS","mrp":"389","current":261},"offer":{"value":"33","type":"%"},"quantity":"677"},{"size":"3","price":{"currency":"RS","mrp":"349","current":199},"offer":{"value":"43","type":"%"},"quantity":"245"},{"size":"4","price":{"currency":"RS","mrp":"345","current":235},"offer":{"value":"32","type":"%"},"quantity":"245"}],"color":"olive","details":"Olive green solid T-shirt, has a round neck, and short sleeves\n\nSize & Fit\nSlim Fit\nThe model (height 6') is wearing a size M\n\nMaterial & Care\n100% cotton\nMachine-wash","ratings":3.5,"buyers":100,"gender":"1","category":"1","status":true},{"seller_id":"vela623@gmail.com","product_id":"ba908db6-ef94-4a0d-aad8-1eb431e2ab4c","image":{"source":"https://iili.io/HvBy5QV.webp","alt":"Men Green Checked Casual Shirt"},"brand":" The Indian Garage Co","name":"Men Green Checked Casual Shirt","varients":[{"size":"1","price":{"currency":"RS","mrp":"479","current":254},"offer":{"value":"47","type":"%"},"quantity":"9776"},{"size":"2","price":{"currency":"RS","mrp":"479","current":278},"offer":{"value":"42","type":"%"},"quantity":"879"},{"size":"3","price":{"currency":"RS","mrp":"649","current":500},"offer":{"value":"23","type":"%"},"quantity":"68"},{"size":"4","price":{"currency":"RS","mrp":"649","current":467},"offer":{"value":"28","type":"%"},"quantity":"458"},{"size":"5","price":{"currency":"RS","mrp":"459","current":454},"offer":{"value":"1","type":"%"},"quantity":"144"},{"size":"6","price":{"currency":"RS","mrp":"458","current":444},"offer":{"value":"3","type":"%"},"quantity":"134"}],"color":"Green","details":"Green other checks checked opaque Casual shirt ,has a spread collar, button placket, long regular sleeves, curved hem\n\nSize & Fit\nBrand Fit:\nFit: Regular Fit\nSize worn by the model: M-102CM\nChest: 40\"\nHeight: 6'\n\nMaterial & Care\nCotton\nMachine Wash","ratings":3.5,"buyers":100,"gender":"1","category":"2","status":true},{"seller_id":"vela623@gmail.com","product_id":"65df07dd-7b16-4257-abe8-229a062838ce","image":{"source":"https://iili.io/HvzmWhb.webp","alt":"Men Maroon Pure Cotton Sustainable Casual Shirt"},"brand":"HERE&NOW","name":"Men Maroon Pure Cotton Sustainable Casual Shirt","varients":[{"size":"1","price":{"currency":"RS","mrp":"890","current":552},"offer":{"value":"38","type":"%"},"quantity":"78657"},{"size":"2","price":{"currency":"RS","mrp":"867","current":572},"offer":{"value":"34","type":"%"},"quantity":"778"},{"size":"3","price":{"currency":"RS","mrp":"866","current":468},"offer":{"value":"46","type":"%"},"quantity":"7567"},{"size":"4","price":{"currency":"RS","mrp":"829","current":398},"offer":{"value":"52","type":"%"},"quantity":"6553"},{"size":"5","price":{"currency":"RS","mrp":"729","current":313},"offer":{"value":"57","type":"%"},"quantity":"324356"}],"color":"Maroon ","details":"Maroon solid casual shirt, has a mandarin collar, long sleeves, curved hem\n\nSize & Fit\nRegular Fit\nThe model (height 6') is wearing a size 40\n\nMaterial & Care\n100% Cotton\nMachine-wash","ratings":3.5,"buyers":100,"gender":"1","category":"2","status":true},{"seller_id":"vela623@gmail.com","product_id":"1c50803a-342f-4366-a864-bb3e5e0a14ff","image":{"source":"https://iili.io/HvzmXQj.webp","alt":"Men Pink Solid Slim Fit Solid Casual Shirt"},"brand":" HIGHLANDER","name":"Men Pink Solid Slim Fit Solid Casual Shirt","varients":[{"size":"2","price":{"currency":"RS","mrp":"235","current":204},"offer":{"value":"13","type":"%"},"quantity":"5899"},{"size":"3","price":{"currency":"RS","mrp":"256","current":223},"offer":{"value":"13","type":"%"},"quantity":"578"},{"size":"4","price":{"currency":"RS","mrp":"356","current":310},"offer":{"value":"13","type":"%"},"quantity":"135"},{"size":"5","price":{"currency":"RS","mrp":"443","current":341},"offer":{"value":"23","type":"%"},"quantity":"14524"}],"color":"Pink","details":"Pink solid casual shirt, has a mandarin collar, button placket, 1 pocket, long sleeves, curved hem\n\nSize & Fit\nSlim fit\nThe model (height 6') is wearing a size 40\n\nMaterial & Care\n100% cotton\nMachine-wash","ratings":3.5,"buyers":100,"gender":"1","category":"2","status":true},{"seller_id":"vela623@gmail.com","product_id":"412c91f6-ff1a-4ab6-ba5a-0eece95ea678","image":{"source":"https://iili.io/HvuoZ12.webp","alt":"Men Black Slim Fit Mid-Rise Clean Look Stretchable Jeans"},"brand":"Urbano Fashion","name":"Men Black Slim Fit Mid-Rise Clean Look Stretchable Jeans","varients":[{"size":"10","price":{"currency":"RS","mrp":"469","current":431},"offer":{"value":"8","type":"%"},"quantity":"8987"},{"size":"11","price":{"currency":"RS","mrp":"469","current":422},"offer":{"value":"10","type":"%"},"quantity":"7887"},{"size":"12","price":{"currency":"RS","mrp":"556","current":495},"offer":{"value":"11","type":"%"},"quantity":"545"},{"size":"13","price":{"currency":"RS","mrp":"549","current":483},"offer":{"value":"12","type":"%"},"quantity":"535"}],"color":"Black","details":"Black dark wash 5-pocket mid-rise jeans, clean look, no fade, has a button and zip closure, and waistband with belt loops\n\nSize & Fit\nSlim fit\nStretchable\nThe model (height 6') is wearing a size 32\n\nMaterial & Care\n98% cotton, 2% elastane\nMachine-wash","ratings":3.5,"buyers":100,"gender":"1","category":"3","status":true},{"seller_id":"vela623@gmail.com","product_id":"6a1c8cc0-1749-48d3-ae5f-bc893cf9bc43","image":{"source":"https://iili.io/HvmMaAg.webp","alt":"Men Black Skinny Fit Mid-Rise Clean Look Stretchable Jeans"},"brand":"Roadster","name":"Men Black Skinny Fit Mid-Rise Clean Look Stretchable Jeans","varients":[{"size":"11","price":{"currency":"RS","mrp":"899","current":611},"offer":{"value":"32","type":"%"},"quantity":"766"},{"size":"12","price":{"currency":"RS","mrp":"899","current":611},"offer":{"value":"32","type":"%"},"quantity":"65456"},{"size":"13","price":{"currency":"RS","mrp":"799","current":455},"offer":{"value":"43","type":"%"},"quantity":"2123"}],"color":"Black ","details":"Black dark wash 5-pocket mid-rise jeans, clean look with no fade, has a button and zip closure, waistband with belt loops\n\nSize & Fit\nSkinny Fit\nStretchable\nThe model (height 6') is wearing a size 32\n\nMaterial & Care\nCotton and elastane\nMachine-wash","ratings":3.5,"buyers":100,"gender":"1","category":"3","status":true},{"seller_id":"vela623@gmail.com","product_id":"a943a76c-d477-48f5-a90f-0db313628306","image":{"source":"https://iili.io/HvmMYHF.webp","alt":"Men Black Slim Fit Mid-Rise Clean Look Stretchable Jeans"},"brand":"Roadster","name":"Men Black Slim Fit Mid-Rise Clean Look Stretchable Jeans","varients":[{"size":"10","price":{"currency":"RS","mrp":"1119","current":862},"offer":{"value":"23","type":"%"},"quantity":"246"},{"size":"11","price":{"currency":"RS","mrp":"1129","current":497},"offer":{"value":"56","type":"%"},"quantity":"245"},{"size":"12","price":{"currency":"RS","mrp":"1239","current":706},"offer":{"value":"43","type":"%"},"quantity":"245"},{"size":"13","price":{"currency":"RS","mrp":"1249","current":849},"offer":{"value":"32","type":"%"},"quantity":"2355"},{"size":"14","price":{"currency":"RS","mrp":"1256","current":842},"offer":{"value":"33","type":"%"},"quantity":"234324"}],"color":"Black","details":"Black dark wash 5-pocket mid-rise jeans, clean look with no fade, has a button and zip closure, waistband with belt loops\n\nSize & Fit\nSlim fit\nStretchable\nThe model (height 6') is wearing a size 32\n\nMaterial & Care\n98% Cotton, 2% elastane\nMachine-wash","ratings":3.5,"buyers":100,"gender":"1","category":"3","status":true},{"seller_id":"vela623@gmail.com","product_id":"e1015ccf-5b9e-40ab-ba02-6265bcff1adb","image":{"source":"https://iili.io/Hvm4YtR.webp","alt":"Women Pure Cotton T-shirt"},"brand":"Roadster","name":"Women Pure Cotton T-shirt","varients":[{"size":"1","price":{"currency":"RS","mrp":"589","current":430},"offer":{"value":"27","type":"%"},"quantity":"23678"},{"size":"2","price":{"currency":"RS","mrp":"569","current":410},"offer":{"value":"28","type":"%"},"quantity":"257"},{"size":"3","price":{"currency":"RS","mrp":"479","current":345},"offer":{"value":"28","type":"%"},"quantity":"267"},{"size":"4","price":{"currency":"RS","mrp":"459","current":202},"offer":{"value":"56","type":"%"},"quantity":"1349"}],"color":"Light blue","details":"solid T-shirt, has a round neck, short sleeves\n\nSize & Fit\nThe model (height 5'8\") is wearing a size S\n\nMaterial & Care\n100% cotton\nMachine-wash","ratings":3.5,"buyers":100,"gender":"2","category":"6","status":true},{"seller_id":"vela623@gmail.com","product_id":"bd065dfb-2bff-434f-8e35-1e4da38296b1","image":{"source":"https://iili.io/Hvm4cnp.webp","alt":"Women Typography Pure Cotton T-shirt"},"brand":"DILLINGER","name":"Women Typography Pure Cotton T-shirt","varients":[{"size":"2","price":{"currency":"RS","mrp":"549","current":302},"offer":{"value":"45","type":"%"},"quantity":"389"},{"size":"3","price":{"currency":"RS","mrp":"529","current":196},"offer":{"value":"63","type":"%"},"quantity":"379"},{"size":"4","price":{"currency":"RS","mrp":"539","current":205},"offer":{"value":"62","type":"%"},"quantity":"478"},{"size":"5","price":{"currency":"RS","mrp":"549","current":264},"offer":{"value":"52","type":"%"},"quantity":"3678"},{"size":"6","price":{"currency":"RS","mrp":"569","current":273},"offer":{"value":"52","type":"%"},"quantity":"564"}],"color":"Navy Blue","details":"Navy Blue Tshirt for women\nTypography printed\nLongline length\nRound neck\nShort, drop-shoulder sleeves\nKnitted cotton fabric\n\nSize & Fit\nOversized\nThe model (height 5'8) is wearing a size S\n\nMaterial & Care\n100% cotton\nMachine wash","ratings":3.5,"buyers":100,"gender":"2","category":"6","status":true},{"seller_id":"vela623@gmail.com","product_id":"8b99c4db-395b-4f39-8c5a-4893f53edd46","image":{"source":"https://iili.io/Hvm4lMN.webp","alt":"Women Black Lightweight Solid Round Neck T-shirt"},"brand":" Mast & Harbour","name":"Women Black Lightweight Solid Round Neck T-shirt","varients":[{"size":"2","price":{"currency":"RS","mrp":"689","current":358},"offer":{"value":"48","type":"%"},"quantity":"25457"},{"size":"3","price":{"currency":"RS","mrp":"669","current":294},"offer":{"value":"56","type":"%"},"quantity":"3656"},{"size":"4","price":{"currency":"RS","mrp":"665","current":233},"offer":{"value":"65","type":"%"},"quantity":"4667"},{"size":"5","price":{"currency":"RS","mrp":"663","current":232},"offer":{"value":"65","type":"%"},"quantity":"1445"}],"color":"Black","details":"Black solid T-shirt, has a round neck, short sleeves\n\nSize & Fit\nThe model (height 5'8\") is wearing a size S\n\nMaterial & Care\n95% cotton, 5% elastane\nMachine-wash","ratings":3.5,"buyers":100,"gender":"2","category":"6","status":true},{"seller_id":"vela623@gmail.com","product_id":"fcfc9a69-16a3-4d72-b383-3d78a3a9032f","image":{"source":"https://iili.io/HvmpjDP.webp","alt":"Black Accordion Pleated A-Line Midi Skirt"},"brand":" Oxolloxo","name":"Black Accordion Pleated A-Line Midi Skirt","varients":[{"size":"9","price":{"currency":"RS","mrp":"359","current":280},"offer":{"value":"22","type":"%"},"quantity":"7665"},{"size":"10","price":{"currency":"RS","mrp":"389","current":265},"offer":{"value":"32","type":"%"},"quantity":"243"},{"size":"11","price":{"currency":"RS","mrp":"479","current":316},"offer":{"value":"34","type":"%"},"quantity":"453"},{"size":"12","price":{"currency":"RS","mrp":"455","current":278},"offer":{"value":"39","type":"%"},"quantity":"23234"}],"color":"Black","details":"Black solid accordion pleated A-line midi skirt, has an elasticated waistband with slip-on closure, flared hem\nSize & Fit\nThe model (height 5'8'') is wearing a size 28\n\nMaterial & Care\nPolyester\nMachine wash\nDo not bleach\nDo not tumble dry\nCool iron\nDry cleanable","ratings":3.5,"buyers":100,"gender":"2","category":"5","status":true},{"seller_id":"vela623@gmail.com","product_id":"908af5ac-6d4a-45db-b9dc-0f68590340e4","image":{"source":"https://iili.io/HvmphOB.webp","alt":"Women Black Solid Casual-Fit A-Line Midi Skirt"},"brand":"Tokyo Talkies","name":"Women Black Solid Casual-Fit A-Line Midi Skirt","varients":[{"size":"8","price":{"currency":"RS","mrp":"589","current":271},"offer":{"value":"54","type":"%"},"quantity":"768"},{"size":"9","price":{"currency":"RS","mrp":"569","current":273},"offer":{"value":"52","type":"%"},"quantity":"453"}],"color":"Black","details":"Black solid casual-fit A-line midi skirt with tie-up detail, has a waistband with slip-on closure and a flared hem\n\nSize & Fit\nCasual-fit\nThe model (height 5'8\") is wearing size 28\n\nMaterial & Care\nViscose\nMachine-wash","ratings":3.5,"buyers":100,"gender":"2","category":"5","status":true},{"seller_id":"vela623@gmail.com","product_id":"148fd842-8c32-4b2f-b2cb-97d25ceb3349","image":{"source":"https://iili.io/HvmpXRV.webp","alt":"Self Design Pencil Skirt"},"brand":"Allen Solly","name":"Self Design Pencil Skirt","varients":[{"size":"11","price":{"currency":"RS","mrp":"742","current":579},"offer":{"value":"22","type":"%"},"quantity":"534"},{"size":"12","price":{"currency":"RS","mrp":"758","current":417},"offer":{"value":"45","type":"%"},"quantity":"443"},{"size":"13","price":{"currency":"RS","mrp":"765","current":520},"offer":{"value":"32","type":"%"},"quantity":"6556"}],"color":"Grey","details":"Grey self design pencil skirt, has an elasticated waistband with slip-on closure, and a straight hem\n\n\nSize & Fit\nThe model (height 5'8\") is wearing size 26\n\n\nMaterial & Care\n64% Polyester and 33% Viscose and 3% Spandex\nMachine wash","ratings":3.5,"buyers":100,"gender":"2","category":"5","status":true}]

const category_data = [{"seller_id":"vela623@gmail.com","category":"T-shirts","id":1,"gender":"1","status":true},{"seller_id":"vela623@gmail.com","category":"Shirts","id":2,"gender":"1","status":true},{"seller_id":"vela623@gmail.com","category":"Jeans","id":3,"gender":"1","status":true},{"seller_id":"vela623@gmail.com","category":"Shorts","id":4,"gender":"1","status":true},{"seller_id":"vela623@gmail.com","category":"Skirts","id":5,"gender":"2","status":true},{"seller_id":"vela623@gmail.com","category":"T-shirts","id":6,"gender":"2","status":true},{"seller_id":"vela623@gmail.com","category":"Pants","id":7,"gender":"3","status":true},{"seller_id":"vela623@gmail.com","category":"shirts","id":8,"gender":"3","status":true}];



const address_data = [{"email_id":"surya.umapathy@ctr.freshworks.com","address":[{"address_id":1,"title":"Home","streetaddress":"No 114, valluvan street, otteri","landmark":"near school","city":" Chennai","pincode":"600012","state":"Tamilnadu","country":"India","mobile_number":"9789853625","status":"default"}]}]


if (!user_list) {
  localStorage.setItem("user_list", JSON.stringify(user_data));
}

if (!gender_list) {
  localStorage.setItem("gender_list", JSON.stringify(gender_data));
}

if (!size_list) {
  localStorage.setItem("size_list", JSON.stringify(size_data));
}

if (!product_list) {
  localStorage.setItem("product_list", JSON.stringify(product_data));
}

if (!category_list) {
  localStorage.setItem("category_list", JSON.stringify(category_data));
}

if(!address_list){
  localStorage.setItem("address_list", JSON.stringify(address_data));
}

