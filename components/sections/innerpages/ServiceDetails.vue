<template>
	<section class="services-details">
		<div class="container">
			<div class="row">
				<!--Start Services Details Sidebar-->
				<div class="col-xl-4 col-lg-4">
					<div class="service-sidebar">
						<!--Start Services Details Sidebar Single-->
						<div class="sidebar-widget service-sidebar-single">
							<div class="service-sidebar-single-services wow fadeInUp"
								data-wow-delay="0.1s" data-wow-duration="1200m">
								<div class="title">
									<h3>All Services</h3>
								</div>
								<ul>
									<li class="current"><NuxtLink to="page-service-details">Air Freight <i class="fa fa-angle-right"></i></NuxtLink></li>
									<li><NuxtLink to="page-service-details">Warehousing <i class="fa fa-angle-right"></i></NuxtLink></li>
									<li><NuxtLink to="page-service-details">Ocean Freight <i class="fa fa-angle-right"></i></NuxtLink></li>
									<li><NuxtLink to="page-service-details">Ground freight <i class="fa fa-angle-right"></i></NuxtLink></li>
								</ul>
							</div>
						</div>
						<!--End Services Details Sidebar Single-->

						<!--Start Services Details Sidebar Single-->
						<div class="sidebar-widget service-sidebar-single">
							<div class="service-sidebar-single-contact-box text-center wow fadeInUp"
								data-wow-delay="0.3s" data-wow-duration="1200m"
								style="background-image:url(images/resource/service-details.jpg);">
								<div class="icon">
									<span class="lnr lnr-icon-phone"></span>
								</div>
								<div class="title">
									<h2>Logistics <br />& Cargo for <br /> Business</h2>
								</div>
								<p class="phone"><NuxtLink to="tel:123456789">666 888 0000</NuxtLink></p>
								<p>Call Us Anytime</p>
							</div>
						</div>

						<!--Start Services Details Sidebar Single-->
						<div class="sidebar-widget service-sidebar-single">
							<div class="service-sidebar-single-btn wow fadeInUp"
								data-wow-delay="0.5s" data-wow-duration="1200m">
								<NuxtLink to="#" class="theme-btn btn-style-two d-grid"><span class="btn-title"><span class="fas fa-file-pdf"></span> download pdf file</span></NuxtLink>
							</div>
						</div>
						<!--End Services Details Sidebar Single-->
					</div>
				</div>
				<!--End Services Details Sidebar-->

				<!--Start Services Details Content-->
				<div class="col-xl-8 col-lg-8">
					<div class="services-details__content">
						<img src="/images/resource/service-details.jpg" alt="" />
						<h2 class="mt-4">Service Overview</h2>
						<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						<p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
						<div class="content">
							<div class="text">
								<h3>Our Scope of Work</h3>
								<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
							</div>
							<div class="feature-list">
								<div class="row clearfix">
									<div class="col-lg-6 col-md-6 col-sm-12 column">
										<div class="single-item">
											<div class="icon-box"><i class="fas fa-check-circle"></i></div>
											<h6 class="title">Fast home delivery</h6>
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-sm-12 column">
										<div class="single-item">
											<div class="icon-box"><i class="fas fa-check-circle"></i></div>
											<h6 class="title">Secure Payments</h6>
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-sm-12 column">
										<div class="single-item">
											<div class="icon-box"><i class="fas fa-check-circle"></i></div>
											<h6 class="title">Real-time Tracking</h6>
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-sm-12 column">
										<div class="single-item">
											<div class="icon-box"><i class="fas fa-check-circle"></i></div>
											<h6 class="title">Safety and Reliability</h6>
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-sm-12 column">
										<div class="single-item">
											<div class="icon-box"><i class="fas fa-check-circle"></i></div>
											<h6 class="title">Warehousing Solutions</h6>
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-sm-12 column">
										<div class="single-item">
											<div class="icon-box"><i class="fas fa-check-circle"></i></div>
											<h6 class="title">Customer Satisfaction</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="">
							<h3>Frequently Asked Question</h3>
							<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
				            <ul class="accordion-box wow fadeInRight">
				              <!--Block-->
				              <li class="accordion block" :class="{ 'active-block': isActive.key === 1}">
				                <div class="acc-btn" :class="{ 'active': isActive.key === 1}" @click="handleClick(1)">What warranties do I have for shipment? 
				                  <div class="icon fa fa-plus"></div>
				                </div>
				                <div class="acc-content" :class="{ 'current': isActive.key === 1}">
				                  <div class="content">
				                    <div class="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
				                  </div>
				                </div>
				              </li>
				              
				              <!--Block-->
				              <li class="accordion block" :class="{ 'active-block': isActive.key === 2}">
				                <div class="acc-btn" :class="{ 'active': isActive.key === 2}" @click="handleClick(2)">What is included in your services?
				                  <div class="icon fa fa-plus"></div>
				                </div>
				                <div class="acc-content" :class="{ 'current': isActive.key === 2}">
				                  <div class="content">
				                    <div class="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
				                  </div>
				                </div>
				              </li>
				              
				              <!--Block-->
				              <li class="accordion block" :class="{ 'active-block': isActive.key === 3}">
				                <div class="acc-btn" :class="{ 'active': isActive.key === 3}" @click="handleClick(3)">What are the payment methods?
				                  <div class="icon fa fa-plus"></div>
				                </div>
				                <div class="acc-content" :class="{ 'current': isActive.key === 3}">
				                  <div class="content">
				                    <div class="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
				                  </div>
				                </div>
				              </li>

				              <!--Block-->
				              <li class="accordion block" :class="{ 'active-block': isActive.key === 4}">
				                <div class="acc-btn" :class="{ 'active': isActive.key === 4}" @click="handleClick(4)">How fast I get my order?
				                  <div class="icon fa fa-plus"></div>
				                </div>
				                <div class="acc-content" :class="{ 'current': isActive.key === 4}">
				                  <div class="content">
				                    <div class="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
				                  </div>
				                </div>
				              </li>
				            </ul>
						</div>
					</div>
				</div>
				<!--End Services Details Content-->
			</div>
		</div>
	</section>
</template>
<script setup>
import { ref } from 'vue';

const isActive = ref({
  status: false,
  key: 1,
})

const handleClick = (key) => {
  if (isActive.value.key === key) {
    isActive.value.status = false
  } else {
    isActive.value.status = true
    isActive.value.key = key
  }
};
</script>