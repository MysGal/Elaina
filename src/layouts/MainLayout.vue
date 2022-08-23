<template>
  <q-layout view="lHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="fa-solid fa-bars" @click="toggleDrawer"/>

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          MysGal
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawer" side="left" bordered>
      <div class="absolute-top" style="height: 20%">
        <q-input v-model="text" label="键入以搜索" counter style="margin: 3%">
          <template v-slot:append>
            <q-icon name="fa-solid fa-magnifying-glass" />
          </template>
        </q-input>
      </div>
      <q-scroll-area style="height: 80%; margin-top: 20%; border-right: 1px solid #ddd">
        <q-list padding>
          <div v-for="route in routesMeta" :key="route.path">
            <q-item clickable :to='route.path' v-ripple v-if="route.visible">
              <q-item-section avatar>
                <q-icon :name='route.icon'/>
              </q-item-section>
              <q-item-section>
                {{ route.name }}
              </q-item-section>
            </q-item>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
import {defineComponent, ref} from 'vue'
import {routesMeta} from '../router/routes.ts';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const drawer = ref(false)

    return {
      drawer,
      routesMeta,
      toggleDrawer() {
        drawer.value = !drawer.value
      }
    }
  }
})
</script>
