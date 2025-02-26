<template>
  <div class="container">
    <BaseHeader></BaseHeader>

    <main class="main">
      <div class="main__wrapper">
        <NuxtPage></NuxtPage>
      </div>
    </main>

    <BaseFooter></BaseFooter>
  </div>
</template>

<script setup></script>

<style lang="scss">
.container {
  max-width: 1240px;
  width: 100%;
  padding: 0 12px;
  margin: 0 auto;
}
</style>
