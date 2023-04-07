// let gender_list = JSON.parse(localStorage.getItem("gender_list"));
// let size_list = JSON.parse(localStorage.getItem("size_list"));

// // static datas
// let gender_data = [{"gender":"men","id":1},{"gender":"women","id":2},{"gender":"kids","id":3}]
// let size_data = [{"value":"s","quantity":12,"status":true,"id":1},{"value":"l","quantity":12,"status":true,"id":2},{"value":"m","quantity":12,"status":true,"id":3},{"value":"xl","quantity":12,"status":true,"id":4},{"value":"xxl","quantity":12,"status":true,"id":5},{"value":"32","quantity":12,"status":true,"id":6},{"value":"34","quantity":12,"status":true,"id":7},{"value":"36","quantity":12,"status":true,"id":8},{"value":"38","quantity":12,"status":true,"id":9},{"value":"40","quantity":12,"status":true,"id":10}]

// if (!gender_list) {
//     localStorage.setItem(("gender_list"),JSON.stringify(gender_data));
// }

// if (!size_list) {
//     localStorage.setItem(("size_list"),JSON.stringify(size_data));
// }



// storing the size in ls
let size_list = [];

size_list.push(
    {
        "value": "s",
        "id": 1,
        "availability": false
    },
    {
        "value": "l",
        "id": 2,
        "availability": false
    },
    {
        "value": "m",
        "id": 3,
        "availability": false
    },
    {
        "value": "xl",
        "id": 4,
        "availability": false
    },
    {
        "value": "xxl",
        "id": 5,
        "availability": false
    },
)

console.log(size_list);
localStorage.setItem('size_list', JSON.stringify(size_list));


let gender_list = [];

gender_list.push(
    {
        "gender": "men",
        "id": 1
    },
    {
        "gender": "women",
        "id": 2
    },
    {
        "gender": "kids",
        "id": 3
    }
);

localStorage.setItem('gender_list', JSON.stringify(gender_list));





