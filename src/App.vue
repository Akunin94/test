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

    <router-view v-slot="{Component}">
      <transition
        name="slide"
        mode="out-in"
      >
        <component
          :is="Component" 
          :key="$route.path"
        />
      </transition>
    </router-view>
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

  @media all and (max-width: 1024px) {
    padding: 35px;
  }

  @media all and (max-width: 480px) {
    padding: 30px;
  }

  &-fixed-buttons {
    position: fixed;
    right: 0;
    top: 100px;
    width: 50px;
    height: 50px;
    font-size: 0;
    border: 1px solid #000;
    z-index: 999;

    @media all and (max-width: 1024px) {
      width: 40px;
      height: 40px;
    }

    @media all and (max-width: 480px) {
      width: 32px;
      height: 32px;
    }

    &--cart {
      background: #fff url(./assets/images/icons/cart.svg) 50% no-repeat;
    }

    &--favorites {
      background: #fff url(./assets/images/icons/favorite.svg) 50% no-repeat;
      margin-top: 60px;

      @media all and (max-width: 1024px) {
        margin-top: 50px;
      }

      @media all and (max-width: 480px) {
        margin-top: 40px;
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>