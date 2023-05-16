let storedgender = JSON.parse(localStorage.getItem("gender_list"));

let storedcategory = JSON.parse(localStorage.getItem("category_list"));

let storedproduct = JSON.parse(localStorage.getItem("product_list"));

let url = window.location.href
console.log(url);

function updateBreadcrumbs(url) {

  // Get the current breadcrumb array from session storage, or create a new one if it doesn't exist
  let breadcrumbs = JSON.parse(sessionStorage.getItem('breadcrumbs')) || [{"name":"home","url":"/index.html"}];


  // if aldready there is a url return true or false
  let findcrumbs = breadcrumbs.some(e=>e.url === url);

  let searchparam = window.location.search
console.log(searchparam);

// find the paramenter in the url
  const getparam = new URLSearchParams(searchparam);
  console.log(getparam);

// get the category from the url
  const hereurlcategory = getparam.get("category");


  let findgender = "";
  let findcategory = "";
  // let findurlgender = "";

  // if category is not equal to null then find only gender

  if(hereurlcategory == null){

    breadcrumbs.splice(1)
let storedgender = JSON.parse(localStorage.getItem("gender_list"));
console.log(storedgender);

    let urlgender = getparam.get("gender");


    // if url gender is null then find the product and gender and category
    if(urlgender == null){
            let urlproduct = getparam.get("product_id");

            let getproduct = storedproduct.find(
              (e) => e.product_id == urlproduct
              );

              console.log(getproduct);

              let findproduct = getproduct["name"];

              console.log(findproduct);
    }

    if(urlgender !== null){
  console.log("shdhagdgasgfdysgdfhgds")


  let getgender = storedgender.find(
  (e) => e.id == urlgender
  );

  findgender = getgender["gender"]
    }


}

// if category is not equal to null then find category and gender

  if(hereurlcategory!==null){

  let getcategory = storedcategory.find(
  (e) => e.id == hereurlcategory
  );

  findcategory = getcategory["category"];

    heregender = getcategory["gender"]
  

  let getgender = storedgender.find(
  (e) => e.id == heregender
  );

  findgender = getgender["gender"]
    breadcrumbs.splice(1);
};

  // Add the new page name to the end of the breadcrumb array
  if(!findcrumbs && hereurlcategory == null){



  breadcrumbs.push({
    "name":findgender,
    "url":url
  });
  }

// if category is found then gender and category should push
    if(!findcrumbs && hereurlcategory !== null){

  breadcrumbs.push(
    {
    "name":findgender,
    "url":`http://127.0.0.1:5501/pages/products/product-list.html?gender=${heregender}`
    },
    {
      "name":findcategory,
      "url":url
    },
  );

  }


  // Store the updated breadcrumb array in session storage
  sessionStorage.setItem('breadcrumbs', JSON.stringify(breadcrumbs));

}

updateBreadcrumbs(url);






const container = document.querySelector('.location');
console.log(container)
// const pages = generateBreadcrumbs();
// console.log(pages)

 let pages = JSON.parse(sessionStorage.getItem('breadcrumbs')) || [];
for (let i = 0; i < pages.length; i++) {
  const crumb = pages[i];
  const link = document.createElement('a');
  link.textContent = crumb.name;
  link.href = crumb.url;
  container.appendChild(link);

  if (i < pages.length - 1) {
    const separator = document.createElement('span');
    separator.textContent = '>';
    container.appendChild(separator);
  }
}