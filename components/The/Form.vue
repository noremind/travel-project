<template>
  <section class="form">
    <div class="form__wrapper">
      <h3 class="form__title">Book Now</h3>

      <form class="form__forms">
        <div class="form__box">
          <UiInput class="form__input" placeholder="Phone"></UiInput>
          <UiInput class="form__input" placeholder="Name"></UiInput>
        </div>
        <div class="form__box">
          <UiInput class="form__input" placeholder="Data"></UiInput>
          <UiInput class="form__input" placeholder="Email"></UiInput>
        </div>
        <div class="form__box">
          <UiInput class="form__input" placeholder="Hotel title"></UiInput>
        </div>
      </form>

      <UiButton class="form__btn button-primary" label="Send"></UiButton>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: center;
  background-color: rgba(236, 235, 235, 0.3);
  border-radius: 16px;
  &__wrapper {
    max-width: 735px;
    width: 100%;
    padding: 16px;
  }
  &__box {
    display: flex;
    justify-content: space-between;
    gap: 26px;
  }
  &__title {
    font-weight: 700;
    color: $surface-900;
    margin: 26px 0;
    text-align: center;
  }
  &__forms {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  &__input {
    width: 100%;
  }
  &__btn {
    max-width: 200px;
    margin: 12px auto;
  }
}
</style>
