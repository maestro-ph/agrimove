<template>
    <section class="project-section">
        <div class="large-container">
            <div class="sec-title text-center">
                <span class="sub-title">Check Our Work</span>
                <h2>Explore recent projects</h2>
            </div>
    
            <!-- Prject Carousel -->
      <swiper :slides-per-view="4" :space-between="30" :loop="true" :autoplay="{
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
        slidesPerView: 3,
        spaceBetween: 30,
    },
    1199: {
        slidesPerView: 4,
        spaceBetween: 30,
    },
    1350: {
        slidesPerView: 4,
        spaceBetween: 30,
    },
  }"
      :pagination="{
          el: '.swiper-pagination',
          clickable: true,
      }" :navigation="{
          nextEl: '.h1n',
          prevEl: '.h1p',
      }" :modules="modules" class="project-carousel owl-carousel owl-theme">
  >
    <swiper-slide> 
        <!-- Project Block -->
		<div class="project-block">
			<div class="inner-box">
				<div class="image-box">
					<figure class="image"><NuxtLink to="/images/resource/project-1.jpg" class="lightbox-image"><img src="/images/resource/project-1.jpg" alt=""></NuxtLink></figure>
				</div>
				<div class="content-box">
					<div class="inner">
						<span class="title">Project 01</span>
						<h4><NuxtLink to="page-project-details">Transport Service</NuxtLink></h4>
						<NuxtLink to="page-project-details" class="icon"><i class="lnr-icon-arrow-right"></i></NuxtLink>
					</div>
				</div>
			</div>
		</div>
    </swiper-slide>
    <swiper-slide>
        <!-- Project Block -->
		<div class="project-block">
			<div class="inner-box">
				<div class="image-box">
					<figure class="image"><NuxtLink to="/images/resource/project-2.jpg" class="lightbox-image"><img src="/images/resource/project-2.jpg" alt=""></NuxtLink></figure>
				</div>
				<div class="content-box">
					<div class="inner">
						<span class="title">Project 02</span>
						<h4><NuxtLink to="page-project-details">Shipment Monitoring</NuxtLink></h4>
						<NuxtLink to="page-project-details" class="icon"><i class="lnr-icon-arrow-right"></i></NuxtLink>
					</div>
				</div>
			</div>
		</div>
      </swiper-slide>
      <swiper-slide>
        <!-- Project Block -->
		<div class="project-block">
			<div class="inner-box">
				<div class="image-box">
					<figure class="image"><NuxtLink to="/images/resource/project-3.jpg" class="lightbox-image"><img src="/images/resource/project-3.jpg" alt=""></NuxtLink></figure>
				</div>
				<div class="content-box">
					<div class="inner">
						<span class="title">Project 03</span>
						<h4><NuxtLink to="page-project-details">Logistics Cargo</NuxtLink></h4>
						<NuxtLink to="page-project-details" class="icon"><i class="lnr-icon-arrow-right"></i></NuxtLink>
					</div>
				</div>
			</div>
		</div>
      </swiper-slide>
    <swiper-slide>
        <!-- Project Block -->
		<div class="project-block">
			<div class="inner-box">
				<div class="image-box">
					<figure class="image"><NuxtLink to="/images/resource/project-4.jpg" class="lightbox-image"><img src="/images/resource/project-4.jpg" alt=""></NuxtLink></figure>
				</div>
				<div class="content-box">
					<div class="inner">
						<span class="title">Project 04</span>
						<h4><NuxtLink to="page-project-details">Transport Service</NuxtLink></h4>
						<NuxtLink to="page-project-details" class="icon"><i class="lnr-icon-arrow-right"></i></NuxtLink>
					</div>
				</div>
			</div>
		</div>
    </swiper-slide>
  </swiper>
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