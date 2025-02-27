<template>
  <section id="about" class="about">
    <div class="about-content">
      <div class="about-text">
        <div>
          <h3 class="about__title">О студии</h3>
          <p class="about__text">
            Добро пожаловать в Nova — уникальную стриминг студию, созданную для того, чтобы молодые и амбициозные девушки могли
            раскрыть свой потенциал и зарабатывать, оставаясь в комфортной и безопасной обстановке. Мы предоставляем не только
            платформы для трансляций, но и всестороннюю поддержку: от обучения и наставничества до маркетинга и продвижения. С
            нами зарабатывать легко даже с отсутствием опыта!
          </p>
        </div>
        <div class="divider" />
      </div>
      <div class="about-images">
        <div class="about-image image-1">
          <img src="/assets/img/img1.webp" alt="decor_img" class="about-image__img" />
        </div>
        <div class="about-image image-2">
          <img src="/assets/img/img2.webp" alt="decor_img" class="about-image__img" />
        </div>
        <div class="about-image image-3">
          <img src="/assets/img/img3.webp" alt="decor_img" class="about-image__img" />
        </div>
        <div class="about-image image-4">
          <img src="/assets/img/img4.webp" alt="decor_img" class="about-image__img" />
        </div>
        <div class="about-image image-5">
          <img src="/assets/img/img5.webp" alt="decor_img" class="about-image__img" />
        </div>
        <div class="about-image image-6">
          <img src="/assets/img/img6.webp" alt="decor_img" class="about-image__img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.about {
  background: #000;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
  padding: 150px 100px;
  @media (max-width: 400px) {
    padding: 100px 20px;
  }
  &-content {
    display: flex;
    @media (max-width: 1170px) {
      flex-direction: column;
      gap: 80px;
    }
  }
  &-images {
    width: 50%;
    display: grid;
    grid-template-columns: repeat(3, 170px);
    grid-template-rows: repeat(2, 200px);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    @media (max-width: 1170px) {
      width: fit-content;
      margin: 0 auto;
    }
    @media (max-width: 670px) {
      display: none;
    }
  }
  &-image {
    width: 170px;
    height: 200px;
  }
  &-image__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &-text {
    color: white;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1170px) {
      width: 100%;
    }
  }
  &__title {
    font-size: 42px;
    font-weight: 600;
  }
  &__text {
    font-size: 16px;
    font-weight: 300;
    margin-top: 20px;
    width: 70%;
    @media (max-width: 1170px) {
      width: 100%;
    }
  }
}

.image-1 {
  grid-area: 1 / 1 / 2 / 2;
}
.image-2 {
  grid-area: 1 / 2 / 2 / 3;
}
.image-3 {
  grid-area: 1 / 3 / 2 / 4;
}
.image-4 {
  grid-area: 2 / 1 / 3 / 2;
}
.image-5 {
  grid-area: 2 / 2 / 3 / 3;
}
.image-6 {
  grid-area: 2 / 3 / 3 / 4;
}

.divider {
  width: 70%;
  height: 1px;
  background: #fff;
  @media (max-width: 1170px) {
    display: none;
  }
}
</style>
