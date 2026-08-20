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
        <h2 class="feature__number">
          {{ feature.number }}
        </h2>

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
  justify-content: flex-start;
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

.feature__title,
.feature__description {
  max-width: 350px;
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