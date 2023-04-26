const origin = window.location.origin;
let beforelogin = `
<footer>

<div class="footer">

    <div class="footer_nav_contact">
        <div class="footer_nav">
            <div>
                <h3>shop</h3>
                <nav>
                    <ul>
                        <li><a href="./pages/products/all products list/men-allproducts-list.html">men</a></li>
                        <li><a href="./pages/products/all products list/women-allproducts-list.html">women</a>
                        </li>
                        <li><a href="./pages/products/all products list/kids-allproducts-list.html">kids</a>
                        </li>
                    </ul>
                </nav>
            </div>


            <div>
                <h3>account</h3>
                <nav>
                    <ul>
                        <li><a href="./pages/orders/order_list.html">my orders</a></li>
                        <li><a href="./pages/orders/shopping_bag.html">my bag</a></li>
                        <li><a href="./pages/homepage/account.html">my account</a></li>
                    </ul>
                </nav>
            </div>

        </div>

        <div class="footer_contact">
            <div>
                <div class="contact_details">
                    <h3>contact</h3>
                    <i class="fa-solid fa-location-dot"></i>
                    Page Industries Ltd, Cessna Park, Umiya Bay, T-1, 7th Flr, ORR, Bengaluru - 560103,
                    Karnataka.
                </div>

                <div class="contact_details">
                    <i class="fa-solid fa-envelope"></i>
                    wecare@MFS.india.com
                </div>
            </div>


            <div class="contact_details">
                <i class="fa-solid fa-phone"></i>
                1800-572-1299(Toll Free) / 1860-425-3333 <br />
                <p>(Monday to Saturday, IST 10:00 AM to 7:00 PM)</p>

            </div>
        </div>
    </div>


    <div class="bottom_footer">
        <div>
            <h2>My Fashion Studio</h2>
        </div>

        <div class="socialmedia">
            <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-square-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
            <a href="./pages/products/product-list.html"><i class="fa-brands fa-square-instagram"></i></a>
        </div>

        <div>
            2022 My fashion studio | All Rights Reserved
        </div>
    </div>
</div>
</footer>
`

let afterlogin = `
<footer>

<div class="footer">

    <div class="footer_nav_contact">
        <div class="footer_nav">
            <div>
                <h3>shop</h3>
                <nav>
                    <ul>
                        <li><a href="${origin}./pages/product-list.html">men</a></li>
                        <li><a href="${origin}./pages/product-list.html">women</a>
                        </li>
                        <li><a href="${origin}./pages/product-list.html">kids</a>
                        </li>
                    </ul>
                </nav>
            </div>


            <div>
                <h3>account</h3>
                <nav>
                    <ul>
                        <li><a href="${origin}./pages/orders/order_list.html">my orders</a></li>
                        <li><a href="${origin}./pages/orders/shopping_bag.html">my bag</a></li>
                        <li><a href="${origin}./pages/homepage/account.html">my account</a></li>
                    </ul>
                </nav>
            </div>

        </div>

        <div class="footer_contact">
            <div>
                <div class="contact_details">
                    <h3>contact</h3>
                    <i class="fa-solid fa-location-dot"></i>
                    Page Industries Ltd, Cessna Park, Umiya Bay, T-1, 7th Flr, ORR, Bengaluru - 560103,
                    Karnataka.
                </div>

                <div class="contact_details">
                    <i class="fa-solid fa-envelope"></i>
                    wecare@MFS.india.com
                </div>
            </div>


            <div class="contact_details">
                <i class="fa-solid fa-phone"></i>
                1800-572-1299(Toll Free) / 1860-425-3333 <br />
                <p>(Monday to Saturday, IST 10:00 AM to 7:00 PM)</p>

            </div>
        </div>
    </div>


    <div class="bottom_footer">
        <div>
            <h2>My Fashion Studio</h2>
        </div>

        <div class="socialmedia">
            <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-square-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
            <a href="./pages/products/product-list.html"><i class="fa-brands fa-square-instagram"></i></a>
        </div>

        <div>
            2022 My fashion studio | All Rights Reserved
        </div>
    </div>
</div>
</footer>
`


const uniqueid = localStorage.getItem("uniqueid")

console.log(uniqueid);

if (uniqueid == 0 || uniqueid == undefined || uniqueid == "") {
    document.querySelector(".line").insertAdjacentHTML("afterbegin", beforelogin);
}


else {
    document.querySelector(".line").insertAdjacentHTML("afterbegin", afterlogin);
}