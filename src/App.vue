<template>
  <div class="tages-app">
    <router-view />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {mapStores} from 'pinia'
import {useProductsStore} from '@/stores/productsStore';

export default defineComponent({
  name: 'TagesApp',

  computed: {
    ...mapStores(useProductsStore),
  },

  mounted() {
    this.productsStore.getCartFromStorage();
    this.productsStore.getFavoritesFromStorage();
  }
})
</script>

<style lang="scss">
.tages-app {
  background: #fff;
  padding: 40px;
  max-width: 1488px;
  margin: auto;
  color: #000000;
  font: 16px / 1.3 'SF Pro Display', sans-serif;
}
</style>