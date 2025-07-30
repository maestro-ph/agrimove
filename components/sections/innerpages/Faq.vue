<template>
	<section class="faqs-sections innerpage pt-120 pb-100">
		<div class="auto-container">
			<div class="row">
				<!-- FAQ Column -->
				<div class="faq-column col-lg-6">
					<div class="sec-title mb-30">
						<h3>Research Faq</h3>
					</div>
					<div class="inner-column mb-50">
						<ul class="accordion-box ms-0 wow fadeInRight">
							<!--Block-->
							<li class="accordion block" :class="{ 'active-block': isActive.key === 1}">
								<div class="acc-btn ps-0" :class="{ 'active': isActive.key === 1}" @click="handleClick(1)">
									Is my technology allowed on tech?
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
								<div class="acc-btn ps-0" :class="{ 'active': isActive.key === 2}" @click="handleClick(2)">
									How to soft launch your business?
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
								<div class="acc-btn ps-0" :class="{ 'active': isActive.key === 3}" @click="handleClick(3)">
									How to turn visitors into contributors
									<div class="icon fa fa-plus"></div>
								</div>
								<div class="acc-content" :class="{ 'current': isActive.key === 3}">
									<div class="content">
										<div class="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<!-- FAQ Column -->
				<div class="faq-column col-lg-6">
					<div class="sec-title mb-30">
						<h3>Serivce Faq</h3>
					</div>
					<div class="inner-column mb-50">
						<ul class="accordion-box ms-0 wow fadeInRight">
							<!--Block-->
							<li class="accordion block" :class="{ 'active-block': isActive.key === 4}">
								<div class="acc-btn ps-0" :class="{ 'active': isActive.key === 4}" @click="handleClick(4)">
									How to soft launch your business?
									<div class="icon fa fa-plus"></div>
								</div>
								<div class="acc-content" :class="{ 'current': isActive.key === 4}">
									<div class="content">
										<div class="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
									</div>
								</div>
							</li>
							<!--Block-->
							<li class="accordion block" :class="{ 'active-block': isActive.key === 5}">
								<div class="acc-btn ps-0" :class="{ 'active': isActive.key === 5}" @click="handleClick(5)">
									How to turn visitors into contributors
									<div class="icon fa fa-plus"></div>
								</div>
								<div class="acc-content" :class="{ 'current': isActive.key === 5}">
									<div class="content">
										<div class="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
									</div>
								</div>
							</li>
							<!--Block-->
							<li class="accordion block" :class="{ 'active-block': isActive.key === 6}">
								<div class="acc-btn ps-0" :class="{ 'active': isActive.key === 6}" @click="handleClick(6)">
									How can i find my solutions?
									<div class="icon fa fa-plus"></div>
								</div>
								<div class="acc-content" :class="{ 'current': isActive.key === 6}">
									<div class="content">
										<div class="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
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