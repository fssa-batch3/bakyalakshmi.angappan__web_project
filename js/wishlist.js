let localproducts = JSON.parse(localStorage.getItem("product_list"));

let localwishlist = JSON.parse(localStorage.getItem("wishlist"));
console.log(localwishlist);

let uuid = JSON.parse(localStorage.getItem("unique_id"));


// let inputquantity = document.querySelector("#quantity").value




// if (filtereduser_wishlist.length == undefined || filtereduser_wishlist.length == null) {
//     let createp = document.createElement("p");
//     console.log(createp)
//     createp.innerText = "there is no products in the bag";
//     document.querySelector(".products").append(createp);
// }

let localunique_id = "";
let localsize = "";
let filtereduser_wishlist = [];

if (localwishlist != null || localwishlist != undefined) {
     localunique_id = JSON.parse(localStorage.getItem("unique_id"));
     localsize = JSON.parse(localStorage.getItem("size_list"));

    filtereduser_wishlist = localwishlist.filter(e => e.user_id == localunique_id)
    console.log(filtereduser_wishlist)
}

console.log(localunique_id)
console.log(filtereduser_wishlist)


let pr = document.querySelector(".products")
if (filtereduser_wishlist.length === 0) {

let createp = document.createElement("div");
createp.setAttribute("class","message");
console.log(createp)
createp.innerText = "Your wishlist is empty!"
pr.append(createp)

}




for (i = 0; i < filtereduser_wishlist.length; i++) {

    // finding product from local storage
    let find_product = localproducts.find(e => e.product_id == filtereduser_wishlist[i]["product_id"])
    console.log(find_product)

let wishlist = `

<div class="smallcontainer">

<img class="product_image" src="${find_product["image"]["source"]}" alt="${find_product["name"]}" />

<div class="x-mark" data-id="${localwishlist[i]["wishlist_id"]}">
        <i id="remove" class="fa-solid fa-xmark"></i>
</div>

<h3 class="brand_name">${find_product["brand"]}</h3>
<h4 class="product_name">${find_product["name"]}</h4>

<span class="product_price">${find_product["varients"][0]["price"]["currency"] +"." +find_product["varients"][0]["price"]["current"] }</span>
<span class="original_price"><del>${find_product["varients"][0]["price"]["currency"] +"." +find_product["varients"][0]["price"]["mrp"] }</del></span>
<span class="product_offer">(${find_product["varients"][0]["offer"]["value"] +find_product["varients"][0]["offer"]["type"] }  Off)</span>

<div>
        <button class="movetobag" data-wishlist_id=${localwishlist[i]["wishlist_id"]}>move to bag</button>
</div>

</div>

`
document.querySelector(".products").insertAdjacentHTML("afterbegin",wishlist);
}

let remove = document.querySelectorAll(".x-mark")
remove.forEach(del =>
    del.addEventListener("click", function () {
        let wishlist_uuid = this.dataset.id
        console.log(bag_uuid)

        let find_wishlist = localwishlist.find(e => e.wishlist_id == wishlist_uuid)

           
        let indexofwishprod = localwishlist.indexOf(find_wishlist)
        console.log(indexofwishprod);

        localwishlist.splice(indexofwishprod, 1)

        localStorage.setItem("wishlist", JSON.stringify(localwishlist));

        location.reload();
    }
    )
)

let productlength = document.querySelector(".totalproducts")
let w = filtereduser_wishlist.length
productlength.innerText = w + " Items";


let localbag = JSON.parse(localStorage.getItem("bag")) || [];

let  movetobag_btn = document.querySelectorAll(".movetobag");
movetobag_btn.forEach( tobag =>
    tobag.addEventListener("click",function(){

        // product_id of a particular product
        let cick_wishlist_id = this.dataset.wishlist_id 

        let bag_id = crypto.randomUUID();



        let find_wishlist_product = localwishlist.find(e=>e.wishlist_id == cick_wishlist_id);

        let find_bag_product = localbag.find(e=>e.product_id == find_wishlist_product["product_id"])

        console.log(find_wishlist_product)

        if(find_bag_product){
            alert("product aldready exist in cart")
        }

        if(!find_bag_product){
            localbag.push({
                "bag_id": bag_id,
                "user_id": find_wishlist_product["user_id"],
                "product_id": find_wishlist_product["product_id"],
                "size": find_wishlist_product["size"], 
                "quantity": 1
            })

            let indexofwishprod = localwishlist.indexOf(find_wishlist_product)
            console.log(indexofwishprod)
    
            localwishlist.splice(indexofwishprod,1)

            
            alert("Item added to bag")

            location.reload();
        }

       

        localStorage.setItem("wishlist",JSON.stringify(localwishlist))
        localStorage.setItem("bag",JSON.stringify(localbag))

        
    }
    )

)




