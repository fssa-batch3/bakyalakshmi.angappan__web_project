let origin = window.location.origin


let template = `
           <footer>

                <div class="footer">
                    <div class="footer_nav_contact">
                        <div class="footer_nav">
                            <div>
                                <h3>add</h3>
                                <nav>
                                    <ul>
                                        <li>
                                            <a href="${origin}/pages/seller/addcategory.html">add categories</a>
                                        </li>
                                        <li>
                                            <a href="${origin}/pages/seller/deletecategory.html">Delete categories</a>
                                        </li>
                                        <li>
                                            <a href="${origin}/pages/seller/addproduct.html">add products</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div>
                                <h3>account</h3>
                                <nav>
                                    <ul>
                                        <li>
                                            <a href="${origin}/pages/seller/seller-account.html">My account</a>
                                        </li>
                                        <li>
                                            <a href="${origin}/pages/seller/inventory.html">inventory</a>
                                        </li>
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
                                1800-572-1299(Toll Free) / 1860-425-3333 <br >
                                <p>(Monday to Saturday, IST 10:00 AM to 7:00 PM)</p>

                            </div>
                        </div>
                    </div>

                    <div class="bottom_footer">
                        <div>
                            <h2>My Fashion Studio</h2>
                        </div>

                        <div class="socialmedia">
                            <a href="#">
                                <i class="fa-brands fa-square-facebook"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-square-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-square-instagram"></i>
                            </a>
                        </div>

                        <div>
                            &copy 2022 My fashion studio | All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>

`

document.body.insertAdjacentHTML("beforeend", template);