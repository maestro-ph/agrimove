<template>
  <section class="clients-section">
      <div class="auto-container">
          <!-- Sponsors Outer -->
          <div class="sponsors-outer">
              <!--clients carousel-->
    <swiper :slides-per-view="5" :space-between="0" :loop="true" :autoplay="{
      delay: 3000,
      disableOnInteraction: true,
      }" 
      :breakpoints="{
    320: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
    575: {
        slidesPerView: 2,
        spaceBetween: 0,
    },
    767: {
        slidesPerView: 3,
        spaceBetween: 0,
    },
    991: {
        slidesPerView: 4,
        spaceBetween: 0,
    },
    1199: {
        slidesPerView: 5,
        spaceBetween: 0,
    },
    1350: {
        slidesPerView: 5,
        spaceBetween: 0,
    },
  }"
      :pagination="{
          el: '.swiper-pagination',
          clickable: true,
      }" :navigation="{
          nextEl: '.h1n',
          prevEl: '.h1p',
      }" :modules="modules" class="clients-carousel owl-carousel owl-theme">
  >
    <swiper-slide class="slide-item">
        <!-- client block -->
            <NuxtLink to="#">
              <img src="/images/resource/client.png" alt=""></NuxtLink>
    </swiper-slide>
    <swiper-slide class="slide-item">
        <!-- client block -->
            <NuxtLink to="#">
              <img src="/images/resource/client.png" alt=""></NuxtLink>
    </swiper-slide>
    <swiper-slide class="slide-item">
        <!-- client block -->
            <NuxtLink to="#">
              <img src="/images/resource/client.png" alt=""></NuxtLink>
    </swiper-slide>
    <swiper-slide class="slide-item">
        <!-- client block -->
            <NuxtLink to="#">
              <img src="/images/resource/client.png" alt=""></NuxtLink>
    </swiper-slide>
    <swiper-slide class="slide-item">
        <!-- client block -->
            <NuxtLink to="#">
              <img src="/images/resource/client.png" alt=""></NuxtLink>
    </swiper-slide>
    <swiper-slide class="slide-item">
        <!-- client block -->
            <NuxtLink to="#">
              <img src="/images/resource/client.png" alt=""></NuxtLink>
    </swiper-slide>
  </swiper>
          </div>
      </div>
  </section>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';


  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>
