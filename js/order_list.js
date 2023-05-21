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

    // let parseddate = new Date(Date.parse(filteruserorder[i].ordered_time));

    // console.log(parseddate);


    // let findtime = new Date(parseddate);
    // console.log(findtime);


    const dateString = filteruserorder[i].ordered_time;
    console.log(dateString);

const parsedDate = new Date(Date.parse(dateString));
console.log(parsedDate)

console.log(parsedDate); // Output: Fri May 21 2004 00:00:00 GMT+0530 (India Standard Time)

const findTime = new Date(parsedDate);
console.log(findTime); // Output: Fri May 21 2004 00:00:00 GMT+0530 (India Standard Time)


const afterDate = findTime.getDate() + 2;
const afterDay = findTime.getDay();
const afterMonth = findTime.getMonth();


//name of the day and month using an array of names
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const dayName = daysOfWeek[afterDay]; // Returns the name of the day of the week
const monthName = monthsOfYear[afterMonth]; 

console.log(dayName);


console.log(monthName);


    // let afterdate = findtime.setDate(findtime.getDate() + 2);
    // console.log(afterdate);


    // let date = findtime.getDate();
    // console.log(date);
    
    // let day =  findtime.getDay()
    // console.log(day);

    // let month = findtime.getMonth();
    // console.log(month);


let orderproducts = `
<div class="fluid-container">

                <div class="product_delivery">

                    <div class="check">
                        <i class="fa-solid fa-spinner"></i>
                    </div>
                    <div class="delivery_date">
                        <h3>${filteruserorder[i].order_status}</h3>
                        <p>Delivery by ${dayName}, ${afterDate} ${monthName} </p>
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

