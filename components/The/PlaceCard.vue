<template>
  <section class="card">
    <div class="card__wrapper">
      <img
        class="card__img"
        src="@/assets/image/content/place.png"
        alt="Preview"
      />

      <h3 class="card__title">Lucca Bike Tour</h3>
      <div>
        <span class="card__text">from</span>
        <span class="card__price">34$</span>
      </div>

      <div class="card__box">
        <div class="card__box-inner">
          <UiIcons icon="calendar" class="orange" />
          <p class="card__box-text">Every Day</p>
        </div>
        <div class="card__box-inner">
          <UiIcons icon="people" color="orange" />
          <p class="card__box-text">10-30 PP</p>
        </div>
      </div>

      <p class="card__description">
        A tour of the city and its surroundings led by a professional guide ...
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
  &__wrapper {
    max-width: 270px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  &__img {
    max-width: 270px;
    width: 100%;
    border-radius: 16px;
  }
  &__text {
    font-size: 12px;
    margin-right: 12px;
  }
  &__price {
    color: $orange;
    font-weight: 600;
  }
  &__title {
    font-size: 16px;
    font-weight: 600;
  }
  &__description {
    font-size: 14px;
  }
  &__box {
    display: flex;
    justify-content: space-between;
    &-inner {
      display: flex;
      gap: 4px;
      font-size: 12px;
      align-items: center;
      color: $orange;
    }
  }
}
</style>
