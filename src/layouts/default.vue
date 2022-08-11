<script setup lang="ts">
const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

// TODO
const isAuthenticated = ref(true)
</script>

<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense round icon="mdi-dots-vertical" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>

        <q-space />

        <toolbar-theme-btn />
        <toolbar-language-btn />

        <!-- TODO: Implement actual logic -->
        <q-btn-dropdown v-if="isAuthenticated" class="q-mr-sm" aria-label="Account profile photo that open list of alternate options">
          <template #label>
            <q-avatar size="sm">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </template>
          <q-list>
            <q-item-label header>
              Profile
            </q-item-label>
            <q-item v-close-popup clickable tabindex="0" />
          </q-list>
        </q-btn-dropdown>
        <q-btn v-else class="q-mr-sm">
          Sign In
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
