<script lang="ts" setup>
  const config = useAppConfig()
</script>

<template>
  <div>
    <UHeader :title="config.title" />
    <UMain>
      <slot />
    </UMain>
  </div>
</template>
