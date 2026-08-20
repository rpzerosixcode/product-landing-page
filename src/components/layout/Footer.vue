<script setup>
import BaseIcon from '@/components/ui/BaseIcon.vue'
</script>

<template>
  <footer class="footer">
    <nav class="footer__nav" aria-label="Footer navigation">
      <a href="#warranty">Warranty</a>
      <a href="#help">Help Center</a>
      <a href="#contact">Contact</a>
    </nav>

    <div class="footer__social" aria-label="Social media">
      <a href="#" aria-label="Instagram">
        <BaseIcon name="instagram" />
      </a>

      <a href="#" aria-label="Facebook">
        <BaseIcon name="facebook" />
      </a>
    </div>

    <nav class="footer__legal" aria-label="Legal navigation">
      <a href="#privacy">Privacy Policy</a>
      <a href="#terms">Terms of Service</a>
    </nav>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer__nav,
.footer__social,
.footer__legal {
  display: flex;
  gap: var(--spacing-md);
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .footer__social {
    order: 1;
  }
}
</style>