<script lang="ts" setup>
  const config = useAppConfig()
</script>

<template>
  <div>
    <UHeader :title="config.title" />
    <slot />
  </div>
</template>
