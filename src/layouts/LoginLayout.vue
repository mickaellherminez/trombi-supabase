<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="text-black">
        <q-toolbar-title>
          <q-btn :to="{ name: 'register' }" outline  color="info">
            <img alt="One Resources logo"
              src="~assets/One-resources-logo.png" style="width: 200px;">
          </q-btn>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginLayout',

  setup() {
    return {
    }
  }
})
</script>
