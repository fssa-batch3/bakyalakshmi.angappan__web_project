let localproducts = JSON.parse(localStorage.getItem("product_list"));
let localbag = JSON.parse(localStorage.getItem("bag"));
console.log(localbag)

let localunique_id = JSON.parse(localStorage.getItem("unique_id"));
let localsize = JSON.parse(localStorage.getItem("size_list"));

let filtereduser_bag = localbag.filter(e => e.user_id == localunique_id)

for (i = 0; i < filtereduser_bag.length; i++) {

    let empty = [];

    for (j = 0; j < filtereduser_bag.length; j++) {
        let find_product = localproducts.find(e => e.product_id == filtereduser_bag[j]["product_id"]);
        empty.push(find_product);
    }

    let quantity = filtereduser_bag[i]["quantity"]
    let current_price = empty[i]["price"]["current"]

    let product_qty_price = quantity * current_price


    const urlParams = new URLSearchParams(window.location.search);

    const urlsize = urlParams.get('sizeid')
    console.log(urlsize)

    let productsize  = localsize.find(e=>e.id = urlsize)
console.log(productsize)



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
        <span>${productsize["value"]}</span>

        <label><b>Qty:</b></label>
        <span>${localbag[i]["quantity"]}</span>
    </div>

    <div>
        <span class="product_price">${empty[i]["price"]["currency"]+"."}${product_qty_price}</span> 
        <span class="original_price"><del>${empty[i]["price"]["currency"]+"."+empty[i]["price"]["mrp"]}</del></span>
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

    document.querySelector(".order_list").insertAdjacentHTML("afterbegin", template_bag);

}


// <div class="x-mark">
//     <a href="../homepage/homepage.html">
//         <i class="fa-solid fa-xmark"></i>
//     </a>
// </div>

let remove = document.querySelectorAll(".x-mark")
remove.forEach(del =>
    del.addEventListener("click", function (event) {
        let bag_uuid = this.dataset.id
        console.log(bag_uuid)

        let find = localbag.find(e=>e.bag_id == bag_uuid)
        console.log(find);

        let indexofbagprod = localbag.indexOf(find)
        console.log(indexofbagprod);

        localbag.splice(indexofbagprod,1)

        localStorage.setItem("bag",JSON.stringify(localbag));
        location.reload();
    }
    )
)








