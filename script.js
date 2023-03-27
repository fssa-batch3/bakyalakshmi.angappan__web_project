
// daba

// function filter(){
//     const inputvalue = document.getElementById("inputgendercategory").value;

//     let localcategory = JSON.parse(localStorage.getItem('category_list')) || [];

//     let filteredcategory = localcategory.filter((e) =>
//         e.gender == inputvalue
//     );

//     return filteredcategory;
// }

let dropdown_menu = document.querySelectorAll("ul li.dropdown");
console.log(dropdown_menu);

dropdown_menu.forEach(menu => {
    menu.addEventListener("click", show)

    function show() {

        const inputvalue = this.value;
        // console.log(inputvalue);

        let localcategory = JSON.parse(localStorage.getItem('category_list')) || [];

        let filteredcategory = localcategory.filter((e) =>
            e.gender == inputvalue
        );

        console.log(filteredcategory);

        if (inputvalue == 1 && localcategory["status"] == true) {
            let category_ul = document.querySelector("#cate_men");
            category_ul.innerHTML = " ";

            // for (i = 0; i < filteredcategory.length; i++) {
            //     let dropdown_item_li = document.createElement("li");
            //     dropdown_item_li.setAttribute("class", "dropdown-item")
            //     dropdown_item_li.setAttribute("data-filter", "dropdown-item")
            //     dropdown_item_li.innerHTML = filteredcategory[i]["category"]
            //     category_ul.append(dropdown_item_li);
            // }
            for (i = 0; i < filteredcategory.length; i++) {
                let dropdown_item_li = document.createElement("li");
                dropdown_item_li.setAttribute("class", "dropdown-item")
                dropdown_item_li.setAttribute("value", filteredcategory[i]["id"])
                dropdown_item_li.innerHTML = filteredcategory[i]["category"]
                // dropdown_item_li.setAttribute("href", "/pages/products/product-list.html?category=" + filteredcategory[i]["id"])
                category_ul.append(dropdown_item_li);
            }
        };

        if (inputvalue == 2 && localcategory["status"] == true) {
            let category_ul = document.querySelector("#cate_women");
            category_ul.innerHTML = " ";

            for (i = 0; i < filteredcategory.length; i++) {
                let dropdown_item_li = document.createElement("li");
                dropdown_item_li.setAttribute("class", "dropdown-item")
                dropdown_item_li.setAttribute("value", filteredcategory[i]["id"])
                dropdown_item_li.innerHTML = filteredcategory[i]["category"]
                category_ul.append(dropdown_item_li);
            }
        };

        if (inputvalue == 3 && localcategory["status"] == true) {
            let category_ul = document.querySelector("#cate_kids");
            category_ul.innerHTML = " ";

            for (i = 0; i < filteredcategory.length; i++) {
                let dropdown_item_li = document.createElement("li");
                dropdown_item_li.setAttribute("class", "dropdown-item")
                dropdown_item_li.setAttribute("value", filteredcategory[i]["id"])
                dropdown_item_li.innerHTML = filteredcategory[i]["category"]
                category_ul.append(dropdown_item_li);
            }
        };

    }
})


let ul_dropdown_menu = document.querySelectorAll(".dropdown-menu")
console.log(ul_dropdown_menu)
ul_dropdown_menu.forEach(event => {
    event.addEventListener("click", function (e) {

        let inputvalue = e.target.value;
        location.href = `/pages/products/product-list.html?category=${inputvalue}`

    })
})





























