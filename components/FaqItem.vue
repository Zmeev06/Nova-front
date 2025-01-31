<template>
  <div class="faq-item" :class="isOpen ? 'faq-item__active' : ''">
    <div class="faq-item-content" @click="toggle">
      <p class="faq-item__number">
        {{ props.num }}
      </p>
      <p class="faq-item__title">
        {{ props.title }}
      </p>
      <div class="faq-item-plus" :class="isOpen ? 'faq-item-plus__active' : ''">
        <plus />
      </div>
    </div>
    <div class="faq-item-answer" :class="isOpen ? 'faq-item-answer__active' : ''">
      <p class="faq-item-answer__text">
        {{ props.answer }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import plus from 'assets/img/plus.svg?component'
interface Props {
  num: number | string
  title: string
  answer: string
}

const props = defineProps<Props>()

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped lang="scss">
.faq-item {
  border-bottom: 1px solid #fff;
  max-height: 85px;
  padding-bottom: 15px;
  overflow: hidden;
  transition: 0.7s ease-in-out;
  &__active {
    max-height: 300px;
  }
  &-content {
    display: flex;
    padding: 24px 22px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    @media (max-width: 470px) {
      padding: 24px 0;
    }
  }
  &__number {
    color: #888;
    font-size: 27px;
    @media (max-width: 800px) {
      display: none;
    }
  }
  &__title {
    color: #fff;
    font-size: 27px;
    @media (max-width: 1200px) {
      font-size: 23px;
    }
  }
  &-plus {
    min-width: 30px;
    min-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #efefef;
    border-radius: 6px;
    font-size: 27px;
    transition: 0.7s;
    &__active {
      transform: rotate(45deg);
    }
  }
  &-answer {
    padding: 0 22px;
    opacity: 0;
    transition: 0.7s;
    &__active {
      opacity: 1;
    }
    &__text {
      color: #fff;
    }
  }
}
</style>
