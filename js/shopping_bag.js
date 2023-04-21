let localproducts = JSON.parse(localStorage.getItem("product_list"));

let localbag = JSON.parse(localStorage.getItem("bag"));
console.log(localbag);

let localunique_id = JSON.parse(localStorage.getItem("unique_id"));
let localsize = JSON.parse(localStorage.getItem("size_list"));

let filtereduser_bag = localbag.filter(e => e.user_id == localunique_id)
console.log(filtereduser_bag)

// let inputquantity = document.querySelector("#quantity").value

if (filtereduser_bag.length == undefined || filtereduser_bag.length == null) {
    let createp = document.createElement("p");
    console.log(createp)
    createp.innerText = "there is no products in the bag";
    document.querySelector(".order_list").append(createp);
}


let find_size_price = ""
let current_price = ""
for (i = 0; i < filtereduser_bag.length; i++) {

// finding product from local storage
    let find_product = localproducts.find(e => e.product_id == filtereduser_bag[i]["product_id"])
    console.log(find_product)
// finding size from localsize
    let find_size = localsize.find(e => e.id == filtereduser_bag[i]["size"])
    console.log(find_size)
// find size from find_product
let find_size_price = find_product["varients"].find(e => e.size == filtereduser_bag[i]["size"])
console.log(find_size_price)

// get price from find_product
let size_price = find_size_price["price"]["current"]
console.log(size_price)

  let size_quantity = filtereduser_bag[i]["quantity"]
    console.log(size_quantity)

let current_price = size_price * size_quantity 
console.log(current_price)


    let template_bag = `

<div class="order_details">

<div class="x-mark"  data-id="${localbag[i]["bag_id"]}">
        <i class="fa-solid fa-xmark"></i>
</div>

<div class="product_thumbnail">
    <a href="../products/product details/mens_product_details/product_details-men-jean2.html">
        <img src= "${find_product["image"]["source"]}" alt="${find_product["image"]["alt"]}">
    </a>
</div>

<div class="product_list">

    <div class="product_details">
        <h4 class="brand_name">${find_product["brand"]}</h4>
        <p class="product_name">${find_product["name"]}</p>
    </div>

    <div>
        <label><b>Size:</b></label>
        <span>${find_size["value"]}</span>

        <label><b>Qty:</b></label>
        <input type="number" id="quantity" min="1" default="1" value="${filtereduser_bag[i]["quantity"]}" data-bag_id =${localbag[i]["bag_id"]} />
    </div>

    <div>
        <span class="product_price">${find_size_price["price"]["currency"] + "." + current_price}</span> 
        <span class="original_price"><del>${find_size_price["price"]["currency"] + "." + find_size_price["price"]["mrp"]}</del></span>
        <span class="product_offer"> (${find_size_price["offer"]["value"]} % off)</span>
    </div>

    <div> 
        delivery by <span class="date">28 dec 2022</span>
    </div>

    <div class="buttons">
        <div>
            <a href="../orders/wishlist.html">
                 <button class="movetobag">move to wishlist</button>
            </a> 
        </div>
 
    </div>

</div>
</div>
`
    // qty display
    // <span>${localbag[i]["quantity"]}</span>
    document.querySelector(".order_list").insertAdjacentHTML("afterbegin", template_bag);

}



let inputquantity = document.querySelectorAll("#quantity");

// console.log(inputquantity)

inputquantity.forEach(qty =>

    qty.addEventListener("change", function (e) {

        e.preventDefault()

        let id = this.dataset.bag_id
        console.log(id)

        let foundbag_quantity = localbag.find(e => e.bag_id == id)
        console.log(foundbag_quantity)

        console.log(foundbag_quantity)
        foundbag_quantity["quantity"] = parseInt(e.target.value);

        console.log(foundbag_quantity)

        console.log("sgydgyagh")
    })
);



let sum = 0
for (i = 0; i < filtereduser_bag.length; i++) {
    // for (j = 0; j < .length; j++) {
        sum += filtereduser_bag[i]["quantity"] * find_size_price["price"]["current"];
        break;
    }


localStorage.setItem("bag", JSON.stringify(localbag))


let order = `
<div class="details">
            <h3>bag total</h3>
                <table>
                    <caption> </caption>
                    <tbody>
                        <tr>
                            <th></th>
                        </tr>
                    
                   
                    <tr class="table_row">
                        <td>sub-total</td>
                        <td>Rs.sum</td>
                    </tr>

                    <tr>
                        <td>delivery fee</td>
                        <td>free</td>
                    </tr>


                    <tr>
                        <td>total amount</td>
                        <td>Rs.sum</td>
                    </tr>

                </tbody>
                </table>
                
                <div class="placeorder">
                    <a href="../../pages/orders/order_list.html">
                        <button>place order</button>
                    </a>
                </div> 
            </div>      `

document.querySelector(".side_container").insertAdjacentHTML("afterbegin", order);

console.log(document.querySelector(".side_container"))


let quantity = document.querySelector("#quantity")
let inputqtyvalue = 0;
quantity.addEventListener("change", function (e) {

    let bag_uuid = this.dataset.bag_id
    console.log(bag_uuid)

    let findbag = localbag.find(e => e.bag_id == bag_uuid)
    console.log(findbag);

    inputqtyvalue += document.querySelector("#quantity").value

    findbag["quantity"] = inputqtyvalue;

    localStorage.setItem("bag", JSON.stringify(localbag));
    location.reload();
})
console.log(inputqtyvalue)

let remove = document.querySelectorAll(".x-mark")
remove.forEach(del =>
    del.addEventListener("click", function () {
        let bag_uuid = this.dataset.id
        console.log(bag_uuid)

        let find_bag = localbag.find(e => e.bag_id == bag_uuid)
        console.log(find_bag);

        let indexofbagprod = localbag.indexOf(find)
        console.log(indexofbagprod);

        localbag.splice(indexofbagprod, 1)

        localStorage.setItem("bag", JSON.stringify(localbag));
        location.reload();
    }
    )
)








