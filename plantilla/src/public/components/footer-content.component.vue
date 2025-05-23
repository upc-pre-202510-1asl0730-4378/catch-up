<template>
  <div class="grid bg-primary mt-4 p-2 align-content-start text-white">
    <div class="col-12 ml-3 align-items-center justify-content-center">
      <p>© 2025. ACME Studios</p>
    </div>
    <div class="col-12 ml-3 mt-1 align-items-center justify-content-center">
      <p>
        {{ $t('authoringPhrase.intro') }} <i class="pi pi-heart" />
        {{ $t('authoringPhrase.use') }}
        <a href="https://primevue.org/" target="_blank" class="text-white underline">PrimeVue</a>
        {{ $t('authoringPhrase.author', { brand: 'Ricardo Del Aguila - U20231B157' }) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterContent'
}
</script>

<style scoped>
a {
  color: white;
}
</style>
