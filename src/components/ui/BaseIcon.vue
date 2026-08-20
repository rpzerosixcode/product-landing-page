<script setup>
import { computed } from 'vue'
import { icons, iconNames } from '@/icons'

const props = defineProps({
  name: {
    type: String,
    required: true,
    validator: (value) => iconNames.includes(value),
  },
  size: {
    type: [String, Number],
    default: '26px',
  },
})

const iconClass = computed(() => icons[props.name])
</script>

<template>
  <font-awesome-icon :icon="iconClass" :style="{ fontSize: size }" class="base-icon" />
</template>

<style scoped>
.base-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>