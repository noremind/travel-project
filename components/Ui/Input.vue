<template>
  <div class="input">
    <label class="input__label" for="" v-if="label">{{ label }}</label>
    <div class="input__wrapper" :class="customClass">
      <UiIcons
        v-if="beforeIcon"
        :icon="beforeIcon"
        :color="iconColor"
        :size="iconSize"
      ></UiIcons>
      <input
        class="input__field"
        :class="{ 'input__field--center': isCenter }"
        :type="type"
        name=""
        v-maska
        :data-maska="maska"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
      />
      <UiIcons
        v-if="afterIcon"
        :icon="afterIcon"
        :color="iconColor"
        :size="iconSize"
      ></UiIcons>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: String,
    defautl: "",
  },
  maska: {
    type: String,
    default: "",
  },
  label: String,
  placeholder: String,
  disabled: Boolean,
  beforeIcon: String,
  afterIcon: String,
  iconSize: String,
  iconColor: String,
  customClass: String,
  isCenter: Boolean,
});
</script>

<style lang="scss" scoped>
.input {
  &__wrapper {
    border-radius: 26px;
    padding: 10px;
    max-width: 100%;
    border: 1px solid $surface-300;
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: space-between;
    background-color: white;
  }
  &__label {
    color: $surface-900;
    font-weight: 400;
    font-size: 14px;
  }
  &__field {
    width: 100%;
    &--center {
      text-align: center;
      font-size: 16px;
      font-weight: 400;
    }
    &[placeholder] {
      color: $surface-900;
    }
  }
}
</style>
