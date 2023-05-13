let storedgender = JSON.parse(localStorage.getItem("gender_list"));

let storedcategory = JSON.parse(localStorage.getItem("category_list"))


let url = window.location.href
console.log(url);




function updateBreadcrumbs(url) {
  // Get the current breadcrumb array from session storage, or create a new one if it doesn't exist
  let breadcrumbs = JSON.parse(sessionStorage.getItem('breadcrumbs')) || [{"name":"home","url":"/index.html"}];



  let findcrumbs = breadcrumbs.some(e=>e.url === url);

  let searchparam = window.location.search
console.log(searchparam);

  const getparam = new URLSearchParams(searchparam);
  console.log(getparam);

  const hereurlcategory = getparam.get("category");

  let findgender = "";
  let findcategory = "";
  let findurlgender = ""
  
  if(hereurlcategory == null){

let storedgender = JSON.parse(localStorage.getItem("gender_list"));
console.log(storedgender);

    let urlgender = getparam.get("gender")

  let getgender = storedgender.find(
  (e) => e.id == urlgender
  );

  console.log(getgender);

  findgender = getgender["gender"]

}

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