<template>
    <footer class="main-footer">
        <!--Widgets Section-->
        <div class="widgets-section" style="background-image: url(./images/background/5.jpg)">
            <div class="auto-container">
                <div class="row">
                    <!--Footer Column-->
                    <div class="footer-column col-xl-4 col-lg-12 col-md-6 col-sm-12">
                        <div class="footer-widget about-widget">
                            <div class="logo"><NuxtLink to="index.html"><img src="/images/logo-2.png" alt="" /></NuxtLink></div>
                            <div class="text">Desires to obtain pain of itself, because it is pain, but occasionally circumstances.</div>

                            <div class="subscribe-form">
                                <form method="post" action="#">
                                    <div class="form-group">
                                        <input type="email" name="email" class="email" value="" placeholder="Email Address" required="">
                                        <button type="button" class="theme-btn btn-style-one">GO</button>
                                    </div>
                                </form>
                            </div>
                            
                            <ul class="social-icon-one">
                                <li><NuxtLink to="#"><i class="fab fa-twitter"></i></NuxtLink></li>
                                <li><NuxtLink to="#"><i class="fab fa-facebook"></i></NuxtLink></li>
                                <li><NuxtLink to="#"><i class="fab fa-pinterest-p"></i></NuxtLink></li>
                                <li><NuxtLink to="#"><i class="fab fa-instagram"></i></NuxtLink></li>
                            </ul>
                        </div>
                    </div>
    
                    <!--Footer Column-->
                    <div class="footer-column col-xl-2 col-lg-3 col-md-6 col-sm-12">
                        <div class="footer-widget">
                            <h5 class="widget-title">Explore</h5>
                            <ul class="user-links">
                                <li><NuxtLink to="#">About Company</NuxtLink></li>
                                <li><NuxtLink to="#">Pricing Plan</NuxtLink></li>
                                <li><NuxtLink to="#">Request a Quote</NuxtLink></li>
                                <li><NuxtLink to="#">Packaging</NuxtLink></li>
                                <li><NuxtLink to="#">Contact</NuxtLink></li>
                            </ul>
                        </div>
                    </div>
    
                    <!--Footer Column-->
                    <div class="footer-column col-xl-3 col-lg-5 col-md-6 col-sm-12">
                        <div class="footer-widget recent-posts">
                            <h5 class="widget-title">News</h5>
                            <div class="widget-content">
                                <div class="post">
                                    <div class="thumb"><NuxtLink to="#"><img src="/images/resource/post-thumb-1.jpg" alt=""></NuxtLink></div>
                                    <span class="date">20 Jul, 2022</span>
                                    <h4><NuxtLink to="#">Logixs name a finalist consumer choice award</NuxtLink></h4>
                                </div>
                                
                                <div class="post">
                                    <div class="thumb"><NuxtLink to="#"><img src="/images/resource/post-thumb-2.jpg" alt=""></NuxtLink></div>
                                    <span class="date">20 Jul, 2022</span>
                                    <h4><NuxtLink to="#">Logixs name a finalist consumer choice award</NuxtLink></h4>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <!--Footer Column-->
                    <div class="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="footer-widget">
                            <h5 class="widget-title">Contact</h5>
                            <div class="widget-content">
                                <ul class="contact-list">
                                    <li>
                                        <i class="fa fa-phone-square"></i>
                                        <strong>Phone</strong>
                                        <NuxtLink to="tel:+926668880000">+92 666 888 0000</NuxtLink>
                                    </li>
                                    <li>
                                        <strong>Email</strong>
                                        <i class="fa fa-envelope"></i>
                                        <NuxtLink to="mailto:needhelp@company.com">needhelp@company.com</NuxtLink>
                                    </li>
                                    <li>
                                        <strong>Address</strong>
                                        <i class="fa fa-map-marker"></i>
                                        66 road, broklyn street new york
                                    </li>
                                    <li>
                                        <strong>Mon - Sat</strong>
                                        <i class="fa fa-clock"></i>
                                        8.00am to 9.00pm (Sun: Closed)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    
        <!--Footer Bottom-->
        <div class="footer-bottom">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="copyright-text">
                        <p>© Copyright received by <NuxtLink to="/"><span class="text-success">agricoders</span></NuxtLink></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>