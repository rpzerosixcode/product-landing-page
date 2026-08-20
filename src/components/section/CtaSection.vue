<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
</script>

<template>
  <section class="banner">
    <div class="banner__content">
      <h2 class="banner__title">
        Technology, Refined
      </h2>

      <p class="banner__description">
        Thoughtful products. Simpler experiences.
      </p>
    </div>

    <BaseButton>
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
  width: 100%;
  height: 135px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px var(--spacing-sm);
  color: var(--color-white);
  background-image: url('/src/assets/images/dark-blue.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 12px;
}

.banner__content {
  display: grid;
  gap: var(--spacing-sm);
}

.banner__title,
.banner__description {
  color: var(--color-white);
}

.banner :deep(svg) {
  width: 15px;
  height: 15px;
}

@media (max-width: 768px) {
  .banner {
    height: auto;
    min-height: 240px;
    flex-direction: column;
    justify-content: center;
    gap: var(--spacing-lg);
    padding: var(--spacing-lg) var(--spacing-sm);
    text-align: center;
  }

  .banner__content {
    justify-items: center;
  }
}
</style>