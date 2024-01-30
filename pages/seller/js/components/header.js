const root = window.location.origin;
console.log(root);


const before_login = `
<header>
<nav class="navbar navbar-dark bg-dark fixed-top">
<div class="container-fluid">
    <a class="navbar-brand" href="${root}/pages/seller/seller-account.html">MY FASHION STUDIO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">SELLER</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="${root}/pages/seller/seller-login.html">profile</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="${root}/pages/seller/seller-login.html">add categories</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="${root}/pages/seller/seller-login.html">delete categories</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="${root}/pages/seller/seller-login.html">add products</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="${root}/pages/seller/seller-login.html">inventory</a>
                </li>
            </ul>

        </div>
    </div> 
</div>
</nav>
</header>
`

const after_login = `

<header>
<nav class="navbar navbar-dark bg-dark fixed-top">
<div class="container-fluid">
    <a class="navbar-brand" href="${root}/pages/seller/seller-account.html">MY FASHION STUDIO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">SELLER</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="${root}/pages/seller/seller-account.html">profile</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="${root}/pages/seller/addcategory.html">add categories</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="${root}/pages/seller/deletecategory.html">delete categories</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="${root}/pages/seller/addproduct.html">add products</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="${root}/pages/seller/inventory.html">inventory</a>
                </li>
            </ul>

        </div>
    </div> 
</div>
</nav>
</header>


`;

const unique_seller_id = JSON.parse(localStorage.getItem("seller_id"));

if (unique_seller_id == 0 || unique_seller_id == undefined || unique_seller_id == "") {
  document.body.insertAdjacentHTML("afterbegin", before_login);
} 

else {
  document.body.insertAdjacentHTML("afterbegin", after_login);
}

