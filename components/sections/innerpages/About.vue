<template>
  <section class="about-section pb-50">
    <div class="auto-container">
      <div class="row">
        <div class="content-column col-lg-7 col-md-12 col-sm-12 order-2">
          <div class="inner-column">
            <div class="sec-title">
              <span class="sub-title">Welcome to AgriMove</span>
              <h2>Providing full range of <br>transportation</h2>
            </div>
            <div class="text">A modern logistics platform built specifically for the agriculture sector. We help farmers, suppliers, and agri-businesses streamline their deliveries with efficient, reliable, and cost-effective solutions-so you can focus on growing your business while we take care of the movement. </div>
            <blockquote>You can simplifying your freight & logistics needs with a personal approach on logixs company.</blockquote>


            <div class="bottom-box">
              <figure class="video-box">
                <img src="/images/resource/about-3.jpg" alt=""/>
                <NuxtLink @click="openVideo" class="play-now"><i class="icon fa fa-play" aria-hidden="true"></i><span class="ripple"></span></NuxtLink>
              </figure>

              <ul class="list-style-one">
                <li><i class="flaticon-logistics-delivery-4"></i> Safety and reliable service</li>
                <li><i class="flaticon-on-time"></i> On - time delivery service</li>
              </ul>

              <NuxtLink to="page-about" class="theme-btn btn-style-one"><span class="btn-title">Discover more</span></NuxtLink>
            </div>
          </div>
        </div>

        <!-- Image Column -->
        <div class="image-column col-lg-5 col-md-12 col-sm-12">
          <div class="inner-column">
            <figure class="image-1"><img src="/images/resource/about-1.jpg" alt=""/></figure>
            <figure class="image-2"><img src="/images/resource/about-2.jpg" alt=""/></figure>
            <div class="experience"><strong>30</strong> Years of work experience</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <modal-video :channel="videoChannel" :videoId="videoId" v-model:isOpen="videoIsOpen" />
</template>
<script>
import ModalVideo from '../../components/elements/ModalVideo.vue'
export default {
  components: {
    ModalVideo
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