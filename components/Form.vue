<template>
  <section class="form">
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

    <form class="form-block">
      <input placeholder="Ваше имя" type="text" class="form-input" />
      <input placeholder="Ваш возраст" type="text" class="form-input" />
      <input placeholder="Ваше телеграм" type="text" class="form-input" />
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const text = ref(null)

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
  padding: 0 100px;
  &-title {
    display: flex;
    flex-direction: column;
  }
  &-block {
    display: flex;
    flex-direction: column;
    gap: 20px;
    transform: translateY(-100%);
  }
  &-input {
    width: 40%;
    display: block;
    height: 40px;
    border: 1px solid #dcdcde;
    border-radius: 8px;
    padding: 0 10px;
    color: #dcdcde;
  }
}
.title {
  font-size: 180px;
  font-weight: 300;
  display: flex;
  width: fit-content;
  &2 {
    align-self: flex-end;
  }
}

.letter {
  display: inline-block;
  color: rgba(255, 255, 255, 0.16);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
</style>
