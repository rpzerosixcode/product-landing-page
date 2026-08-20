<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'

import bannerImage from '@/assets/images/dark-blue.jpg'
</script>

<template>
  <section
    class="banner"
    :style="{ backgroundImage: `url(${bannerImage})` }"
  >
    <div class="banner__content">
      <h2 class="banner__title">
        Technology, Refined
      </h2>

      <p class="banner__description">
        Thoughtful products. Simpler experiences.
      </p>
    </div>

    <BaseButton variant="light">
      EXPLORE AUREX

      <BaseIcon
        name="arrow-up-right"
        aria-hidden="true"
      />
    </BaseButton>
  </section>
</template>

<style scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 135px;
  padding: var(--spacing-xs) var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  color: var(--color-white);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.banner__content {
  display: grid;
  gap: var(--spacing-sm);
}

.banner__title,
.banner__description {
  color: var(--color-white);
}

@media (max-width: 768px) {
  .banner {
    flex-direction: column;
    justify-content: center;
    gap: var(--spacing-lg);

    min-height: 240px;
    height: auto;
    padding: var(--spacing-lg) var(--spacing-sm);

    text-align: center;
  }

  .banner__content {
    justify-items: center;
  }
}
</style>