<template>
  <section id="stages" class="stages">
    <div class="stages-content">
      <div class="stages-header">
        <h3 class="stages-header__title">Как начать работу с нами?</h3>
        <p class="stages-header__text">Присоединиться к нашей команде очень просто!</p>
      </div>
      <div class="stages-cards">
        <div class="stages-cards-content stages-cards1">
          <Stage
            class="stage-item stage-item1"
            text="Заполните анкету на нашем сайте, указав все необходимые данные. Это первый шаг к вашей новой карьере! "
            title="Оставьте заявку"
            num="1"
          />
          <Stage
            class="stage-item stage-item2"
            text="После рассмотрения заявки мы свяжемся с вами для уточнения некоторых деталей, а также согласуем дату и время собеседования. "
            title="Уточнение деталей"
            num="2"
          />
          <Stage
            class="stage-item stage-item3"
            text="В день встречи мы оплатим такси, чтобы вы могли без проблем добраться до нас. На собеседовании мы обсудим ваши возможности и условия работы."
            title="Пройдите собеседование"
            num="3"
          />
        </div>
        <div class="stages-cards-content stages-cards2">
          <Stage
            class="stage-item stage-item4"
            text="Во время собеседования вы получите информацию о нашей студии, условиях работы и перспективах. Это отличная возможность задать вопросы и узнать больше о нашей команде!"
            title="Задайте вопросы"
            num="4"
          />
          <Stage
            class="stage-item stage-item5"
            text="После собеседования мы согласуем с вами удобное время работы и дату первой трансляции."
            title="Начните зарабатывать"
            num="5"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()

onMounted(() => {
  const childBlocks = gsap.utils.toArray('.stage-item')

  gsap.fromTo(
    childBlocks,
    {
      opacity: 0,
      y: 150
    }, // Начальное состояние блоков
    {
      opacity: 1,
      y: 0,
      duration: 0.5, // Длительность анимации одного блока
      stagger: 0.2, // Задержка между анимациями блоков
      scrollTrigger: {
        trigger: childBlocks,
        start: 'top 80%', // Когда верх блока входит в зону видимости
        end: 'bottom 20%', // Когда нижняя часть блока выходит из зоны видимости
        scrub: true // Анимация синхронизируется со скроллом
      }
    }
  )
})
</script>

<style scoped lang="scss">
.stages {
  padding: 0 100px;
  @media (max-width: 480px) {
    padding: 0 20px;
  }
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__title {
      font-size: 42px;
      font-weight: 600;
      width: 23%;
      @media (max-width: 1440px) {
        width: 30%;
      }
      @media (max-width: 900px) {
        width: 100%;
      }
    }
    &__text {
      width: 25%;
      @media (max-width: 900px) {
        display: none;
      }
    }
  }
  &-cards {
    margin-top: 50px;
    position: relative;
    height: 150vh;
    @media (max-width: 1500px) {
      height: 170vh;
    }
    @media (max-width: 705px) {
      height: 2000px;
    }
    @media (max-width: 480px) {
      height: 1100px;
    }
    &-content {
      display: flex;
      justify-content: space-between;
    }
  }
}
.stage-item {
  position: absolute;
  &1 {
    top: 0;
    left: 0;
  }
  &2 {
    top: 150px;
    right: calc(50% - 180px);
    @media (max-width: 1200px) {
      right: calc(50% - 150px);
    }
    @media (max-width: 900px) {
      top: 0;
      right: 0;
    }
    @media (max-width: 705px) {
      top: 400px;
      right: auto;
      left: 0;
    }
    @media (max-width: 480px) {
      top: 200px;
    }
  }
  &3 {
    top: 300px;
    right: 0;
    @media (max-width: 900px) {
      top: 400px;
      left: 0;
    }
    @media (max-width: 705px) {
      top: 800px;
    }
    @media (max-width: 480px) {
      top: 400px;
    }
  }
  &4 {
    top: 700px;
    left: calc(50% - 180px);
    @media (max-width: 900px) {
      top: 400px;
      right: 0;
      left: auto;
    }
    @media (max-width: 705px) {
      top: 1200px;
      right: auto;
      left: 0;
    }
    @media (max-width: 480px) {
      top: 600px;
    }
  }
  &5 {
    top: 850px;
    right: 0;
    @media (max-width: 900px) {
      top: 800px;
      left: 0;
      right: auto;
    }
    @media (max-width: 705px) {
      top: 1600px;
    }
    @media (max-width: 480px) {
      top: 800px;
    }
  }
}
</style>
