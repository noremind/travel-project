<template>
  <div class="home">
    <div class="home__wrapper"></div>
    <section class="preview">
      <div class="preview__wrapper">
        <img
          class="preview__image"
          src="@/assets/image/content/main-preview.png"
          alt="Preview"
        />
        <h1 class="preview__title">Enjoy in the best way!</h1>
        <p class="preview__description">
          Enjoy our services for your trip anytime
        </p>
      </div>
    </section>
    <section class="place">
      <div class="place__wrapper">
        <div class="place__header">
          <h2 class="place__title">Explore Our Popular Destinantions</h2>
          <div class="place__icons">
            <UiIcons
              class="place__icon prev-img"
              icon="chevron"
              size="size-20"
              color="black"
            ></UiIcons>
            <UiIcons
              icon="chevron"
              size="size-20"
              color="black"
              class="place__icon down next-img"
            ></UiIcons>
          </div>
        </div>

        <div class="place__cards">
          <UiSwiper
            :loop="true"
            :autoplay="true"
            next-btn-class=".next-img"
            prev-btn-class=".prev-img"
            :perSlides="4"
          >
            <swiper-slide v-for="card in 5" :key="card">
              <ThePlaceCard></ThePlaceCard>
            </swiper-slide>
          </UiSwiper>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.home {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
.preview {
  &__wrapper {
    height: 90vh;
  }
  &__image {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
  &__title {
    font-size: 48px;
    font-weight: 700;
    margin: 0 auto;
    color: white;
    text-align: center;
    font-family: "Podcast", sans-serif;
    margin-top: 120px;
  }
  &__description {
    text-align: center;
    color: white;
    margin-top: 12px;
  }
}

.place {
  &__wrapper {
  }
  &__header {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    margin-bottom: 32px;
  }
  &__icons {
    display: flex;
    gap: 12px;
  }
  &__icon {
    cursor: pointer;
  }
}
</style>
