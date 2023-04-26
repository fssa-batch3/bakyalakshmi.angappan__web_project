let user_list = JSON.parse(localStorage.getItem("user_list"));


let uuid = JSON.parse(localStorage.getItem('unique_id'));

function profile_data(e) {
    return e.email == uuid;
}

let user_data = user_list.find(profile_data);
console.log(user_data)


let address = `

        <div class="address">
            <div>
                <p>Deliver to: ${user_data["full_name"]} </p>
                <p> ${user_data["address"]} </p>
            </div>

            <div><a href="../homepage/add_address.html"><button>change address</button></a></div>
        </div>
`

document.querySelector(".container").insertAdjacentHTML("afterbegin", address)

let localproducts = JSON.parse(localStorage.getItem("product_list"));

let localbag = JSON.parse(localStorage.getItem("bag")) || [];
console.log(localbag);

let localunique_id = "";
let localsize = "";
let filtereduser_bag = [];

if (localbag != null || localbag != undefined) {
     localunique_id = JSON.parse(localStorage.getItem("unique_id"));
     localsize = JSON.parse(localStorage.getItem("size_list"));

    filtereduser_bag = localbag.filter(e => e.user_id == localunique_id)
    console.log(filtereduser_bag)
}

console.log(localunique_id)
console.log(filtereduser_bag)


// let inputquantity = document.querySelector("#quantity").value

let pr = document.querySelector(".container")
if (filtereduser_bag.length === 0) {

let createp = document.createElement("div");
createp.setAttribute("class","message");
console.log(createp)
createp.innerText = "Your bag is empty!"
pr.append(createp)


let div_btn = document.createElement("div");
div_btn.setAttribute("class","continueshop");

let button = document.createElement("button");
button.setAttribute("class","continue_btn btn btn-dark rounded-0");
button.innerText = "Add products from Wishlist";

div_btn.append(button)
pr.append(div_btn)


document.querySelector(".continue_btn").addEventListener("click",function(){
    location.href = "/pages/orders/wishlist.html"
})

}






let find_size_price = ""
let current_price = ""
let sum = 0;
for (i = 0; i < filtereduser_bag.length; i++) {

    // finding product from local storage
    let find_product = localproducts.find(e => e.product_id == filtereduser_bag[i]["product_id"])
    console.log(find_product)
    // finding size from localsize
    let find_size = localsize.find(e => e.id == filtereduser_bag[i]["size"])
    console.log(find_size)
    // find size from find_product
    find_size_price = find_product["varients"].find(e => e.size == filtereduser_bag[i]["size"])
    console.log(find_size_price)

    // get price from find_product
    let size_price = find_size_price["price"]["current"]
    console.log(size_price)

    let size_quantity = filtereduser_bag[i]["quantity"]
    console.log(size_quantity)

    let current_price = size_price * size_quantity
    console.log(current_price)

    sum += current_price


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
        <input type="number" class="quantity" min="1" value="${filtereduser_bag[i]["quantity"]}" data-bag_id =${localbag[i]["bag_id"]} />
    </div>

    <div>
        <span class="product_price">${find_size_price["price"]["currency"] + "." + current_price}</span> 
        <span class="original_price"><del>${find_size_price["price"]["currency"] + "." + find_size_price["price"]["mrp"]}</del></span>
        <span class="product_offer"> (${find_size_price["offer"]["value"]} % off)</span>
    </div>

    <div> 
        delivery in <span class="date">2 days</span>
    </div>

    <div class="buttons">
        <div>
                 <button class="movetobag" data-bag_id=${localbag[i]["bag_id"]}>move to wishlist</button>
        </div>
 
    </div>

</div>
</div>
`
    // qty display
    // <span>${localbag[i]["quantity"]}</span>
    document.querySelector(".order_list").insertAdjacentHTML("afterbegin", template_bag);

}





let inputquantity = document.querySelectorAll(".quantity");

inputquantity.forEach(qty =>

    qty.addEventListener("change", function (e) {

        e.preventDefault()

        let id = this.dataset.bag_id
        console.log(id)

        let foundbag_quantity = localbag.find(e => e.bag_id == id)
        console.log(foundbag_quantity)

        console.log(foundbag_quantity)
        foundbag_quantity["quantity"] = parseInt(e.target.value);

        localStorage.setItem("bag", JSON.stringify(localbag));

        window.location.reload();
    })
);

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

let localwishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let movetowishlist = document.querySelectorAll(".movetobag");
movetowishlist.forEach(move=>
    move.addEventListener("click",function(){
        let clicked_bag_id  = this.dataset.bag_id;

        let wishlist_id = crypto.randomUUID()
        
        let find_bag_prod = localbag.find(e=>e.bag_id == clicked_bag_id);
        let find_wishlist_prod = localwishlist.find(e=>e.product_id == find_bag_prod["product_id"])

        if(!find_wishlist_prod){
            localwishlist.push({
                "wishlist_id":wishlist_id,
                "user_id": find_bag_prod["user_id"],
                "product_id": find_bag_prod["product_id"],
                "size": find_bag_prod["size"],
                "quantity" : 1
            })

            
        let indexofbag = localbag.indexOf(find_bag_prod)
        localbag.splice(indexofbag,1)

        alert("Item added to wishlist")

        location.reload();
        }

        localStorage.setItem("bag",JSON.stringify(localbag))
        localStorage.setItem("wishlist",JSON.stringify(localwishlist))

        
    })
)










