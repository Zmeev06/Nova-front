<template>
  <div class="advantage-item">
    <div class="advantage-item-container">
      <div class="divider-advantage" />
      <div class="advantage-item-content">
        <slot />
        <div class="advantage-item-text">
          <h2 class="advantage-item__title">
            {{ props.title }}
          </h2>
          <p class="advantage-item__text">
            {{ props.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  text: string
}

const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.advantage-item {
  display: inline-block;
  position: absolute;
  padding: 0 70px 70px;
  @media (max-width: 900px) {
    display: block;
    position: relative;
    padding: 0;
  }
  &-container {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  &-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  &__title {
    font-size: 24px;
    font-weight: 600;
  }
  &__text {
    font-size: 14px;
    font-weight: 300;
    max-width: 30vw;
    margin-top: 4px;
    @media (max-width: 900px) {
      max-width: 100vw;
    }
    @media (max-width: 500px) {
      display: none;
    }
  }
}

.divider-advantage {
  height: 176px;
  width: 4px;
  background: #8041ff;
}
</style>
