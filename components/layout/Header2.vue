<template>
  <!-- <header  :class="{ 'sticky': scroll }">
      Header 1
    </header> -->
    <header class="main-header header-style-one" :class="{ 'moblie-search-active': isSearch }">
      <div class="header-top">
        <div class="top-left">
          <div class="text"><i class="fa fa-map-marker color2 me-2"></i>Kabacan, North Cotabato</div>
          <ul class="social-links">
            <li><NuxtLink to="#"><span class="fab fa-twitter"></span></NuxtLink></li>
            <li><NuxtLink to="#"><span class="fab fa-facebook"></span></NuxtLink></li>
            <li><NuxtLink to="#"><span class="fab fa-pinterest"></span></NuxtLink></li>
            <li><NuxtLink to="#"><span class="fab fa-instagram"></span></NuxtLink></li>
          </ul>
        </div>

        <div class="top-right">
          <!-- Info List -->
          <ul class="info-list">
            <li><i class="fa fa-envelope"></i> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=usmarttbi.agrimove@gmail.com" target="_blank" rel="noopener">usmarttbi.agrimove@gmail.com</a></li>
            <li><i class="fa fa-clock"></i> Mon - Sat 8:00 - 6:30, Sunday - CLOSED</li>
          </ul>
        </div>
      </div>
      <div class="header-upper">
        <!-- Main box -->
        <div class="main-box">
          <div class="logo"><NuxtLink to="/"><img src="/images/logo1.png" alt="" title="AgriMove"></NuxtLink></div>

          <!--Nav Box-->
          <div class="nav-outer">
            <nav class="nav main-menu">
              <LayoutMenu/>
            </nav>
            <!-- Main Menu End-->

            <div class="outer-box">

              <button class="ui-btn ui-btn search-btn" @click="handleSearch">
                <span class="icon lnr lnr-icon-search"></span>
              </button>

              <NuxtLink to="#" class="ui-btn"><i class="lnr-icon-shopping-cart"></i></NuxtLink>

              <NuxtLink to="#" class="theme-btn btn-style-one info-btn"><span class="btn-title"><i class="icon lnr-icon-phone-handset"></i><small>Call Anytime</small><br> 09978142880</span></NuxtLink>

              <!-- Mobile Nav toggler -->
              <div class="mobile-nav-toggler" @click="handleToggled"><span class="icon lnr-icon-bars"></span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Menu  -->
      <div class="mobile-menu">
        <div class="menu-backdrop" @click="handleToggled"></div>

        <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
        <nav class="menu-box">
          <div class="upper-box">
            <div class="nav-logo">
              <NuxtLink to="/"><img src="/images/logo2.png" alt="" title=""></NuxtLink>
            </div>
            <div class="close-btn" @click="handleToggled"><i class="icon fa fa-times"></i></div>
          </div>
          <LayoutMobileMenu />
          <ul className="contact-list-one light">
            <li>
              <div className="contact-info-box">
                <i className="icon lnr-icon-phone-handset"></i>
                <span className="title">Call Now</span>
                <div className="text">
                  <NuxtLink to="/tel:09978142880">09978142880</NuxtLink>
                </div>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <span className="icon lnr-icon-envelope1"></span>
                <span className="title">Send Email</span>
                <div className="text">                                    
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=usmarttbi.agrimove@gmail.com" target="_blank" rel="noopener">usmarttbi.agrimove@gmail.com</a>
                </div>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <span className="icon lnr-icon-clock"></span>
                <span className="title">Send Email</span>
                <div className="text">                                    
                  Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                </div>
              </div>
            </li>
          </ul>
          <ul class="social-links">
            <li>
              <NuxtLink to="#"><i class="fab fa-twitter"></i></NuxtLink>
            </li>
            <li>
              <NuxtLink to="#"><i class="fab fa-facebook-f"></i></NuxtLink>
            </li>
            <li>
              <NuxtLink to="#"><i class="fab fa-pinterest"></i></NuxtLink>
            </li>
            <li>
              <NuxtLink to="#"><i class="fab fa-instagram"></i></NuxtLink>
            </li>
          </ul>
        </nav>
      </div><!-- End Mobile Menu -->

      <!-- Header Search -->
      <div class="search-popup">
        <span class="search-back-drop" @click="handleSearch"></span>
        <button class="close-search" @click="handleSearch"><span class="fa fa-times"></span></button>

        <div class="search-inner">
          <form method="post" action="">
            <div class="form-group">
              <input type="search" name="search-field" value="" placeholder="Search..." required="">
              <button type="submit"><i class="fa fa-search"></i></button>
            </div>
          </form>
        </div>
      </div>
      <!-- End Header Search -->

      <!-- Sticky Header  -->
      <div class="sticky-header" :class="{ 'fixed-header animated slideInDown': scroll }">
        <div class="auto-container">
          <div class="inner-container">
            <!--Logo-->
            <div class="logo">
              <NuxtLink to="/" title=""><img src="/images/logo1.png" alt="" title=""></NuxtLink>
            </div>

            <!--Right Col-->
            <div class="nav-outer">
              <!-- Main Menu -->
              <nav class="main-menu">
                <div class="navbar-collapse show collapse clearfix">
                  <LayoutMenu />
                </div>
              </nav><!-- Main Menu End-->

              <!--Mobile Navigation Toggler-->
              <div class="mobile-nav-toggler" @click="handleToggled"><span class="icon lnr-icon-bars"></span></div>
            </div>
          </div>
        </div>
      </div><!-- End Sticky Menu -->
    </header>
  </template>

  <script setup>
  import { onMounted, onUnmounted, ref } from 'vue'
  const scroll = ref(false)
  const handleScroll = () => {
    const scrollCheck = window.scrollY > 100
    if (scrollCheck !== scroll.value) {
      scroll.value = scrollCheck
    }
  }

  onMounted(() => {
    document.addEventListener("scroll", handleScroll)
  })
  onUnmounted(() => {
    document.removeEventListener("scroll", handleScroll)
  })

  const isToggled = ref(false)
  const handleToggled = () => {
    isToggled.value = !isToggled.value
    document.body.classList.toggle("mobile-menu-visible", isToggled.value)
  }
  const isSearch = ref(false)
  const handleSearch = () => {
    isSearch.value = !isSearch.value
  }
  </script>