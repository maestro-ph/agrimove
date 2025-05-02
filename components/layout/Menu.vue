<template>
  <ul class="navigation">
    <li class="current dropdown">
      <NuxtLink to="/">Home</NuxtLink>
      <ul>
        <li><NuxtLink to="/">Home page 01</NuxtLink></li>
        <li><NuxtLink to="/index-2">Home page 02</NuxtLink></li>
      </ul>
    </li>
    <li class="dropdown">
      <NuxtLink to="#">Pages</NuxtLink>
      <ul>
        <li><NuxtLink to="/page-about">About</NuxtLink></li>
        <li class="dropdown">
          <NuxtLink to="/">Team</NuxtLink>
          <ul>
            <li><NuxtLink to="/page-team">Team grid</NuxtLink></li>
            <li><NuxtLink to="/page-team-details">Team Details</NuxtLink></li>
          </ul>
        </li>
        <li><NuxtLink to="/page-testimonial">Testimonial</NuxtLink></li>
        <li><NuxtLink to="/page-pricing">Pricing</NuxtLink></li>
        <li><NuxtLink to="/page-faq">Faq</NuxtLink></li>
        <li><NuxtLink to="/page-error">404</NuxtLink></li>
      </ul>
    </li>
    <li class="dropdown">
      <NuxtLink to="#">Services</NuxtLink>
      <ul>
        <li><NuxtLink to="/page-service">Service grid</NuxtLink></li>
        <li><NuxtLink to="/page-service-details">Service Details</NuxtLink></li>
      </ul>
    </li>
    <li class="dropdown"><NuxtLink href="/page-projects">Projects</NuxtLink>
      <ul>
        <li><NuxtLink href="/page-projects">Projects Grid</NuxtLink></li>
        <li><NuxtLink href="/page-project-details">Project Details</NuxtLink></li>
      </ul>
    </li>
    <li class="dropdown">
      <NuxtLink to="#">News</NuxtLink>
      <ul>
        <li><NuxtLink to="/news-grid">News Grid</NuxtLink></li>
        <li><NuxtLink to="/news-details">News Details</NuxtLink></li>
      </ul>
    </li>
    <li><NuxtLink to="/page-contact">Contact</NuxtLink></li>
  </ul>
</template>