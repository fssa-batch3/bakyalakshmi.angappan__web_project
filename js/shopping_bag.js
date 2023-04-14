let localproducts = JSON.parse(localStorage.getItem("product_list"));
let localbag = JSON.parse(localStorage.getItem("bag"));
console.log(localbag);

let localunique_id = JSON.parse(localStorage.getItem("unique_id"));
let localsize = JSON.parse(localStorage.getItem("size_list"));

let filtereduser_bag = localbag.filter(e => e.user_id == localunique_id)
console.log(filtereduser_bag)

if (filtereduser_bag.length == undefined || filtereduser_bag.length == null) {
    let createp = document.createElement("p");
    console.log(createp)
    createp.innerText = "there is no products in the bag";
    document.querySelector(".order_list").append(createp);
}

let empty = [];
for (i = 0; i < filtereduser_bag.length; i++) {

    for (j = 0; j < filtereduser_bag.length; j++) {
        let find_product = localproducts.find(e => e.product_id == filtereduser_bag[j]["product_id"]);
        empty.push(find_product);
    }

    let quantity = filtereduser_bag[i]["quantity"]
    let current_price = empty[i]["price"]["current"]

    let product_qty_price = quantity * current_price

    // console.log(empty);


    const urlParams = new URLSearchParams(window.location.search);

    const urlsize = urlParams.get('sizeid')

    let productsize = localsize.find(e => e.id = urlsize)

    let template_bag = `

<div class="order_details">

<div class="x-mark"  data-id="${localbag[i]["bag_id"]}">
        <i class="fa-solid fa-xmark"></i>
</div>

<div class="product_thumbnail">
    <a href="../products/product details/mens_product_details/product_details-men-jean2.html">
        <img src= "${empty[i]["image"]["source"]}" alt="${empty[i]["image"]["alt"]}">
    </a>
</div>

<div class="product_list">

    <div class="product_details">
        <h4 class="brand_name">${empty[i]["brand"]}</h4>
        <p class="product_name">${empty[i]["name"]}</p>
    </div>

    <div>
        <label><b>Size:</b></label>
        <span>s</span>

        <label><b>Qty:</b></label>
        <input type="number" id="quantity" min="1" default='1' value="${localbag[i]["quantity"]}" data-bag_id =${localbag[i]["bag_id"]} />

    </div>

    <div>
        <span class="product_price">${empty[i]["price"]["currency"] + "."}${product_qty_price}</span> 
        <span class="original_price"><del>${empty[i]["price"]["currency"] + "." + empty[i]["price"]["mrp"]}</del></span>
        <span class="product_offer"> (${empty[i]["price"]["offer"]["value"]} % off)</span>
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


let sum = 0
for (i = 0; i < filtereduser_bag.length; i++) {
    for (j = 0; j < empty.length; j++) {
        sum += filtereduser_bag[i]["quantity"] * empty[i]["price"]["current"];
        break;
    }
}

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
                        <td>Rs.${sum}</td>
                    </tr>

                    <tr>
                        <td>delivery fee</td>
                        <td>free</td>
                    </tr>


                    <tr>
                        <td>total amount</td>
                        <td>Rs.${sum}</td>
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



// <div class="x-mark">
//     <a href="../homepage/homepage.html">
//         <i class="fa-solid fa-xmark"></i>
//     </a>
// </div>

let quantity = document.querySelector("#quantity")
let inputqtyvalue = 0
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








