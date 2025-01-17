<script lang="ts" setup>
  const loggedIn = ref(false)
  const user = ref(null)

  const config = useAppConfig()
</script>

<template>
  <!-- <div class="flex flex-col flex-1 justify-center items-center gap-6"> -->
  <UContainer>
    <div class="flex flex-col justify-center items-center mt-40">
      <div class="flex gap-4 mb-8">
        <UButton
          v-if="!unref(loggedIn)"
          to="/auth/login"
          variant="outline"
        >
          Login
        </UButton>
        <!-- <UButton
          v-else
          @click="logout"
          >Logout</UButton
        > -->
        <UButton
          to="/auth/register"
          color="neutral"
          variant="outline"
        >
          Register
        </UButton>
      </div>
      <h1 class="font-bold text-4xl">{{ config.title }}</h1>
      <p class="text-lg mt-4">{{ config.description }}</p>
    </div>
  </UContainer>
  <!-- </div> -->
</template>
