// dynamic categories 

const localCategory = JSON.parse(localStorage.getItem("category_list"))
const localProduct = JSON.parse(localStorage.getItem("product_list"))


for(let i=0;i<localCategory.length;i++){
const filterProduct = localProduct.filter(e=>e.category == localCategory[i]["id"])

if(filterProduct.length !== 0){

let addcategorydiv = `
                        <div class="categorycontainer" data-category=${localCategory[i]["id"]}>
                                <img src="${filterProduct[0]["image"]["source"]}" alt="${filterProduct[0]["name"]}">
                                <h4>${localCategory[i]["category"]}</h4>
                        </div>
`
console.log(document.querySelector(".categories_list"))
document.querySelector(".categories_list").insertAdjacentHTML("afterbegin",addcategorydiv)
}


document.querySelectorAll(".categorycontainer").forEach(move=>
    move.addEventListener("click",movetoProductlist))
function movetoProductlist(){
    let clcikedcategory = this.dataset.category
    console.log(clcikedcategory)
    window.location.href=`/pages/products/product-list.html?category=${clcikedcategory}`
}

}


//  shop now button

document.querySelectorAll(".gender_btn").forEach(movetoproduct =>
    movetoproduct.addEventListener("click",function(){
        let getgender = this.dataset.gender

        window.location.href=`pages/products/product-list.html?gender=${getgender}`
    })
)





const filtergcategory = localCategory.filter(e=>e.gender == 1)
console.log(filtergcategory.length)

for(let i=0;i<filtergcategory.length;i++){

    let found;
    const find = localProduct.find(e=>e.category == filtergcategory[i]["id"]) ;
    if(find){
        found=true;
    }
    else{
        found=false;
    }


    console.log(filtergcategory[i]["id"])
    console.log(localProduct)
    console.log(find)

if(found==true){

let filtermenProduct = localProduct.filter(e=>e.category == filtergcategory[i]["id"])

let addmendiv = `
                        <div class="categorycontainer" data-category=${filtergcategory[i]["id"]}>
                                <img src="${filtermenProduct[0]["image"]["source"]}" alt="${filtermenProduct[0]["name"]}">
                            <div>
                                <h2>${filtergcategory[i]["category"]}</h2>
                            
                            </div>
                        </div>
`

document.querySelector(".fashion_categories.men").insertAdjacentHTML("afterbegin",addmendiv)



}


document.querySelectorAll(".categorycontainer").forEach(move=>
    move.addEventListener("click",movetoProductlist))
function movetoProductlist(){
    let clcikedcategory = this.dataset.category
    console.log(clcikedcategory)
    window.location.href=`/pages/products/product-list.html?category=${clcikedcategory}`
}
}






const filterwomencategory = localCategory.filter(e=>e.gender == 2)
console.log(filterwomencategory)

for(let i=0;i<filterwomencategory.length;i++){

let filterwomenProduct = localProduct.filter(e=>e.category == filterwomencategory[i]["id"])

if(filterwomenProduct.length !== 0){
let adddwomendiv = `
                        <div class="categorycontainer" data-category=${filterwomencategory[i]["id"]}>
                                <img src="${filterwomenProduct[0]["image"]["source"]}" alt="${filterwomenProduct[0]["name"]}">
                            <div>
                                <h2>${filterwomencategory[i]["category"]}</h2>
                            
                            </div>
                        </div>
`

document.querySelector(".fashion_categories.women").insertAdjacentHTML("afterbegin",adddwomendiv)
}




document.querySelectorAll(".categorycontainer").forEach(move=>
    move.addEventListener("click",movetoProductlist))
function movetoProductlist(){
    let clcikedcategory = this.dataset.category
    console.log(clcikedcategory)
    window.location.href=`/pages/products/product-list.html?category=${clcikedcategory}`
}
}


