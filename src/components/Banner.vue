<template>
  <div class="banner">
    <div class="container">
      <h1>Akunin</h1>
      <p>A place to share knowledge</p>
      <strong>{{ settingsStore.title }}</strong>
      <strong>{{ settingsStore.id }}</strong>
      <strong>{{ addToFavoritesStore.title }}</strong>
      <strong>{{ addToFavoritesStore.id }}</strong>
      <strong>{{ addToFavoritesStore.double }}</strong>
      <button @click="addToFavoritesStore.incrementId()">
        Up
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {mapStores} from 'pinia'
import {useProductsStore} from '@/stores/productsStore';

export default defineComponent({
  name: 'TestBanner',
  computed: {
    ...mapStores(useProductsStore)
  },
})
</script>