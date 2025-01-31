<template>
  <div class="stage">
    <div class="stage-content">
      <div class="stage__number">
        {{ props.num }}
      </div>
      <h4 class="stage__title">
        {{ props.title }}
      </h4>
      <p class="stage__text">
        {{ props.text }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  num: number | string
  title: string
  text: string
}

const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.stage {
  background: #000;
  border-radius: 12px;
  height: 416px;
  width: 380px;
  padding: 32px;
  @media (max-width: 1200px) {
    height: 380px;
    width: 300px;
  }
  @media (max-width: 805px) {
    height: 380px;
    width: 250px;
  }
  @media (max-width: 705px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    height: fit-content;
  }
  &__number {
    width: 36px;
    height: 36px;
    background: #8041ff;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    font-size: 24px;
  }
  &__title {
    font-size: 27px;
    font-weight: 600;
    color: #fff;
    margin-top: 24px;
    width: 70%;
    @media (max-width: 900px) {
      font-size: 24px;
    }
  }
  &__text {
    font-size: 16px;
    color: #e8e8e8;
    font-weight: 300;
    margin-top: 24px;
    @media (max-width: 480px) {
      display: none;
    }
  }
}
</style>
