<template>
  <section>
    <Header />
    <div class="head">
      <div class="head-content">
        <div class="head-background">
          <div class="head-background__item bg-first" />
          <div class="head-background__item bg-second" />
          <div class="head-background__item bg-third" />
        </div>
        <div class="head-text">
          <div class="head-text-bid">
            <p class="head-text-bid__text">Ваш путь к звёздному успеху в мире стриминга!</p>
            <button class="head-text-bid__button">Оставить заявку</button>
          </div>
          <h1 class="head-text__title">NOVA</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const { width } = useWindowSize()
onMounted(() => {
  const images = document.querySelectorAll('.head-background__item')

  const timeline = gsap.timeline()

  images.forEach((image, index) => {
    timeline.to(image, {
      rotateX: 0,
      opacity: 1,
      duration: 0.7,
      ease: 'power3.out',
      delay: index * 0.1
    })
  })

  const text = document.querySelector('.head-text__title')

  if (width.value > 1170)
    gsap.to(text, {
      x: '-35%', // Перемещаем текст в центр экрана
      duration: 2.5, // Длительность анимации
      ease: 'power3.out' // Плавный эффект
    })
  else if (width.value > 900)
    gsap.to(text, {
      x: '-90%', // Перемещаем текст в центр экрана
      duration: 2.5, // Длительность анимации
      ease: 'power3.out' // Плавный эффект
    })
  else
    gsap.to(text, {
      x: '0%', // Перемещаем текст в центр экрана
      duration: 2.5, // Длительность анимации
      ease: 'power3.out' // Плавный эффект
    })
})
</script>

<style scoped lang="scss">
.head {
  &-content {
    display: flex;
    align-items: flex-end;
    max-width: 100vw;
    overflow: hidden;
    @media (max-width: 900px) {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }
  &-background {
    height: calc(100vh - 60px);
    min-width: 51vw;
    max-width: 51vw;
    perspective: 1000px;
    position: relative;
    @media (max-width: 1200px) {
      min-width: 60vw;
      max-width: 60vw;
    }
    @media (max-width: 1170px) {
      min-width: 98vw;
      max-width: 98vw;
    }
    @media (max-width: 550px) {
      height: 60vh;
    }
    @media (max-width: 420px) {
      height: 50vh;
    }
    &__item {
      position: absolute;
      width: 100%;
      height: 33.33%; /* Делим на три равные части */
      background-image: url('/assets/img/bg.webp'); /* Задаем одно большое изображение */
      background-size: 100% 300%; /* Растягиваем фон по высоте */
      background-repeat: no-repeat;
      transform-origin: top; /* Указываем точку вращения сверху */
      transform: rotateX(90deg); /* Начальное состояние — перевернуты вверх */
      opacity: 0; /* Скрыто до анимации */
      &.bg-first {
        top: 0;
        background-position: 0 0;
      }
      &.bg-second {
        top: 33.33%;
        background-position: 0 50%;
      }
      &.bg-third {
        top: 66.66%;
        background-position: 0 100%;
      }
    }
  }
  &-text {
    position: relative;
    height: 45vh;
    display: flex;
    align-items: flex-end;
    @media (max-width: 550px) {
      height: fit-content;
    }
    &-bid {
      position: absolute;
      top: -100px;
      left: 140px;
      @media (max-width: 900px) {
        top: 900px;
        left: auto;
        right: 20px;
      }
      @media (max-width: 550px) {
        top: 600px;
        right: 0;
      }
      @media (max-width: 460px) {
        display: none;
      }
      &__text {
        font-size: 20px;
        font-weight: 300;
        width: 290px;
      }
      &__button {
        padding: 10px 19px;
        color: #fff;
        background: #000;
        border-radius: 38px;
        margin-top: 16px;
        transition: 0.3s;
        &:hover {
          background: rgba(0, 0, 0, 0.73);
        }
      }
    }
    &__title {
      transform: translateX(100%) translateY(15%);
      white-space: nowrap;
      font-size: 370px;
      font-weight: 800;
      @media (max-width: 1440px) {
        font-size: 300px;
      }
      @media (max-width: 1200px) {
        font-size: 270px;
      }
      @media (max-width: 690px) {
        font-size: 220px;
      }
      @media (max-width: 550px) {
        font-size: 180px;
        height: 230px;
      }
      @media (max-width: 450px) {
        font-size: 120px;
        height: 170px;
      }
    }
  }
}
</style>
