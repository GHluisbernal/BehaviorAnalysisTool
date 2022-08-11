<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const tooltipShow = ref(false)
const hideTooltip = () => {
  tooltipShow.value = false
}

const setLanguage = (lang: string) => {
  if (!availableLocales.includes(lang))
    return
  locale.value = lang
}
</script>

<template>
  <q-btn-dropdown class="q-mr-sm" :aria-label="t('button.toggle_langs')" @before-show="hideTooltip()">
    <template #label>
      <q-icon name="mdi-translate" />
      <q-tooltip v-model="tooltipShow">
        {{ t('button.toggle_langs') }}
      </q-tooltip>
    </template>
    <q-list>
      <q-item v-for="lang in availableLocales" :key="lang" v-close-popup clickable tabindex="0" @click="setLanguage(lang)">
        <q-item-section>
          <q-item-label>{{ lang }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>
