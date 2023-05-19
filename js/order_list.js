let localorder = JSON.parse(localStorage.getItem("order"));
let localordereditems = JSON.parse(localStorage.getItem("ordered_items"));
let localproducts = JSON.parse(localStorage.getItem("product_list"));
let localsize = JSON.parse(localStorage.getItem("size_list"));
let uuid = JSON.parse(localStorage.getItem("unique_id"));
console.log(uuid);

let filteruserorder = localorder.filter(e=>e.user_id == uuid);

for(let i=0;i<filteruserorder.length;i++){

let filterordereditems = localordereditems.filter(e=>e.order_id == filteruserorder[i]["order_id"])

    for(let j=0;j<filterordereditems.length;j++){
    let findproduct ;
    let findsize ;
    //     if(filterordereditems.length > 1){
    //  findproduct = localproducts.find(e=>e.product_id == filterordereditems[0]["product_id"] )
    // console.log(findproduct);

    //  findsize = localsize.find(e=>e.id == filterordereditems[0]["size"])
    // console.log(findsize);
    //     }

    //     if(filterordereditems.length == 1){
    //  findproduct = localproducts.find(e=>e.product_id == filterordereditems[j]["product_id"] )
    // console.log(findproduct);

    //  findsize = localsize.find(e=>e.id == filterordereditems[j]["size"])
    // console.log(findsize);
    //     }


    findproduct = localproducts.find(e=>e.product_id == filterordereditems[j]["product_id"] );
    console.log(findproduct);

     findsize = localsize.find(e=>e.id == filterordereditems[j]["size"]);
    console.log(findsize);

    let parseddate = new Date(Date.parse(filteruserorder[i].ordered_time))
console.log(parseddate.getDay());
console.log(parseddate.getDate());
console.log(parseddate.getMonth());
    let findtime = new Date(parseddate);
    console.log(findtime);

    let afterdate = findtime.setDate(findtime.getDate() + 2);

    console.log(afterdate);
    
let orderproducts = `
<div class="fluid-container">

                <div class="product_delivery">

                    <div class="check">
                        <i class="fa-solid fa-spinner"></i>
                    </div>
                    <div class="delivery_date">
                        <h3>${filteruserorder[i].order_status}</h3>
                        <p>${findtime}</p>
                    </div>
                </div>

                <div class="order_list">
                    <div class="product_thumbnail">
                            <img class="product_image" src="${findproduct.image.source}" alt="${findproduct.name}">
                    </div>

                    <div class="product_details">
                        <h4 class="brand_name">${findproduct.brand}</h4>
                        <p class="product_name">${findproduct.name}</p>
                        <p class="product_size">size: ${findsize.value}</p>
                    </div>
                </div>
            </div>
`


    document.querySelector(".fullcontainer").insertAdjacentHTML("afterbegin",orderproducts);    

    }


}

