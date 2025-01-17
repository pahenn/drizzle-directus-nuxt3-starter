<script setup lang="ts">
  import type { NuxtError } from "#app"

  const props = defineProps<{
    error: NuxtError
  }>()

  const config = useAppConfig()
</script>

<template>
  <UApp>
    <UHeader :title="config.title" />

    <UError :error="error" />
  </UApp>
</template>
