<template>
    <section class="main-slider">
        <swiper :slides-per-view="1" :space-between="0" :loop="true" :autoplay="{
            delay: 10000,
            disableOnInteraction: true,
        }" :pagination="{
    el: '.swiper-pagination',
    clickable: true,
}" :navigation="{
    nextEl: '.h1n',
    prevEl: '.h1p',
}" :modules="modules">
            <!-- Slide Item -->
            <swiper-slide class="slide-item">
                <div class="tp-dottedoverlay"></div>
                <div class="bg bg-image" style="background-image: url(images/main-slider/bg-1.jpg);"></div>
                <div class="auto-container content-box">
                    <h2>We’re Global <br />Logistics Partners</h2>
                    <div class="text mb-15">There are many of passages of lorem Ipsum, but the majori <br/> have suffered alteration in some form.</div>
                    <div class="btn-box">
                        <NuxtLink to="page-about" class="theme-btn btn-style-one"><span class="btn-title">Discover more</span></NuxtLink>
                    </div>
                </div>
            </swiper-slide>

            <!-- Slide Item -->
            <swiper-slide class="slide-item">
                <div class="tp-dottedoverlay"></div>
                <div class="bg bg-image" style="background-image: url(images/main-slider/bg-1.jpg);"></div>
                <div class="auto-container content-box">
                    <h2>We’re Global <br />Logistics Partners</h2>
                    <div class="text mb-15">There are many of passages of lorem Ipsum, but the majori <br/> have suffered alteration in some form.</div>
                    <div class="btn-box">
                        <NuxtLink to="page-about" class="theme-btn btn-style-one"><span class="btn-title">Discover more</span></NuxtLink>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>
<script>
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        }
    },
}
</script>