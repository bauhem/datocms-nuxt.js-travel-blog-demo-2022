<template>
  <div
    data-w-id="25aff1ea-b55a-61cc-823a-64fa10236ee9"
    class="section home-hero-section wf-section"
  >
    <div class="container">
      <div class="w-layout-grid _12-column-grid">
        <div
          id="w-node-_65cc3115-b90f-4342-9ec5-dd964d208d6c-5867234d"
          data-w-id="65cc3115-b90f-4342-9ec5-dd964d208d6c"
          class="hero-content-container"
        >
          <div class="label">
            <div class="label-dot"></div>
            <p class="text-small">Welcome</p>
          </div>
          <h1 class="text-xl home-hero-heading" v-html="item.paragraph.replace(/<[^>]+>/g, '')">
            
          </h1>
        </div>
        <a
          id="w-node-_94966ec1-06fd-807f-46b7-ad568a0e3389-5867234d"
          href="index.html"
          aria-current="page"
          class="brand w-inline-block w--current"
          ><img
            src="/images/Bauhem-logo.svg"
            loading="lazy"
            data-w-id="94966ec1-06fd-807f-46b7-ad568a0e338a"
            id="w-node-_94966ec1-06fd-807f-46b7-ad568a0e338a-5867234d"
            alt=""
            class="hero-logo"
        /></a>
      </div>
    </div>
    <div
      data-w-id="ecdf15b6-14a7-61d9-1778-a0d2e4f22588"
      class="hero-image-container"
    >
      <div
        data-poster-url="https://uploads-ssl.webflow.com/62bedcae4c5875b3eb275c3a/62c3e000a5e6591178ea45bf_video (6)-poster-00001.jpg"
        data-video-urls="https://uploads-ssl.webflow.com/6388d1f4ab22f1a8fc67233a/6388d1f4ab22f1b40867242f_video%20(6)-transcode.mp4,https://uploads-ssl.webflow.com/6388d1f4ab22f1a8fc67233a/6388d1f4ab22f1b40867242f_video%20(6)-transcode.webm"
        data-autoplay="true"
        data-loop="true"
        data-wf-ignore="true"
        data-w-id="40e418f5-ef79-929e-7d52-9fe957502986"
        class="hero-video w-background-video w-background-video-atom"
      >
        <video
          id="40e418f5-ef79-929e-7d52-9fe957502986-video"
          autoplay=""
          loop=""
          style="
            background-image: url('https://uploads-ssl.webflow.com/62bedcae4c5875b3eb275c3a/62c3e000a5e6591178ea45bf_video (6)-poster-00001.jpg');
          "
          muted=""
          playsinline=""
          data-wf-ignore="true"
          data-object-fit="cover"
        >
          <source
            src="https://uploads-ssl.webflow.com/6388d1f4ab22f1a8fc67233a/6388d1f4ab22f1b40867242f_video%20(6)-transcode.mp4"
            data-wf-ignore="true"
          />
          <source
            src="https://uploads-ssl.webflow.com/6388d1f4ab22f1a8fc67233a/6388d1f4ab22f1b40867242f_video%20(6)-transcode.webm"
            data-wf-ignore="true"
          />
        </video>
      </div>
      <img
        src="/images/Rectangle-294-min.png"
        loading="lazy"
        srcset="
          /images/Rectangle-294-min-p-500.png   500w,
          /images/Rectangle-294-min-p-800.png   800w,
          /images/Rectangle-294-min-p-1080.png 1080w,
          /images/Rectangle-294-min-p-1600.png 1600w,
          /images/Rectangle-294-min-p-2000.png 2000w,
          /images/Rectangle-294-min-p-2600.png 2600w,
          /images/Rectangle-294-min-p-3200.png 3200w
        "
        sizes="(max-width: 479px) 0px, 100vw"
        alt=""
        class="hero-image"
      />
    </div>
    <div
      data-w-id="e30e73b9-7b99-df37-63a1-561bd446a922"
      class="hero-bottom-right-wrapper"
    >
      <a
        href="#Welcome"
        data-w-id="cae9c8b8-33d2-71ca-ddcc-918d7a9a462f"
        class="scroll-down-container w-inline-block"
      >
        <div
          data-w-id="582555d2-18f1-e69e-594b-af2199c0e349"
          class="scroll-down-arrow-container"
        >
          <img
            src="/images/chevron-down.svg"
            loading="lazy"
            data-w-id="62d4b2ea-041c-de61-f117-ab3b99afbee6"
            alt=""
            class="scroll-down-arrow top-arrow"
          /><img
            src="/images/chevron-down.svg"
            loading="lazy"
            data-w-id="c254ca20-79ce-94ec-ade9-8d3b1cebf6ae"
            alt=""
            class="scroll-down-arrow"
          />
        </div>
      </a>
      <p data-w-id="3ad75f41-f334-7ea9-428d-c78bc42115e5" class="text-small">
        Scroll down to explore more
      </p>
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
