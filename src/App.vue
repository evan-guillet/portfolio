<script setup lang="ts">
import PortfolioMain from './pages/PortfolioMain.vue'
import Header from './components/PageHeader.vue'
</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <PortfolioMain />
  </main>
</template>

<style scoped>
header {
  width: 100%;
  line-height: 60px;
}
main {
  width: 100%;
}
</style>
