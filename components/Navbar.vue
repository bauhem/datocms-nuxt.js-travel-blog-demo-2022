<template>
    <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar position-absolute w-nav">
   <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">{{
    locale.name
  }}</NuxtLink>
  <p style="color:white">{{$t('hello')}}</p>
    <div class="nav-container">
      <a href="index.html" aria-current="page" class="nav-logo w-inline-block w--current"><img src="/images/Bauhem-logo.svg" loading="lazy" alt=""></a>
      <nav role="navigation" id="w-node-_18ef0839-e789-e19a-0eb2-1ac625c19b69-25c19b65" data-w-id="18ef0839-e789-e19a-0eb2-1ac625c19b69" class="nav-menu w-nav-menu">
        <a href="work.html" class="nav-link-block w-inline-block">
          <div class="second-nav-link-text">Work</div>
          <div class="nav-link-text">Work</div>
        </a>
        <a href="services.html" class="nav-link-block w-inline-block">
          <div class="second-nav-link-text">Services</div>
          <div class="nav-link-text">Services</div>
        </a>
        <a href="about.html" class="nav-link-block w-inline-block">
          <div class="second-nav-link-text">About</div>
          <div class="nav-link-text">About</div>
        </a>
        <a href="journal.html" class="nav-link-block w-inline-block">
          <div class="second-nav-link-text">Journal</div>
          <div class="nav-link-text">Journal</div>
        </a>
        <a href="contact.html" class="nav-link-block w-inline-block">
          <div class="second-nav-link-text">Contact</div>
          <div class="nav-link-text">Contact</div>
        </a>
      </nav>
      <div class="menu-button w-nav-button">
        <div class="top-line"></div>
        <div class="bottom-line"></div>
      </div>
    </div>
  </div>
      
</template>

<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>
