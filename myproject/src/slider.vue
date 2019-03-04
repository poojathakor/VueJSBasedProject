<template>
  <div class="slider">
    <b-carousel
      id="carousel1"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      indicators
      background="#ababab"
     
      img-width="1024"
      img-height="480"
      v-model="slide"
      fade=true
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Search through 2 Million plus royalty-free Icons and Images from 400+ Contributors."
        text="Get high-quality Icons, Illustrations and Stock photos at one place"
        img-src="./src/assets/images/bg1.jpg"
      />

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="./src/assets/images/bg2.jpg">
        <h1>Search through 2 Million plus royalty-free Icons and Images from 400+ Contributors.</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="./src/assets/images/bg3.jpg" />

      <b-carousel-slide img-src="./src/assets/images/bg4.jpg" />

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-src="./src/assets/images/bg5.jpg" img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br />
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>