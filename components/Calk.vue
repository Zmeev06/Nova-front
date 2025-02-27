<template>
  <section class="calk">
    <div class="calk-title">
      <h3 class="calk__header">Сколько ты заработаешь?</h3>
      <p class="calk__text">Рассчитай свою зарплату в пару кликов</p>
    </div>
    <div class="calk-body">
      <div class="calk-item">
        <p class="calk__text">Буду работать часов в день:</p>
        <div class="calk-buttons">
          <div
            v-for="(item, index) in Array(4)"
            :key="item"
            class="calk__number"
            :class="hours === index + 6 ? 'calk__number--active' : ''"
            @click="hours = index + 6"
          >
            <span>{{ index + 6 }}</span>
          </div>
        </div>
      </div>
      <div class="calk-item">
        <p class="calk__text">Буду работать дней в неделю:</p>
        <div class="calk-buttons">
          <div
            v-for="(item, index) in Array(3)"
            :key="item"
            class="calk__number"
            :class="days === index + 4 ? 'calk__number--active' : ''"
            @click="days = index + 4"
          >
            <span>{{ index + 4 }}</span>
          </div>
        </div>
      </div>
      <div class="calk-divider" />
      <div class="calk-result">
        <div>
          <p class="calk-result__text">{{ result }} Р</p>
          <p class="calk-result__subtitle">Твоя зарплата в месяц:</p>
        </div>
        <a href="#contact_us"><button class="calk-button">Оставить заявку</button></a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { count } from '~/scripts/count'

const hours = ref(6)
const days = ref(5)
const result = computed(() => count(days.value, hours.value))
</script>

<style scoped lang="scss">
.calk {
  display: flex;
  padding: 0 100px;
  justify-content: space-between;
  margin-bottom: 200px;
  @media (max-width: 910px) {
    flex-direction: column;
    gap: 40px;
  }
  @media (max-width: 450px) {
    padding: 0 50px;
  }
  &-title {
    width: 40%;
    @media (max-width: 1270px) {
      width: 30%;
    }
    @media (max-width: 910px) {
      width: 100%;
    }
  }
  &-result {
    margin-top: 32px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    @media (max-width: 6300px) {
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
      margin-top: 10px;
      gap: 20px;
    }
    &__text {
      font-size: 42px;
      font-weight: 700;
    }
    &__subtitle {
      font-size: 14px;
      font-weight: 300;
    }
  }
  &-body {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 40%;
    @media (max-width: 1270px) {
      width: 60%;
    }
    @media (max-width: 910px) {
      width: 100%;
    }
  }
  &-button {
    padding: 17px 55px;
    border-radius: 32px;
    background: #000;
    color: white;
    transition: 0.3s;
    &:hover {
      background: #4a4a4a;
    }
  }
  &__header {
    font-size: 42px;
    font-weight: 600;
  }
  &__text {
    margin-top: 16px;
    font-weight: 300;
    color: #252525;
  }
  &-divider {
    width: 100%;
    height: 1px;
    background: #8041ff;
  }
  &-buttons {
    display: flex;
    margin-top: 12px;
    gap: 12px;
  }
  &__number {
    width: 44px;
    height: 44px;
    border-radius: 100%;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
    &--active {
      background: #8041ff;
      border: 1px solid #8041ff;
      color: white;
    }
  }
}
</style>
