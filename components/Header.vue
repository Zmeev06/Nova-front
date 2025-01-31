<template>
  <header class="header">
    <div class="header-content">
      <logo class="logo" />
      <nav class="header-nav">
        <ul class="header-nav__list">
          <li class="header-nav__list-item">
            <a class="header-nav__link" href="#about_us">О нас</a>
          </li>
          <li class="header-nav__list-item">
            <a class="header-nav__link" href="#advantages">Преимущества</a>
          </li>
          <li class="header-nav__list-item">
            <a class="header-nav__link" href="#how_start">Как начать?</a>
          </li>
          <li class="header-nav__list-item">
            <a class="header-nav__link" href="#faq">FAQ</a>
          </li>
          <li class="header-nav__list-item">
            <a class="header-nav__link header-nav__button" href="#contact_us">Связаться с нами</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import logo from '/assets/img/logo.svg?component'
</script>

<style scoped lang="scss">
.header {
  padding: 0 100px;
  height: 60px;
  display: flex;
  align-items: center;
  background: #000;
  @media (max-width: 450px) {
    padding: 0 20px;
  }
  &-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-nav {
    &__list {
      display: flex;
      align-items: center;
      gap: 44px;
      @media (max-width: 900px) {
        gap: 0px;
      }
    }
    &__link {
      color: #fff;
      transition: 0.3s;
      &:hover {
        color: #c4c4c4;
      }
      @media (max-width: 900px) {
        display: none;
      }
    }
    &__button {
      background: #fff;
      color: #000;
      padding: 10px 19px;
      border-radius: 32px;
      &:hover {
        color: #000;
        background: #c4c4c4;
      }
      @media (max-width: 900px) {
        display: block;
      }
    }
  }
}
</style>
