
// let gender_category_list = []

// gender_category_list.push(
//     {
//         "gender": "men",
//         // "category": [
//         //     {
//         //         "name": "t_shirt"
//         //     }
//         // ]
//     },
//     {
//         "gender": "women",
//         "category": [
//             {
//                 "name": "t_shirt"
//             }
//         ]
//     },
//     {
//         "gender": "kids",
//         "category": [
//             {
//                 "name": "t_shirt"
//             }
//         ]
//     }
// );
// localStorage.setItem('gender_category_list', JSON.stringify(gender_category_list));

//  <button type="button" id="btn_add_cat" class="btn btn-primary">add category</button>

let addgender = document.querySelector("#btn_add_cat");
// console.log(addcategory);
addgender.addEventListener("click", addcat);

function addcat(e) {
    let inputcategory = document.getElementById("inputcategory").value
    let gender_list = JSON.parse(localStorage.getItem('gender_list')) || [];
    // if (category_list.length = 0) {
    let genderlength = gender_list.length;

    // for (i = 0; i < categorylength; i++) {
    gender_list.push({
        "gender": inputcategory,
        "id": gender_list.length
        // });
        // })
    });
    // }

    // let category_list = JSON.parse(localStorage.getItem('category_list')) || [];
    // category_list.forEach(e =>
    //     e.category_list.push({
    //         "category": inputcategory,
    //         "id": 1
    //     })
    // );

    localStorage.setItem('gender_list', JSON.stringify(gender_list));
};



// let addsubcategory = document.querySelector("#btn_add_sub_cat");
// addsubcategory.addEventListener("click", addsubcat);
// let sub_category_list = JSON.parse(localStorage.getItem('sub_category_list'));
// function addsubcat(e) {

//     let choosecategory = document.getElementById("choosecategory").value
//     let inputsubcategory = document.getElementById("inputsubcategory").value

//     sub_category_list = JSON.parse(localStorage.getItem('sub_category_list')) || [];

//     for (i = 0; i < sub_category_list.length; i++) {
//         sub_category_list.push({
//             "category": choosecategory,
//             "subcategory": inputsubcategory,
//             "id": i
//         });
//     }


//     localStorage.setItem('sub_category_list', JSON.stringify(sub_category_list));

// };
