<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
</script>

<template>
  <section class="hero">
    <div class="hero__image">
      <img
        src="/src/assets/images/aurex-laptop-hero.png"
        alt="AUREX laptop"
      />
    </div>

    <div class="hero__content">
      <h1 class="hero__title">
        Made to
        <br />
        Matter.
        <br />
        <strong>Built to</strong>
        <br />
        <strong>Belong.</strong>
      </h1>

      <p class="hero__description">
        Thoughtfully designed technology that brings
        clarity, simplicity, and purpose to every moment.
      </p>

      <BaseButton>
        EXPLORE AUREX

        <BaseIcon
          name="arrow-up-right"
          aria-hidden="true"
        />
      </BaseButton>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr;
  align-items: center;
  min-height: 500px;
  overflow: hidden;
}

.hero :deep(button) {
  background: var(--color-black);
  color: var(--color-white);
  padding: 10px 16px;
  border-radius: 999px;
  font-size: 10px;
}

.hero__image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__image img {
  width: 100%;
  max-width: 700px;
  height: auto;
  object-fit: contain;
}

.hero__content {
  display: grid;
  gap: var(--spacing-md);
  max-width: 420px;
}


.hero__title {
  margin: 0;
  font-family: 'Sora', sans-serif;
  font-size: 54px;
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.03em;
}

.hero__title strong {
  font-weight: 700;
}

.hero__description {
  max-width: 360px;
  margin: 0;
  font-size: var(--font-size-sm);
  line-height: 1.6;
}

.hero :deep(svg) {
  width: 15px;
  height: 15px;
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: var(--spacing-lg) var(--spacing-sm);
  }

  .hero__image {
    display: none;
  }

  .hero__content {
    max-width: 100%;
    text-align: center;
    justify-items: center;
  }

  .hero__title {
    font-size: 42px;
  }

  .hero__description {
    max-width: 320px;
  }
}
</style>