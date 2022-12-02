<template>
<div class="wf-section">
    <div data-delay="4000" data-animation="over" class="fullheight-slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="0" data-infinite="true">
      <div class="mask-2 w-slider-mask">
        <div class="slide w-slide">
          <div class="flex-container">
            <div class="flex-column image-column">
              <div class="slider-image-container">
                <div class="slider-image"></div>
              </div>
            </div>
            <div class="flex-column content-column">
              <div class="slide-top">
                <div class="slider-heading-container">
                  <p>Enable values</p>
                </div>
                <div class="slider-content-div">
                  <p class="text-2xl slide-text">We are here to solve real problems for real people.</p>
                  <div class="slide-number-container">
                    <p class="text-4xl slide-number">01</p>
                  </div>
                </div>
              </div>
              <p class="slide-description">Eu a vel sit platea quam ornare nibh. Odio euismod ornare ut eu ultrices molestie pretium.</p>
            </div>
          </div>
        </div>
        <div class="slide w-slide">
          <div class="flex-container">
            <div class="flex-column image-column">
              <div class="slider-image-container">
                <div class="slider-image-2"></div>
              </div>
            </div>
            <div class="flex-column content-column">
              <div class="slide-top">
                <div class="slider-heading-container">
                  <p>Enable values</p>
                </div>
                <div class="slider-content-div">
                  <p class="text-2xl slide-text">We believe in partnerships and honesty.</p>
                  <div class="slide-number-container">
                    <p class="text-4xl slide-number">02</p>
                  </div>
                </div>
              </div>
              <p class="slide-description">Eu a vel sit platea quam ornare nibh. Odio euismod ornare ut eu ultrices molestie pretium.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="left-arrow w-slider-arrow-left"><img src="/images/slider-arrow-left.svg" loading="lazy" alt=""></div>
      <div class="right-arrow w-slider-arrow-right"><img src="/images/slider-arrow-right.svg" loading="lazy" alt=""></div>
      <div class="slide-nav-2 w-slider-nav w-round"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>
