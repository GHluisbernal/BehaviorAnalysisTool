<script setup lang="ts">
const { t } = useI18n()
const { dark } = useQuasar()
</script>

<template>
  <q-btn icon="mdi-theme-light-dark" class="q-mr-sm" :aria-label="t('button.toggle_dark')" @click="dark.toggle">
    <q-tooltip>{{ t('button.toggle_dark') }}</q-tooltip>
  </q-btn>
</template>
