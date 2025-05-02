<template>
  <section class="faqs-section" style="background-image: url(./images/background/2.jpg)">
    <div class="auto-container">
      <div class="row">
        <!-- FAQ Column -->
        <div class="faq-column col-lg-6 col-md-12 col-sm-12 order-4">
          <div class="inner-column">
            <ul class="accordion-box wow fadeInRight">
              <!--Block-->
              <li class="accordion block" :class="{ 'active-block': isActive.key === 1}">
                <div class="acc-btn" :class="{ 'active': isActive.key === 1}" @click="handleClick(1)">What warranties do I have for shipment? 
                  <div class="icon fa fa-plus"></div>
                </div>
                <div class="acc-content" :class="{ 'current': isActive.key === 1}">
                  <div class="content">
                    <div class="text">There are many variations of passages of available, but the majority have suffered alteration in some form.</div>
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
                    <div class="text">There are many variations of passages of available, but the majority have suffered alteration in some form.</div>
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
                    <div class="text">There are many variations of passages of available, but the majority have suffered alteration in some form.</div>
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
                    <div class="text">There are many variations of passages of available, but the majority have suffered alteration in some form.</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Content Column -->
        <div class="content-column col-lg-6 col-md-12 col-sm-12">
          <div class="inner-column">
            <div class="sec-title">
              <span class="sub-title">frequently asked questions</span>
              <h2>Things you need to know and we know your’s</h2>
            </div>

            <div class="faq-block">
              <div class="inner-box">
                <i class="icon lnr-icon-arrow-right"></i>
                <h4>Donec Quis felis Commodo</h4>
                <div class="text">Lorem ipsum is simply free text dolor sit amet, passage of consectetur notted</div>
              </div>
            </div>

            <div class="faq-block">
              <div class="inner-box">
                <i class="icon lnr-icon-arrow-right"></i>
                <h4>Donec Quis felis Commodo</h4>
                <div class="text">Lorem ipsum is simply free text dolor sit amet, passage of consectetur notted.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

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