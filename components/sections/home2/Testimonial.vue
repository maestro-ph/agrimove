<template>
  <section class="testimonial-section-two">
    <div class="auto-container">
      <div class="row">
        <div class="title-column col-lg-4 col-md-12 col-sm-12">
          <div class="inner-column">
            <div class="sec-title light">
              <span class="sub-title">Our Features</span>
              <h2>What pepole say about AgirMove</h2>
              <div class="text">Denounce with righteous indignation and dislike men who are so beguiled demoralized.</div>
            </div>
            <div class="trust-score">
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <div class="title">Trust score 4.5 (Based on 2,500 reviews)</div>
            </div>
          </div>
        </div>
        <div class="testimonial-column col-lg-8">
          <div class="inner-column"> 
            <swiper
              :autoplay="{
                delay: 200000,
                disableOnInteraction: true,
              }"
              :loop="true"
              :slides-per-view="2"
              :direction="'vertical'"
              :navigation="true"
              :modules="modules"
              class="swiper-container testimonial-slider">
              <swiper-slide>
                <div class="testimonial-block-two swiper-slide">
                  <div class="inner-box">
                    <div class="thumb"><img src="/images/resource/testi-thumb-4.jpg" alt=""></div>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <h4 class="name">Jon D. William</h4>
                    <span class="designation">Founder of Logixs</span>
                    <div class="text">I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team with some of my end of the day.</div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="testimonial-block-two style-two swiper-slide">
                  <div class="inner-box">
                    <div class="thumb"><img src="/images/resource/testi-thumb-5.jpg" alt=""></div>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <h4 class="name">Monica Smith</h4>
                    <span class="designation">Founder of Logixs</span>
                    <div class="text">I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team with some of my end of the day.</div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="testimonial-block-two swiper-slide">
                  <div class="inner-box">
                    <div class="thumb"><img src="/images/resource/testi-thumb-4.jpg" alt=""></div>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <h4 class="name">Jon D. William</h4>
                    <span class="designation">Founder of Logixs</span>
                    <div class="text">I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team with some of my end of the day.</div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="testimonial-block-two style-two swiper-slide">
                  <div class="inner-box">
                    <div class="thumb"><img src="/images/resource/testi-thumb-5.jpg" alt=""></div>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <h4 class="name">Monica Smith</h4>
                    <span class="designation">Founder of Logixs</span>
                    <div class="text">I wanted to take a minute to thank you and your team. I have grown comfortable leaning on Transida Logistics team with some of my end of the day.</div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation, Virtual } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation, Virtual],
    };
  },
};
</script>