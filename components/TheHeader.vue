<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>
<template>
  <nav class="d-flex align-items-center gap-5 py-4">
    <li><nuxt-link to="/">Main</nuxt-link></li>
    <li><nuxt-link to="/about">About</nuxt-link></li>
    <li>
      <a :href="switchLocalePath(locale.code)" v-for="locale in availableLocales" :key="locale.code">{{
    locale.name
  }}</a>
    </li>
      
  </nav>
</template>

<style>

</style>