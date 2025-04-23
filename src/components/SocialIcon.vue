<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  img: String,
  link: String,
  alt: String,
})

const svgContent = ref<string | null>(null)

onMounted(async () => {
  const response = await fetch(`./src/assets/icons/${props.img}.svg`)
  if (response.ok) {
    svgContent.value = await response.text()
  }
})
</script>

<template>
  <a :href="props.link" target="_blank">
    <div v-if="svgContent" v-html="svgContent" class="social-img" :aria-label="props.alt"></div>
  </a>
</template>

<style scoped>
a {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 100%;

  &:hover {
    background-color: rgb(200, 200, 200);
  }

  &:active {
    background-color: rgb(180, 180, 180);
  }
}

.social-img {
  width: 25px;
  height: 25px;
  color: #000;
}
</style>
