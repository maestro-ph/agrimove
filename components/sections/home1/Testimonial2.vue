<template>
  <section class="testimonial-section">
    <div class="auto-container">
      <div class="testimonials">
        <div class="swiper-container testimonial-content">
          <!-- Main Swiper -> pass thumbs swiper instance -->
          <swiper :modules="[Thumbs]" :thumbs="{ swiper: thumbsSwiper }"
            :slides-per-view="1"
            :space-between="30"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide class="testimonial-block">
              <div class="inner-box">
                <figure class="image">
                  <img src="/images/resource/customer.jpg" alt="">
                </figure>
                <div class="text">Vestibulum scelerisque enim pulvinar, aliquam erat sit amet, and one that our clients regularly commend us for feeding back crew members. free hendrerit dui. Vivamus varius libero metus, sit amet hendrerit semper.</div>
                <div class="info-box">
                  <h4 class="name">Smith Jackan</h4>
                  <span class="designation">Ceo of logixs company</span>
                  <span class="quote-icon"></span>
                  <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="testimonial-block">
              <div class="inner-box">
                <figure class="image">
                  <img src="/images/resource/customer.jpg" alt="">
                </figure>
                <div class="text">Vestibulum scelerisque enim pulvinar, aliquam erat sit amet, and one that our clients regularly commend us for feeding back crew members. free hendrerit dui. Vivamus varius libero metus, sit amet hendrerit semper.</div>
                <div class="info-box">
                  <h4 class="name">Smith Jackan</h4>
                  <span class="designation">Ceo of logixs company</span>
                  <span class="quote-icon"></span>
                  <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="testimonial-block">
              <div class="inner-box">
                <figure class="image">
                  <img src="/images/resource/customer.jpg" alt="">
                </figure>
                <div class="text">Vestibulum scelerisque enim pulvinar, aliquam erat sit amet, and one that our clients regularly commend us for feeding back crew members. free hendrerit dui. Vivamus varius libero metus, sit amet hendrerit semper.</div>
                <div class="info-box">
                  <h4 class="name">Smith Jackan</h4>
                  <span class="designation">Ceo of logixs company</span>
                  <span class="quote-icon"></span>
                  <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <!-- It is also required to set watchSlidesProgress prop -->
        <div class="swiper-container testimonial-thumbs-home5">
          <div class="swiper-wrapper">
            <swiper
              :direction= "vertical"
              :slides-per-view="3"
              :modules="[Thumbs]"
              watch-slides-progress
              @swiper="setThumbsSwiper"
              :space-between="10"
            >
              <swiper-slide class="testimonial-thumb"><figure class="image"><img class="rounded-circle" src="/images/resource/testi-thumb-1.jpg" alt=""></figure></swiper-slide>
              <swiper-slide class="testimonial-thumb"><figure class="image"><img class="rounded-circle" src="/images/resource/testi-thumb-2.jpg" alt=""></figure></swiper-slide>
              <swiper-slide class="testimonial-thumb"><figure class="image"><img class="rounded-circle" src="/images/resource/testi-thumb-1.jpg" alt=""></figure></swiper-slide>
              <swiper-slide class="testimonial-thumb"><figure class="image"><img class="rounded-circle" src="/images/resource/testi-thumb-1.jpg" alt=""></figure></swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import { ref } from 'vue';
  import { Thumbs, Virtual } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const thumbsSwiper = ref(null);
      const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
      };
      return {
        Thumbs,
        thumbsSwiper,
        setThumbsSwiper,
      };
    },
  };
</script>