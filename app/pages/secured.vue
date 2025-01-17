<script lang="ts" setup>
  definePageMeta({
    middleware: "auth",
  })

  const user = ref(null)
</script>

<template>
  <div>secured page</div>
  <pre>
    {{ unref(user) }}
  </pre>
</template>
