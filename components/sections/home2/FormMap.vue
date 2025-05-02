<template>
  <section class="contact-section">
    <div class="auto-container">
      <div class="row"> 
        <!--Column-->
        <div class="info-column col-lg-7 order-2">
          <div class="inner-column">
            <swiper :slides-per-view="2" :space-between="30" :loop="true"
              :autoplay="{
                delay: 5000,
                disableOnInteraction: true,
              }" 
              :breakpoints="{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                575: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                767: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                991: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1199: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1350: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }"
              :pagination="{
                el: '.swiper-pagination',
                clickable: true,
              }" :navigation="{
                nextEl: '.h1n',
                prevEl: '.h1p',
              }"
              :modules="modules" class="branches-carousel owl-carousel owl-theme">
            <swiper-slide> 
              <div class="branch-block">
                <div class="inner-box">
                  <h5>New York</h5>
                  <p> <NuxtLink to="tel:+9288009860">+92 (8800) 9860</NuxtLink><br>Boat House, 152/21 City Road Hoxton. N1 6NG UK </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <!-- Branch Block -->
              <div class="branch-block">
                <div class="inner-box">
                  <h5>San Fransisco</h5>
                  <p> <NuxtLink to="tel:+9288009860">+92 (8800) 9860</NuxtLink><br>Boat House, 152/21 City Road Hoxton. N1 6NG UK </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <!-- Branch Block -->
              <div class="branch-block">
                <div class="inner-box">
                  <h5>New York</h5>
                  <p> <NuxtLink to="tel:+9288009860">+92 (8800) 9860</NuxtLink><br>Boat House, 152/21 City Road Hoxton. N1 6NG UK </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          </div>
        </div>
        <!--Column-->
        <div class="form-column col-lg-5"> 
          <!-- Contact Form -->
          <div class="contact-form">
            <div class="bg-image" style="background-image: url(./images/background/8.jpg)"></div>
            <h4>Request a quote</h4>
            <!--Contact Form-->
            <form method="post" action="#" id="contact-form">
              <div class="row">
                <div class="col-lg-12 form-group">
                  <input type="text" name="full_name" placeholder="Your Name" required class="mb-2">
                  <input type="text" name="phone" placeholder="Phone No" required>
                </div>
                <div class="col-lg-12 form-group">
                  <label>DIST (Miles):</label>
                  <div class="range-slider-one position-relative">
                    <MultiRangeSlider :min="0" :max="2000" :min-value="sBarMinValue" :max-value="sBarMaxValue" :step="1" :range-margin="0" @input="update_sBarValues" />
                  </div>
                </div>
                <div class="col-lg-12 form-group">
                  <label>FREIGHT TYPE</label>
                  <select class="custom-select">
                    <option value="">Air Freight</option>
                    <option value="">Ocean Freight</option>
                    <option value="">Rail transport</option>
                    <option value="">Cargo ship</option>
                    <option value="">Bulk cargo</option>
                  </select>
                </div>
                <div class="col-lg-12 form-group">
                  <label>Load</label>
                  <select class="custom-select">
                    <option value="">Select Load</option>
                    <option value="">Door to Door</option>
                    <option value="">International shipping</option>
                    <option value="">Multi Modal</option>
                  </select>
                </div>
                <div class="col-lg-12 form-group">
                  <button class="theme-btn btn-style-two" type="submit" name="submit-form"><span class="btn-title">get a quote now</span></button>
                </div>
              </div>
            </form>
          </div>
          <!--End Contact Form --> 
        </div>
      </div>
    </div>
    <iframe class="map" height="530" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"> </iframe>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { ref } from "vue";
import MultiRangeSlider from "multi-range-slider-vue";


export default {
  name: "App",
  components: {
    Swiper,
    SwiperSlide,
    MultiRangeSlider,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },

  data() {
    return {
      sBarMinValue: 1,
      sBarMaxValue: 1500,
    };
  },
  methods: {
    update_sBarValues(e) {
      this.sBarMinValue = e.minValue;
      this.sBarMaxValue = e.maxValue;
    }
  },

};
</script>