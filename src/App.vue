<template>
  <div class="tages-app">
    <router-link
      class="tages-app-fixed-buttons tages-app-fixed-buttons--cart"
      :to="{name: 'cart'}"
    />
    <router-link
      class="tages-app-fixed-buttons tages-app-fixed-buttons--favorites"
      :to="{name: 'favorites'}"
    />

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

  &-fixed-buttons {
    position: fixed;
    right: 0;
    top: 100px;
    width: 50px;
    height: 50px;
    font-size: 0;
    border: 1px solid #000;

    &--cart {
      background: url(./assets/images/icons/cart.svg) 50% no-repeat;
    }

    &--favorites {
      background: url(./assets/images/icons/favorite.svg) 50% no-repeat;
      margin-top: 60px;
    }
  }
}
</style>