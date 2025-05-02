<template>
    <section class="fun-fact-section">
        <div class="bg-image" style="background-image: url(images/background/1.png)"></div>

        <div class="auto-container">
            <div class="sec-title light text-center mb-0">
                <h1>Hundreds of customers <br>trust our company</h1>
                <NuxtLink to="page-contact" class="theme-btn btn-style-one"><span class="btn-title">Get a free Quote</span></NuxtLink>
            </div>

            <div class="fact-counter">
                <div class="row">

                    <!--Column-->
                    <div class="counter-column col-lg-4 col-md-6 col-sm-12">
                        <span class="icon"><img src="/images/resource/funfact-1.png" alt=""/></span>
                        <div class="inner-column">
                            <div class="count-box"><ElementsCounterUp :end="145"/></div>
                            <h4 class="counter-title">Branches Across The World</h4>
                        </div>
                    </div>
    
                    <!--Column-->
                    <div class="counter-column col-lg-4 col-md-6 col-sm-12">
                        <span class="icon"><img src="/images/resource/funfact-2.png" alt=""/></span>
                        <div class="inner-column">
                            <div class="count-box"><ElementsCounterUp :end="26"/>k</div>
                            <h4 class="counter-title">Parcel Delivered by Riders</h4>
                        </div>
                    </div>
    
                    <!--Column-->
                    <div class="counter-column col-lg-4 col-md-6 col-sm-12">
                        <span class="icon"><img src="/images/resource/funfact-3.png" alt=""/></span>
                        <div class="inner-column">
                            <div class="count-box"><ElementsCounterUp :end="78"/>k</div>
                            <h4 class="counter-title">Tons of Products Transport</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>