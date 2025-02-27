<template>
  <section id="faq" class="faq">
    <div class="faq-content">
      <div class="faq-text">
        <h3 class="faq__title">Мы готовы ответить на все твои вопросы</h3>
        <p class="faq__text">
          Не нашли ответ на свой вопрос? <br />
          Напишите нам и мы ответим на все ваши вопросы
        </p>
      </div>
      <div class="faq-items">
        <FaqItem
          title="В чем заключается суть работы моделью?"
          num="01"
          answer="Работа заключается в общение с иностранными пользователями сайтов. У пользователей могут быть самые разные просьбы, но модель вправе выполнять только те, которые не нарушают ее личные границы."
        />
        <FaqItem
          title="Можно ли начать работать без опыта?"
          num="02"
          answer="Не переживай. Наша команда проводит обучение и повышение квалификации, а также сопровождает все трансляции и помогает начать зарабатывать уже с первого дня."
        />
        <FaqItem
          title="Нужно ли знание английского языка?"
          num="03"
          answer="Знание английского языка не обязательно. Наши устройства сами осуществляют перевод текста с одного языка на другой."
        />
        <FaqItem
          title="Есть ли какие-то обязательства?"
          num="04"
          answer="Абсолютно никаких обязательств. В течении первых 3х смен ты можешь попробовать работу у нас и решить для себя, хочешь ли ты стать частью нашей команды. Выплаты в течении этого времени производим ежедневно."
        />
        <FaqItem
          title="Нужно ли за что-то платить?"
          num="05"
          answer="Нет. Студия предоставляет все необходимое для работы бесплатно."
        />
        <FaqItem
          title="Как и когда я могу уйти в отпуск?"
          num="06"
          answer="Отпуск можно взять в любое время, достаточно просто заранее предупредить нас."
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.faq {
  background: #252525;
  padding: 150px 100px;
  @media (max-width: 480px) {
    padding: 100px 20px;
  }
  &-content {
    display: flex;
    justify-content: space-between;
    @media (max-width: 900px) {
      flex-direction: column;
    }
  }
  &-text {
    width: 40%;
    @media (max-width: 900px) {
      width: 100%;
    }
  }
  &-items {
    width: 40%;
    @media (max-width: 1840px) {
      width: 60%;
    }
    @media (max-width: 900px) {
      width: 100%;
      margin-top: 40px;
    }
  }
  &__title {
    color: #fff;
    font-size: 42px;
    font-weight: 600;
    width: 65%;
    @media (max-width: 1440px) {
      font-size: 30px;
    }
  }
  &__text {
    color: #fff;
    font-size: 16px;
    font-weight: 200;
    margin-top: 100px;
    @media (max-width: 900px) {
      margin-top: 16px;
    }
  }
}
</style>
