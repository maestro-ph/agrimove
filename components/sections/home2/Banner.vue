<template>
    <section class="banner-section">
      <div class="banner-carousel owl-carousel owl-theme"> 
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
          <div class="bg-image" style="background-image: url(images/background/6.png);"></div>
          <div class="auto-container">
            <div class="row">
              <div class="content-column col-lg-6">
                <div class="content-box"> <span class="line"></span> <span class="sub-title">Contact us anytime</span>
                  <h2>Fast & Secure Transportation Services</h2>
                  <div class="btn-box"><NuxtLink to="#" class="theme-btn btn-style-one"><span class="btn-title">Discover more</span></NuxtLink></div>
                </div>
              </div>
              <div class="image-column col-lg-6">
                <div class="image-box">
                  <div class="video-box"> 
                    <NuxtLink @click="openVideo" class="play-now"><i class="icon fa fa-play" aria-hidden="true"></i><span class="ripple"></span></NuxtLink>
                    <div class="title">Watch <br>How it Works</div>
                  </div>
                  <figure class="image"><img src="/images/resource/truck.png" alt=""></figure>
                </div>
              </div>
            </div>
          </div>
            </swiper-slide>

            <!-- Slide Item -->
            <swiper-slide class="slide-item">
          <div class="bg-image" style="background-image: url(images/background/6.png);"></div>
          <div class="auto-container">
            <div class="row">
              <div class="content-column col-lg-6">
                <div class="content-box"> <span class="line"></span> <span class="sub-title">Contact us anytime</span>
                  <h2>Fast & Secure Transportation Services</h2>
                  <div class="btn-box"><NuxtLink to="#" class="theme-btn btn-style-one"><span class="btn-title">Discover more</span></NuxtLink></div>
                </div>
              </div>
              <div class="image-column col-lg-6">
                <div class="image-box">
                  <div class="video-box"> 
                    <NuxtLink @click="openVideo" class="play-now"><i class="icon fa fa-play" aria-hidden="true"></i><span class="ripple"></span></NuxtLink>
                    <div class="title">Watch <br>How it Works</div>
                  </div>
                  <figure class="image"><img src="/images/resource/truck.png" alt=""></figure>
                </div>
              </div>
            </div>
          </div>
            </swiper-slide>
        </swiper>
      </div>
    </section>
    <modal-video :channel="videoChannel" :videoId="videoId" v-model:isOpen="videoIsOpen" />
</template>
<script>
import ModalVideo from '../../components/elements/ModalVideo.vue'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"
export default {
  components: {
    ModalVideo,
        Swiper,
        SwiperSlide,
  },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        }
    },
  data: () => {
    return {
      videoIsOpen: false
    }
  },
  methods: {
    openVideo() {
      this.videoIsOpen = !this.videoIsOpen
    }
  },
  computed: {
    videoChannel: function () {
      //Logic to extract based on URL
      return 'youtube'
    },
    videoId: function () {
      //Logic to extract based on URL
      return 'QiqQoqtnHrk'
    }
  }
}

</script>