<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './public/components/language-switcher.component.vue'
import FooterContent from './public/components/footer-content.component.vue'

const { locale } = useI18n()
const switchLanguage = (lang) => {
  locale.value = lang
}

const items = [
  { label: 'option.home', to: '/home' },
  { label: 'option.assignments', to: '/transportation/assignments/new' }
]
</script>

<template>
  <pv-toast />
  <pv-confirm-dialog />

  <header>
    <pv-toolbar class="bg-primary text-white justify-between" aria-label="Main toolbar">
      <template #start>
        <div class="flex items-center gap-3">
          <img
              src="https://logo.clearbit.com/firststudentinc.com"
              alt="FIRSTstudent Logo"
              class="h-10"
          />
          <span class="text-lg font-semibold">{{ $t('toolbar.title') }}</span>
        </div>
      </template>

      <template #center>
        <div class="flex gap-4">
          <router-link
              v-for="item in items"
              :key="item.to"
              :to="item.to"
              class="text-white font-medium"
          >
            {{ $t(item.label) }}
          </router-link>
        </div>
      </template>

      <template #end>
        <LanguageSwitcher @switch-language="switchLanguage" />
      </template>
    </pv-toolbar>
  </header>

  <main class="p-4" aria-label="Main content">
    <router-view />
  </main>

  <FooterContent />
</template>
