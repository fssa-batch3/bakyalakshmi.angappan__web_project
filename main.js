const user_list = JSON.parse(localStorage.getItem("user_list"));
const gender_list = JSON.parse(localStorage.getItem("gender_list"));
const size_list = JSON.parse(localStorage.getItem("size_list"));
const product_list = JSON.parse(localStorage.getItem("product_list"));
const category_list = JSON.parse(localStorage.getItem("category_list"));
const address_list = JSON.parse(localStorage.getItem("address_list"));
const seller_list = JSON.parse(localStorage.getItem("seller_list"));

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

const product_data = [
  {
    seller_id: "vela623@gmail.com",
    product_id: "fd5c2ea9-46f2-4e9d-90d6-ed4dce95c7fd",
    image: {
      source: "https://iili.io/HvByRhQ.webp",
      alt: "Typography Printed Cotton Casual T-Shirt",
    },
    brand: "LABS",
    name: "Typography Printed Cotton Casual T-Shirt",
    varients: [
      {
        size: 1,
        price: { currency: "RS", mrp: 259, current: 223 },
        offer: { value: 14, type: "%" },
        quantity: 40,
      },
      {
        size: 2,
        price: { currency: "RS", mrp: 299, current: 212 },
        offer: { value: 29, type: "%" },
        quantity: 20,
      },
      {
        size: 3,
        price: { currency: "RS", mrp: 399, current: 279 },
        offer: { value: 30, type: "%" },
        quantity: 14,
      },
      {
        size: 4,
        price: { currency: "RS", mrp: 399, current: 351 },
        offer: { value: 12, type: "%" },
        quantity: 12,
      },
    ],
    color: "red",
    details:
      "The typography printed cotton casual t-shirt is a comfortable and stylish piece of clothing made from soft and breathable cotton fabric. It features a unique typographic design printed on the front or back of the t-shirt, adding a touch of personality and creativity to your outfit.",
    pattern: "solidcolor",
    fit: "Regular Fit",
    material: "cotton",
    length: "Regular",
    neckline: "Crew Neck",
    sleeve: "Short Sleeve",
    occasion: "casual",
    care: "Machine Wash",
    ratings: 3.5,
    buyers: 100,
    gender: 1,
    category: 1,
    status: true,
  },
  {
    seller_id: "vela623@gmail.com",
    product_id: "16ea1674-7675-40fc-bc42-bdc288b263a9",
    image: {
      source: "https://iili.io/HSI63ua.webp",
      alt: "Men Beige Solid Round Neck T-shirt",
    },
    brand: "Roadster",
    name: "Men Beige Solid Round Neck T-shirt",
    varients: [
      {
        size: 1,
        price: { currency: "RS", mrp: 299, current: 155 },
        offer: { value: 48, type: "%" },
        quantity: 40,
      },
      {
        size: 2,
        price: { currency: "RS", mrp: 299, current: 144 },
        offer: { value: 52, type: "%" },
        quantity: 30,
      },
      {
        size: 3,
        price: { currency: "RS", mrp: 399, current: 176 },
        offer: { value: 56, type: "%" },
        quantity: 0,
      },
      {
        size: 4,
        price: { currency: "RS", mrp: 399, current: 219 },
        offer: { value: 45, type: "%" },
        quantity: 20,
      },
      {
        size: 5,
        price: { currency: "RS", mrp: 499, current: 329 },
        offer: { value: 34, type: "%" },
        quantity: 10,
      },
    ],
    color: "white",
    details:
      "The Roadster Men Beige Solid Round Neck T-shirt is a must-have wardrobe essential for men seeking a simple yet stylish casual look. This beige t-shirt is crafted with a meticulous attention to detail, ensuring both comfort and style.",
    pattern: "solidcolor",
    fit: "Regular Fit",
    material: "cotton",
    length: "Regular",
    neckline: "Crew Neck",
    sleeve: "Short Sleeve",
    occasion: "casual",
    care: "Machine Wash",
    ratings: 3.5,
    buyers: 100,
    gender: 1,
    category: 1,
    status: true,
  },
  {
    seller_id: "vela623@gmail.com",
    product_id: "da0779aa-227e-4e3d-bfe8-8a53f498d414",
    image: {
      source: "https://iili.io/HSI6dyg.webp",
      alt: "Men Olive Green Raw Edge Cotton Pure Cotton T-shirt",
    },
    brand: "parx",
    name: "Men Olive Green Raw Edge Cotton Pure Cotton T-shirt",
    varients: [
      {
        size: 2,
        price: { currency: "RS", mrp: 499, current: 444 },
        offer: { value: 11, type: "%" },
        quantity: 0,
      },
      {
        size: 3,
        price: { currency: "RS", mrp: 599, current: 527 },
        offer: { value: 12, type: "%" },
        quantity: 10,
      },
    ],
    color: "olive",
    details:
      "The Men Olive Green Raw Edge Cotton Pure Cotton T-shirt is a stylish and rugged piece of clothing designed for men who appreciate a laid-back and edgy aesthetic. The t-shirt features a unique combination of olive green color and raw edge detailing, adding a touch of individuality to your casual ensemble.",
    pattern: "solidcolor",
    fit: "Slim Fit",
    material: "cotton",
    length: "Regular",
    neckline: "Crew Neck",
    sleeve: "Short Sleeve",
    occasion: "casual",
    care: "Machine Wash",
    ratings: 3.5,
    buyers: 100,
    gender: 1,
    category: 1,
    status: true,
  },
  {
    seller_id: "vela623@gmail.com",
    product_id: "e11ea6aa-5ae6-46db-a557-2ee5bbda9a4e",
    image: {
      source: "https://iili.io/HvmlzOv.webp",
      alt: "Men Green & Black Slim Fit Checked Casual Shirt",
    },
    brand: "The Indian Garage Co ",
    name: "Men Green & Black Slim Fit Checked Casual Shirt",
    varients: [
      {
        size: 1,
        price: { currency: "RS", mrp: 299, current: 173 },
        offer: { value: 42, type: "%" },
        quantity: 11,
      },
      {
        size: 2,
        price: { currency: "RS", mrp: 399, current: 219 },
        offer: { value: 45, type: "%" },
        quantity: 13,
      },
      {
        size: 3,
        price: { currency: "RS", mrp: 399, current: 215 },
        offer: { value: 46, type: "%" },
        quantity: 8,
      },
      {
        size: 4,
        price: { currency: "RS", mrp: 499, current: 299 },
        offer: { value: 40, type: "%" },
        quantity: 19,
      },
      {
        size: 5,
        price: { currency: "RS", mrp: 499, current: 349 },
        offer: { value: 30, type: "%" },
        quantity: 10,
      },
    ],
    color: "green",
    details:
      "The Men Green & Black Slim Fit Checked Casual Shirt is a stylish and versatile piece of clothing designed for men who appreciate a modern and trendy look. This shirt features a combination of green and black colors in a checked pattern, creating a visually appealing and fashionable design.",
    pattern: "checks",
    fit: "Regular Fit",
    material: "cotton",
    length: "Regular",
    neckline: "Collared Neck",
    sleeve: "Long Sleeve",
    occasion: "casual",
    care: "Machine Wash",
    ratings: 3.5,
    buyers: 100,
    gender: 1,
    category: 2,
    status: true,
  },
  {
    seller_id: "vela623@gmail.com",
    product_id: "b7905df1-21c9-4bd9-bf22-c28f93525c95",
    image: {
      source: "https://iili.io/HvmlVX2.webp",
      alt: " Men Maroon Pure Cotton Sustainable Casual Shirt",
    },
    brand: "HERE&NOW",
    name: " Men Maroon Pure Cotton Sustainable Casual Shirt",
    varients: [
      {
        size: 2,
        price: { currency: "RS", mrp: 432, current: 259 },
        offer: { value: 40, type: "%" },
        quantity: 18,
      },
      {
        size: 3,
        price: { currency: "RS", mrp: 450, current: 279 },
        offer: { value: 38, type: "%" },
        quantity: 17,
      },
      {
        size: 4,
        price: { currency: "RS", mrp: 499, current: 339 },
        offer: { value: 32, type: "%" },
        quantity: 8,
      },
      {
        size: 5,
        price: { currency: "RS", mrp: 562, current: 388 },
        offer: { value: 31, type: "%" },
        quantity: 7,
      },
      {
        size: 6,
        price: { currency: "RS", mrp: 569, current: 472 },
        offer: { value: 17, type: "%" },
        quantity: 10,
      },
    ],
    color: "maroon",
    details:
      "The Men Maroon Pure Cotton Sustainable Casual Shirt is a stylish and eco-friendly clothing option designed for men who prioritize sustainability and fashion. This shirt combines a rich maroon color with a pure cotton fabric, ensuring both comfort and environmental consciousness.",
    pattern: "solidcolor",
    fit: "Slim Fit",
    material: "cotton",
    length: "Regular",
    neckline: "Collared Neck",
    sleeve: "Long Sleeve",
    occasion: "casual",
    care: "Machine Wash",
    ratings: 3.5,
    buyers: 100,
    gender: 1,
    category: 2,
    status: true,
  },
  {
    seller_id: "vela623@gmail.com",
    product_id: "21246176-4cad-4225-b2fb-c85be2f085ef",
    image: {
      source: "https://iili.io/HvmlMzl.webp",
      alt: "Men Pink Slim Fit Solid Casual Shirt",
    },
    brand: "WROGN ",
    name: "Men Pink Slim Fit Solid Casual Shirt",
    varients: [
      {
        size: 1,
        price: { currency: "RS", mrp: 529, current: 423 },
        offer: { value: 20, type: "%" },
        quantity: 12,
      },
      {
        size: 2,
        price: { currency: "RS", mrp: 539, current: 442 },
        offer: { value: 18, type: "%" },
        quantity: 11,
      },
      {
        size: 3,
        price: { currency: "RS", mrp: 549, current: 461 },
        offer: { value: 16, type: "%" },
        quantity: 23,
      },
      {
        size: 4,
        price: { currency: "RS", mrp: 599, current: 509 },
        offer: { value: 15, type: "%" },
        quantity: 15,
      },
      {
        size: 5,
        price: { currency: "RS", mrp: 499, current: 484 },
        offer: { value: 3, type: "%" },
        quantity: 10,
      },
    ],
    color: "pink",
    details:
      "The Men Pink Slim Fit Solid Casual Shirt is a stylish and contemporary wardrobe essential. With its solid pink color, this shirt adds a vibrant and trendy element to your casual outfits. Designed with a slim fit silhouette, it offers a modern and tailored look that flatters the body. Made from high-quality fabric, it ensures comfort and durability. This versatile shirt can be easily paired with jeans or chinos, making it a versatile choice for various occasions. Whether you want to make a bold fashion statement or simply add a touch of color to your ensemble, this pink casual shirt is a fashionable and versatile option.",
    pattern: "solidcolor",
    fit: "Slim Fit",
    material: "cotton",
    length: "Regular",
    neckline: "Collared Neck",
    sleeve: "Long Sleeve",
    occasion: "formal",
    care: "Machine Wash",
    ratings: 3.5,
    buyers: 100,
    gender: 1,
    category: 2,
    status: true,
  },
  {
    seller_id: "vela623@gmail.com",
    product_id: "5e3bda08-8b99-4a3f-9418-c224eda69a56",
    image: {
      source: "https://iili.io/HvmMcNa.webp",
      alt: "Men Black Slim Fit Mid-Rise Clean Look Stretchable Jeans",
    },
    brand: "Urbano Fashion",
    name: "Men Black Slim Fit Mid-Rise Clean Look Stretchable Jeans",
    varients: [
      {
        size: 8,
        price: { currency: "RS", mrp: 667, current: 527 },
        offer: { value: 21, type: "%" },
        quantity: 21,
      },
      {
        size: 9,
        price: { currency: "RS", mrp: 567, current: 454 },
        offer: { value: 20, type: "%" },
        quantity: 2,
      },
      {
        size: 10,
        price: { currency: "RS", mrp: 688, current: 516 },
        offer: { value: 25, type: "%" },
        quantity: 12,
      },
    ],
    color: "black",
    details:
      "\nThe Men Black Slim Fit Mid-Rise Clean Look Stretchable Jeans are a stylish and comfortable choice for men seeking a sleek and modern denim option. These jeans feature a slim fit and a mid-rise waist, offering a flattering and contemporary silhouette.",
    pattern: "solidcolor",
    fit: "Slim Fit",
    material: "cotton",
    length: "full-length",
    closure: "zippers",
    rise: "mid-rise",
    occasion: "casual",
    care: "Machine Wash",
    ratings: 3.5,
    buyers: 100,
    gender: 1,
    category: 3,
    status: true,
  },
  {
    seller_id: "vela623@gmail.com",
    product_id: "e890205f-6b5d-42b5-8c42-6d74b2021b05",
    image: {
      source: "https://iili.io/HvmMaAg.webp",
      alt: "Men Black Slim Fit Mid-Rise Clean Look Cropped Jeans",
    },
    brand: "Roadster",
    name: "Men Black Slim Fit Mid-Rise Clean Look Cropped Jeans",
    varients: [
      {
        size: 8,
        price: { currency: "RS", mrp: 598, current: 454 },
        offer: { value: 24, type: "%" },
        quantity: 21,
      },
      {
        size: 9,
        price: { currency: "RS", mrp: 589, current: 465 },
        offer: { value: 21, type: "%" },
        quantity: 17,
      },
      {
        size: 10,
        price: { currency: "RS", mrp: 567, current: 499 },
        offer: { value: 12, type: "%" },
        quantity: 12,
      },
    ],
    color: "black",
    details:
      "Crafted from high-quality denim fabric, these jeans offer both style and comfort. The black color adds a sleek and versatile element to the jeans, making them suitable for a variety of occasions and outfit combinations. Black is a timeless hue that pairs well with a range of tops and shoes, allowing for effortless styling.\n\n",
    pattern: "solidcolor",
    fit: "Cropped Fit",
    material: "cotton",
    length: "Regular",
    closure: "zippers",
    rise: "low-rise",
    occasion: "casual",
    care: "Dry Clean",
    ratings: 3.5,
    buyers: 100,
    gender: 1,
    category: 3,
    status: true,
  },
  {
    seller_id: "vela623@gmail.com",
    product_id: "41a3a810-e35d-4749-aea8-9ce4e64c0d09",
    image: {
      source: "https://iili.io/Hvuopee.webp",
      alt: "Men Black Slim Fit Mid-Rise Clean Look Jeans",
    },
    brand: "WROGN",
    name: "Men Black Slim Fit Mid-Rise Clean Look Jeans",
    varients: [
      {
        size: 9,
        price: { currency: "RS", mrp: 877, current: 675 },
        offer: { value: 23, type: "%" },
        quantity: 23,
      },
      {
        size: 10,
        price: { currency: "RS", mrp: 789, current: 694 },
        offer: { value: 12, type: "%" },
        quantity: 12,
      },
      {
        size: 11,
        price: { currency: "RS", mrp: 657, current: 519 },
        offer: { value: 21, type: "%" },
        quantity: 43,
      },
    ],
    color: "black",
    details:
      "The Men Black Slim Fit Mid-Rise Clean Look Jeans are a versatile and stylish choice for men seeking a classic denim look. These jeans are designed with a slim fit, hugging the legs without being too tight, and featuring a mid-rise waist that sits comfortably on the hips.",
    pattern: "solidcolor",
    fit: "Slim Fit",
    material: "cotton",
    length: "Regular",
    closure: "zippers",
    rise: "mid-rise",
    occasion: "casual",
    care: "Machine Wash",
    ratings: 3.5,
    buyers: 100,
    gender: 1,
    category: 3,
    status: true,
  },
  {
    seller_id: "vela623@gmail.com",
    product_id: "5a9daa58-7c9b-4bba-9987-9819d0273f9e",
    image: {
      source: "https://iili.io/HvmpjDP.webp",
      alt: "Black Accordian Pleat Maxi Flared Skirt",
    },
    brand: "SASSAFRAS",
    name: "Black Accordian Pleat Maxi Flared Skirt",
    varients: [
      {
        size: 9,
        price: { currency: "RS", mrp: 527, current: 490 },
        offer: { value: 7, type: "%" },
        quantity: 13,
      },
      {
        size: 10,
        price: { currency: "RS", mrp: 531, current: 499 },
        offer: { value: 6, type: "%" },
        quantity: 1,
      },
      {
        size: 11,
        price: { currency: "RS", mrp: 542, current: 520 },
        offer: { value: 4, type: "%" },
        quantity: 2,
      },
      {
        size: 12,
        price: { currency: "RS", mrp: 568, current: 562 },
        offer: { value: 1, type: "%" },
        quantity: 21,
      },
    ],
    color: "black",
    details:
      "Crafted in a versatile black color, this skirt offers endless styling possibilities. Black is a timeless and versatile hue that effortlessly complements a wide range of tops and accessories, allowing you to create both casual and more formal looks with ease.",
    pattern: "solidcolor",
    fit: "Flared Fit",
    material: "polyester",
    length: "Regular",
    closure: "buttons",
    rise: "mid-rise",
    occasion: "summer",
    care: "Machine Wash",
    ratings: 3.5,
    buyers: 100,
    gender: 2,
    category: 4,
    status: true,
  },
  {
    seller_id: "vela623@gmail.com",
    product_id: "af05fffb-9808-49b5-bbf6-0036fc5e8e03",
    image: {
      source: "https://iili.io/HvmphOB.webp",
      alt: " Women black Flared Wrap-On Skirt Palazzos",
    },
    brand: "La Zoire",
    name: " Women black Flared Wrap-On Skirt Palazzos",
    varients: [
      {
        size: 9,
        price: { currency: "RS", mrp: 679, current: 536 },
        offer: { value: 21, type: "%" },
        quantity: 12,
      },
      {
        size: 10,
        price: { currency: "RS", mrp: 676, current: 595 },
        offer: { value: 12, type: "%" },
        quantity: 32,
      },
    ],
    color: "black",
    details:
      "The skirt palazzos feature a wrap-on design, allowing you to adjust the fit and tie it around your waist for a customized and comfortable fit. The black color adds a sleek and sophisticated touch, making it easy to pair with various tops and accessories.",
    pattern: "solidcolor",
    fit: "Flared Fit",
    material: "polyester",
    length: "Regular",
    closure: "buttons",
    rise: "mid-rise",
    occasion: "summer",
    care: "Machine Wash",
    ratings: 3.5,
    buyers: 100,
    gender: 2,
    category: 4,
    status: true,
  },
  {
    seller_id: "vela623@gmail.com",
    product_id: "4fe8bde0-4b02-45a6-90ec-f35c62ac4312",
    image: {
      source: "https://iili.io/HvmpXRV.webp",
      alt: "Women Grey Solid Above-Knee Length Pencil Skirt",
    },
    brand: " TAG 7 ",
    name: "Women Grey Solid Above-Knee Length Pencil Skirt",
    varients: [
      {
        size: 8,
        price: { currency: "RS", mrp: 399, current: 279 },
        offer: { value: 30, type: "%" },
        quantity: 1,
      },
      {
        size: 9,
        price: { currency: "RS", mrp: 499, current: 319 },
        offer: { value: 36, type: "%" },
        quantity: 12,
      },
      {
        size: 10,
        price: { currency: "RS", mrp: 599, current: 246 },
        offer: { value: 59, type: "%" },
        quantity: 22,
      },
    ],
    color: "gray",
    details:
      "The pencil silhouette of the skirt creates a sleek and tailored look. It follows the natural curves of the body, accentuating the feminine figure and providing a flattering fit. The slim fit design is both chic and professional, making it suitable for both formal and business-casual settings.",
    pattern: "solidcolor",
    fit: "Fitted",
    material: "cotton",
    length: "Above-Knee-length",
    closure: "buttons",
    rise: "high-rise",
    occasion: "formal",
    care: "Machine Wash",
    ratings: 3.5,
    buyers: 100,
    gender: 2,
    category: 4,
    status: true,
  },
  {
    seller_id: "vela623@gmail.com",
    product_id: "b0e93141-e877-4eb8-a361-a23c21178b35",
    image: {
      source: "https://iili.io/Hvm4cnp.webp",
      alt: " Women Grey Printed Round Neck T-shirt",
    },
    brand: " Roadster",
    name: " Women Grey Printed Round Neck T-shirt",
    varients: [
      {
        size: 2,
        price: { currency: "RS", mrp: 349, current: 269 },
        offer: { value: 23, type: "%" },
        quantity: 2,
      },
      {
        size: 3,
        price: { currency: "RS", mrp: 359, current: 237 },
        offer: { value: 34, type: "%" },
        quantity: 12,
      },
      {
        size: 4,
        price: { currency: "RS", mrp: 499, current: 329 },
        offer: { value: 34, type: "%" },
        quantity: 12,
      },
    ],
    color: "blue",
    details:
      "The crewneck design of the t-shirt offers a classic and flattering neckline. It suits different body shapes and can be easily layered with jackets, cardigans, or statement necklaces for added style. The crew neck also gives the t-shirt a casual and relaxed vibe, perfect for everyday wear.",
    pattern: "solidcolor",
    fit: "Slim Fit",
    material: "cotton",
    length: "Regular",
    neckline: "Crew Neck",
    sleeve: "Short Sleeve",
    occasion: "casual",
    care: "Machine Wash",
    ratings: 3.5,
    buyers: 100,
    gender: 2,
    category: 5,
    status: true,
  },
  {
    seller_id: "vela623@gmail.com",
    product_id: "a1f65a40-d99c-4a82-a474-91ce271de4f5",
    image: {
      source: "https://iili.io/Hvm4YtR.webp",
      alt: "Women Striped V-Neck Pure Cotton T-shirt",
    },
    brand: "Mast & Harbour",
    name: "Women Striped V-Neck Pure Cotton T-shirt",
    varients: [
      {
        size: 1,
        price: { currency: "RS", mrp: 445, current: 392 },
        offer: { value: 12, type: "%" },
        quantity: 32,
      },
      {
        size: 2,
        price: { currency: "RS", mrp: 543, current: 424 },
        offer: { value: 22, type: "%" },
        quantity: 21,
      },
    ],
    color: "black",
    details:
      "The striped pattern on the t-shirt adds visual interest and a sense of timeless elegance. Whether the stripes are horizontal or vertical, they create a flattering and elongating effect, making the t-shirt universally flattering for different body shapes. The stripes can be bold and contrasting or subtle and understated, allowing you to choose a style that suits your personal taste.",
    pattern: "stripes",
    fit: "Regular Fit",
    material: "cotton",
    length: "Regular",
    neckline: "V-Neck",
    sleeve: "Short Sleeve",
    occasion: "summer",
    care: "Machine Wash",
    ratings: 3.5,
    buyers: 100,
    gender: 2,
    category: 5,
    status: true,
  },
  {
    seller_id: "vela623@gmail.com",
    product_id: "586de525-b167-44f5-825b-713ce5717242",
    image: {
      source: "https://iili.io/Hvm4lMN.webp",
      alt: "Women Navy Blue Pure Cotton Printed V-Neck T-shirt",
    },
    brand: "Nautica",
    name: "Women Navy Blue Pure Cotton Printed V-Neck T-shirt",
    varients: [
      {
        size: 1,
        price: { currency: "RS", mrp: 466, current: 238 },
        offer: { value: 49, type: "%" },
        quantity: 3,
      },
      {
        size: 2,
        price: { currency: "RS", mrp: 477, current: 267 },
        offer: { value: 44, type: "%" },
        quantity: 0,
      },
      {
        size: 3,
        price: { currency: "RS", mrp: 599, current: 533 },
        offer: { value: 11, type: "%" },
        quantity: 23,
      },
      {
        size: 4,
        price: { currency: "RS", mrp: 488, current: 429 },
        offer: { value: 12, type: "%" },
        quantity: 12,
      },
    ],
    color: "blue",
    details:
      "The Women Navy Blue Pure Cotton Printed V-Neck T-shirt is a stylish and versatile piece that combines comfort and fashion. This t-shirt features a V-neckline and is adorned with a printed pattern in navy blue and white, adding a touch of charm and personality to your outfit.",
    pattern: "solidcolor",
    fit: "Regular Fit",
    material: "cotton",
    length: "Regular",
    neckline: "V-Neck",
    sleeve: "Short Sleeve",
    occasion: "summer",
    care: "Dry Clean",
    ratings: 3.5,
    buyers: 100,
    gender: 2,
    category: 5,
    status: true,
  },
];

const category_data = [
  {
    seller_id: "vela623@gmail.com",
    category: "T-shirts",
    id: 1,
    gender: "1",
    status: true,
  },
  {
    seller_id: "vela623@gmail.com",
    category: "Shirts",
    id: 2,
    gender: "1",
    status: true,
  },
  {
    seller_id: "vela623@gmail.com",
    category: "Jeans",
    id: 3,
    gender: "1",
    status: true,
  },
  {
    seller_id: "vela623@gmail.com",
    category: "Skirts",
    id: 4,
    gender: "2",
    status: true,
  },
  {
    seller_id: "vela623@gmail.com",
    category: "T-shirts",
    id: 5,
    gender: "2",
    status: true,
  }
];

const address_data = [
  {
    email_id: "marion007@gmail.com",
    address: [
      {
        address_id: 1,
        title: "Home",
        streetaddress: "No 114, valluvan street, otteri",
        landmark: "near school",
        city: " Chennai",
        pincode: "600012",
        state: "Tamilnadu",
        country: "India",
        mobile_number: "9789853625",
        status: "default",
      },
    ],
  },
];

const seller_data = [
  {
    corporate_name: "Globus stores Private Ltd.",
    email: "vela623@gmail.com",
    mobile_number: "9789853625",
    password: "978985",
    re_enter_password: "978985",
    gender: "",
    dob: "",
    address: "",
    hintname: "",
    unique_id: "85de4666-38a8-46df-9159-5f482c8cf16d",
  },
];

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

if (!address_list) {
  localStorage.setItem("address_list", JSON.stringify(address_data));
}

if (!seller_list) {
  localStorage.setItem("seller_list", JSON.stringify(seller_data));
}
