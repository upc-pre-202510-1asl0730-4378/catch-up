<template>
  <div class="text-center p-6">
    <h2 class="text-2xl font-bold mb-4">404 - Page Not Found</h2>
    <p class="mb-4">The path <strong>{{ $route.path }}</strong> does not exist.</p>
    <pv-button label="Go to Home" @click="goHome" />
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
  methods: {
    goHome() {
      this.$router.push('/home')
    }
  }
}
</script>
