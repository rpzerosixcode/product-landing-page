<script setup>
defineProps({
  type: {
    type: String,
    default: 'button',
  },

  variant: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value),
  },
})
</script>

<template>
  <button
    :type="type"
    :class="['button', `button--${variant}`]"
  >
    <slot />
  </button>
</template>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);


  padding: var(--spacing-xs) var(--spacing-sm);

  border-radius: var(--border-radius-lg);

  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.08em;
  white-space: nowrap;

  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  height: 60px;
  width:225px;
}

/* Variants */

.button--light {
  background-color: var(--color-white);
  color: var(--color-black);
}

.button--dark {
  background-color: var(--color-black);
  color: var(--color-white);
}

/* States */

.button--light:hover {
  background-color: var(--color-gray-100);
}

.button--dark:hover {
  background-color: var(--color-gray-800);
}
</style>