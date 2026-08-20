<script setup>
import features from '@/data/features'
</script>

<template>
  <section class="features">
    <article
      v-for="feature in features"
      :key="feature.number"
      class="feature"
    >
      <div class="feature__image">
        <img
          :src="feature.image"
          :alt="feature.title"
        />
      </div>

      <div class="feature__content">
        <span class="feature__number">
          {{ feature.number }}
        </span>

        <h2 class="feature__title">
          {{ feature.title }}
        </h2>

        <p class="feature__description">
          {{ feature.description }}
        </p>
      </div>
    </article>
  </section>
</template>

<style scoped>
.features {
  display: grid;
  gap: var(--spacing-lg);
  justify-content: center;
}

.feature {
  display: flex;
  position: relative;
  gap: var(--spacing-lg);
}

.feature__image {
  width: 500px;
  height: 250px;
  flex-shrink: 0;
}

.feature__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  border-radius: var(--border-radius-lg);
}

.feature__content {
  flex: 1;
  min-width: 0;
  display: grid;
  justify-content: space-between;
  gap: var(--spacing-sm);
}

.feature__number {
  font-size: var(--text-heading);
  font-weight: var(--font-weight-bold);
  color: var(--color-black);
}

.feature__title,
.feature__description {
  max-width: 350px;
}

@media (max-width: 1024px) {
  .feature__image {
    width: 400px;
  }
}

@media (max-width: 768px) {
  .feature {
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .feature__image {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }

  .feature__content {
    order: -1;
    justify-content: center;
    text-align: center;
  }
}
</style>