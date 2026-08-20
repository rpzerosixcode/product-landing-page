<script setup>
import BaseIcon from '@/components/ui/BaseIcon.vue'
</script>

<template>
  <header class="header">
    <h1 class="header__logo">
      <a href="/">AUREX</a>
    </h1>

    <nav
      class="header__nav"
      aria-label="Main navigation"
    >
      <a href="#community">Community</a>
      <a href="#journal">Journal</a>
      <a href="#about">About</a>
      <a href="#philosophy">Philosophy</a>
    </nav>

    <a
      href="#"
      class="header__bag"
      aria-label="Shopping bag"
    >
      <BaseIcon name="bag-shopping" />
    </a>

    <button
      type="button"
      class="header__menu"
      aria-label="Open navigation menu"
    >
      <BaseIcon name="menu" />
    </button>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__nav {
  display: flex;
  gap: var(--spacing-md);
}

.header__nav a {
  font-weight:var(--font-weight-medium);
  text-transform: uppercase;
}

.header__menu {
  display: none;
}

@media (max-width: 768px) {
  .header__nav {
    display: none;
  }

  .header__menu {
    display: block;
    order: -1;
  }
}

</style>
