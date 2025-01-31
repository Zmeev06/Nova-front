<template>
  <section ref="container" class="advantages">
    <div class="advantages-content">
      <div class="advantages-header">
        <h3 class="advantages-header__title">Преимущества сотрудничества</h3>
        <p class="advantages-header__text">
          Что выделяет нас на фоне других студий? В стриминг студии Nova мы стремимся создать уникальные условия работы и
          атмосферу в которых сами хотели бы находиться. Мы верим, что каждая модель — это индивидуальность, и именно поэтому мы
          предлагаем персонализированный подход, который позволяет нашим партнерам раскрыть свой потенциал и достичь успеха.
        </p>
        <p class="advantages-header__text second__text">
          Присоединяйтесь к нам и откройте для себя мир возможностей в стриминге! Мы уверены, что с нами вы сможете не только
          зарабатывать, но и наслаждаться процессом, развивая свои таланты и создавая уникальный контент для своих зрителей.
        </p>
        <button class="advantages-header__button">Оставить заявку</button>
      </div>
      <div class="advantages-info">
        <AdvantageItem
          class="first-advantage"
          title="Высокий доход"
          text="Наша команда компетентных специалистов поможет на каждом этапе, а прозрачная система выплат и отсутствие скрытых комиссий — это то, что поможет выстроить доверительные отношения и поддержать стабильность роста доходов."
        >
          <coins />
        </AdvantageItem>
        <AdvantageItem
          class="second-advantage"
          title="Поддержка на всех этапах работы"
          text="У нас вы найдете поддержку и понимание. Мы создаем сообщество, где каждая модель может делиться своим опытом, получать советы и находить новых друзей."
        >
          <chat />
        </AdvantageItem>
        <AdvantageItem
          class="third-advantage"
          title="Полная конфиденциальность"
          text="Мы заботимся о вашей безопасности и конфиденциальности, предоставляя надежные инструменты для работы."
        >
          <shield />
        </AdvantageItem>
        <AdvantageItem
          class="fourth-advantage"
          title="Удобные условия работы"
          text="Мы регулярно проводим акции и конкурсы, которые позволяют нашим моделям зарабатывать дополнительные бонусы и призы. У нас есть программа лояльности, которая вознаграждает активных участников."
        >
          <home />
        </AdvantageItem>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import coins from 'assets/img/coins.svg?component'
import chat from 'assets/img/chat.svg?component'
import shield from 'assets/img/shield.svg?component'
import home from 'assets/img/home.svg?component'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()

onMounted(() => {
  if (width.value > 900) {
    const items = gsap.utils.toArray('.advantage-item')

    const timeline = gsap.timeline({
      defaults: {
        overwrite: 'auto',
        ease: 'power1'
      },
      scrollTrigger: {
        end: '+=300%',
        pin: true,
        scrub: true,
        start: 'top 40%',
        trigger: '.advantages'
      }
    })

    gsap.set('.advantages-info', { autoAlpha: 1 })

    timeline.set(items, { transformOrigin: 'center top' })

    timeline
      .from(items, {
        duration: 0.7,
        opacity: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        stagger: 0.7,
        yPercent: 120
      })
      .to(
        items,
        {
          duration: 0.7,
          opacity: 0,
          rotationX: 20,
          rotationY: 2,
          scale: 0.75,
          stagger: 0.7,
          y: -240
        },
        0.8
      )
  }
})
</script>

<style scoped lang="scss">
.advantages {
  margin-top: 50vh;
  margin-bottom: 30vh;
  @media (max-width: 900px) {
    margin-top: 100px;
    margin-bottom: 100px;
  }
  &-content {
    padding: 0 100px;
    display: flex;
    @media (max-width: 900px) {
      flex-direction: column;
    }
    @media (max-width: 480px) {
      padding: 0 20px;
    }
  }
  &-header {
    width: 50%;
    @media (max-width: 900px) {
      width: 100%;
    }
    &__title {
      font-size: 42px;
      font-weight: 600;
      @media (max-width: 900px) {
        width: 50%;
      }
    }
    &__text {
      width: 75%;
      margin-top: 16px;
      font-size: 16px;
      font-weight: 300;
      @media (max-width: 900px) {
        width: 100%;
      }
      &.second__text {
        @media (max-width: 1440px) {
          display: none;
        }
      }
    }
    &__button {
      padding: 10px 55px;
      color: #fff;
      background: #000;
      border-radius: 38px;
      margin-top: 40px;
      transition: 0.3s;
      &:hover {
        background: rgba(0, 0, 0, 0.73);
      }
    }
  }
  &-info {
    display: flex;
    width: 50%;
    flex-direction: column;
    perspective: 400px;
    visibility: hidden;
    position: relative;
    @media (max-width: 900px) {
      visibility: visible;
      width: 80vw;
      gap: 30px;
      margin-top: 60px;
    }
  }
}
</style>
