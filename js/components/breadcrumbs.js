

const storedgender = JSON.parse(localStorage.getItem("gender_list"));

const storedcategory = JSON.parse(localStorage.getItem("category_list"));

const storedproduct = JSON.parse(localStorage.getItem("product_list"));


let url = window.location.href
console.log(url);

function updateBreadcrumbs(url) {

  // Get the current breadcrumb array from session storage, or create a new one if it doesn't exist
  let breadcrumbs = JSON.parse(sessionStorage.getItem('breadcrumbs')) || [];



  let findcrumbs = breadcrumbs.some(e=>e.url === url);

  

  let searchparam = window.location.search
console.log(searchparam);

  const getparam = new URLSearchParams(searchparam);
  console.log(getparam);

  const hereurlcategory = getparam.get("category");

  let heregender = "";
  let findgender = "";
  let findcategory = "";
  let hereproduct = "";
  let urlgender = "";
  let findproduct = ""



  if(hereurlcategory == null){

    urlgender = getparam.get("gender")
    console.log(urlgender);

          hereproduct =  getparam.get("product_id");
// ////////////

    if(urlgender == null ){


      
      getproduct = storedproduct.find(e=>e.product_id == findproduct);
      console.log(getproduct);

      findproduct = getproduct["name"];
      console.log(findproduct);

      let getgender = storedgender.find(e=>e.id == getproduct["gender"]);
      console.log(getgender);

      findgender = getgender["gender"];
      console.log(findgender);


      let getcategory = storedcategory.find(e=>e.id == getproduct["category"]);
      console.log(getcategory);

      findcategory = getcategory["category"];
      console.log(findcategory);

      
      // breadcrumbs.splice(0)
    }


    if(urlgender !== null){
        let getgender = storedgender.find(
      (e) => e.id == urlgender
      );

    console.log(getgender);

    findgender = getgender["gender"]

    breadcrumbs.splice(0)
  } 
}

// /////////

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

   breadcrumbs.splice(0) 

};

  // Add the new page name to the end of the breadcrumb array
  if(!findcrumbs && hereurlcategory == null && heregender !== null ){

  breadcrumbs.push(

    {"name":"home","url":"/index.html"},
    
    {
    "name":findgender,
    "url":url
    }

  );

  }

// if category is found then gender and category should push
    if(!findcrumbs && hereurlcategory !== null ){


  breadcrumbs.push(
    {"name":"home","url":"/index.html"},

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

  // // if category is found then gender and category should push
    if(!findcrumbs && hereurlcategory == null && heregender == null){

  breadcrumbs.push(
    {"name":"home","url":"/index.html"},

    {
    "name":findgender,
    "url":`http://127.0.0.1:5501/pages/products/product-list.html?gender=${heregender}`
    },

    {
    "name":findcategory,
    "url":`http://127.0.0.1:5501/pages/products/product-list.html?gender=${hereurlcategory}`
    },

    {
      "name":findproduct,
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