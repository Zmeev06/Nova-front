<template>
  <section id="contact_us" class="form">
    <div class="form-title">
      <h1 ref="text" class="title">
        <span v-for="(letter, index) in letters" :key="index" class="letter">
          {{ letter }}
        </span>
      </h1>
      <h1 ref="text" class="title title2">
        <span v-for="(letter, index) in title2" :key="index" class="letter">
          {{ letter }}
        </span>
      </h1>
    </div>

    <form class="form-block" @submit.prevent="onSubmit">
      <input v-model="formData.name" placeholder="Ваше имя" type="text" class="form__input" />
      <input v-model="formData.age" placeholder="Ваш возраст" type="text" class="form__input" />
      <input v-model="formData.phone" placeholder="Ваш телеграм" type="text" class="form__input" />
      <div class="dropdown">
        <div class="dropdown__input" @click="toggleDropdown">
          {{ formData.vacancy || 'Вакансия' }}
        </div>
        <ul v-if="isOpen" class="dropdown__menu">
          <li v-for="option in options" :key="option" @click="selectOption(option)">
            {{ option }}
          </li>
        </ul>
      </div>
      <div class="form-footer">
        <div class="form-button">
          <button class="form__button">Отправить заявку</button>
          <p class="form__text">Нажимая кнопку, я соглашаюсь с политикой обработки персональных данных.</p>
        </div>
        <footer class="footer">
          <a class="footer__link" href="mailto:director.nova.st@gmail.com">director.nova.st@gmail.com</a>
          <a class="footer__link footer__tel" href="tel:+79180870885">+7 918 087-08-85</a>
          <a href="https://t.me/nova_std"><tg /></a>
        </footer>
      </div>
    </form>
    <div v-if="isOpenModal" class="form-modal">
      <div class="form-modal__content">
        <p>Спасибо за вашу заявку!</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import tg from '../assets/img/tg.svg?component'
import axios from 'axios'

const text = ref(null)

const isOpen = ref(false)
const options = ref(['Модель', 'Администратор', 'Оператор'])

const formData = ref({
  name: '',
  phone: '',
  age: '',
  vacancy: ''
})

const isOpenModal = ref(false)

const openModal = () => {
  isOpenModal.value = true
  setTimeout(() => (isOpenModal.value = false), 1000)
}

const onSubmit = () => {
  axios
    .post('https://api.nova-studio.online/form', formData.value)
    .then((response) => openModal())
    .catch((error) => console.error('Ошибка:', error))
  formData.value = {
    name: '',
    phone: '',
    age: '',
    vacancy: ''
  }
}
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option) => {
  formData.value.vacancy = option
  isOpen.value = false
}

// Текст, который будет анимироваться
const textContent = 'ОТПРАВИТЬ'
const titleContent2 = 'ЗАЯВКУ'

// Разделяем текст на отдельные буквы
const letters = textContent.split('')
const title2 = titleContent2.split('')

onMounted(() => {
  // Эффект при скролле
  window.addEventListener('scroll', handleScroll)

  // Чистим обработчик события при уничтожении компонента
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

const handleScroll = () => {
  const textElement = text.value
  if (!textElement) return

  const rect = textElement.getBoundingClientRect()
  if (rect.top < window.innerHeight && rect.bottom > 0)
    // Запускаем анимацию мигания при попадании текста в зону видимости
    gsap.fromTo(
      '.letter',
      {
        opacity: 0
      },
      {
        opacity: 1,
        repeat: 2, // Бесконечный повтор
        yoyo: true, // Чередование: исчезает и появляется
        duration: 0.3, // Время мигания
        stagger: {
          amount: 1, // Равномерное время между буквами
          from: 'random' // Случайный порядок букв
        }
      }
    )
}
</script>

<style scoped lang="scss">
.form {
  background: #000;
  padding: 0 100px 30px;
  @media (max-width: 600px) {
    padding: 0 50px 30px;
  }
  &-modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.27);
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &__content {
      width: 300px;
      height: 200px;
      background: #ffffff;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000000;
      font-size: 20px;
    }
  }
  &-title {
    display: flex;
    flex-direction: column;
  }
  &-block {
    display: flex;
    flex-direction: column;
    gap: 20px;
    transform: translateY(-70%);
    @media (max-width: 1350px) {
      transform: none;
    }
  }
  &__input {
    width: 40%;
    display: block;
    height: 40px;
    border: 1px solid #dcdcde;
    border-radius: 8px;
    padding: 0 10px;
    color: #dcdcde;
    @media (max-width: 950px) {
      width: 100%;
    }
  }
  &-button {
    display: flex;
    gap: 16px;
    @media (max-width: 700px) {
      flex-direction: column;
    }
  }
  &__button {
    background: #fff;
    width: 221px;
    height: 40px;
    border-radius: 6px;
    transition: 0.3s;
    &:hover {
      background: rgba(255, 255, 255, 0.67);
    }
  }
  &__text {
    color: #fff;
    font-weight: 300;
    width: 350px;
    @media (max-width: 700px) {
      width: 100%;
    }
  }
  &-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1210px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
  }
}
.title {
  font-size: 180px;
  font-weight: 300;
  display: flex;
  width: fit-content;
  @media (max-width: 1200px) {
    font-size: 80px;
  }
  @media (max-width: 630px) {
    font-size: 50px;
  }
  @media (max-width: 450px) {
    font-size: 40px;
  }
  &2 {
    align-self: flex-end;
    @media (max-width: 1350px) {
      align-self: flex-start;
    }
  }
}
.footer {
  display: flex;
  gap: 16px;
  align-items: center;
  @media (max-width: 1210px) {
    justify-content: space-between;
    width: 100%;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
  &__link {
    color: white;
  }
}
.letter {
  display: inline-block;
  color: rgba(255, 255, 255, 0.16);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.dropdown {
  position: relative;
  display: inline-block;
  width: 40%;
}

.dropdown__input {
  width: 100%;
  height: 40px;
  border: 1px solid #dcdcde;
  border-radius: 8px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #676767;
}

.dropdown__menu {
  position: absolute;
  width: 100%;
  background: #fff;
  border: 1px solid #dcdcde;
  border-radius: 8px;
  list-style: none;
  margin: 5px 0 0;
  padding: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.dropdown__menu li {
  padding: 10px;
  cursor: pointer;
}

.dropdown__menu li:hover {
  background: #f0f0f0;
}

@media (max-width: 950px) {
  .dropdown {
    width: 100%;
  }
}
</style>
