<script setup>
import products from '@/data/products'
</script>

<template>
  <section class="products" id="products">
    <header class="products__header">
      <h2 class="products__title">
        Technology That Fits Your Life
      </h2>

      <p class="products__description">
        Modern devices designed to feel at home in your everyday life.
        Refined, reliable, and made to simply work.
      </p>
    </header>

    <div class="products__grid">
      <article
        v-for="product in products"
        :key="product.name"
        class="product"
      >
        <div class="product__image">
          <img
            :src="product.image"
            :alt="product.name"
          />
        </div>

        <h3 class="product__name">
          {{ product.name }}
        </h3>

        <p class="product__price">
          {{ product.price }}
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.products {
  display: grid;
  gap: var(--spacing-lg);
}

.products__header {
  display: grid;
  gap: var(--spacing-sm);
  text-align: center;
}

.products__title {
  margin: 0;
}

.products__description {
  max-width: 600px;
  margin-inline: auto;
}

.products__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
}

.product {
  display: grid;
  justify-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  text-align: center;
  background: var(--color-off-white);
}

.product__image {
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product__image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product__name,
.product__price {
  margin: 0;
}

.product__name {
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
}

.product__price {
  font-size: var(--font-size-sm);
}

@media (max-width: 768px) {
  .products__grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>