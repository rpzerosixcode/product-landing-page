<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

import HeroSection from '@/components/section/HeroSection.vue'
import FeaturesSection from '@/components/section/FeaturesSection.vue'
import ProductsSection from '@/components/section/ProductsSection.vue'
import CtaSection from '@/components/section/CtaSection.vue'
</script>

<template>
  <div class="app">
    <Header />

    <main id="main-content" class="app__main">
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <CtaSection />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  width: min(100% - 48px, 1200px);
  margin-inline: auto;
  gap: var(--spacing-md);
}

.app__main {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}
</style>