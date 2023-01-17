<template>
  <div>
    <tages-breadcrumbs :links="breadcrumbs" />
    
    <h1>Корзина</h1>

    <div v-if="!productsStore.cartItems.length">
      Корзина пуста
    </div>
    <div
      v-for="(product, index) in productsStore.cartItems"
      :key="product.id"
    >
      {{ index + 1 }})
      <router-link :to="{name: 'product', params: {id: product.id}}">
        {{ product.name }}
      </router-link>
      {{ product.price.current_price }}{{ productsStore.currency }}
    </div>

    <h2>Итого: {{ productsStore.cartSum }}{{ productsStore.currency }} </h2>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import TagesBreadcrumbs from '@/components/Breadcrumbs.vue';
import {mapStores} from 'pinia'
import {useProductsStore} from '@/stores/productsStore';

export default defineComponent({
	name: 'TagesCart',

  components: {
    TagesBreadcrumbs
  },

  computed: {
    breadcrumbs() {
      return [
        {
          name: 'Главная',
          href: '/'
        },
        {
          name: 'Корзина',
          href: '/'
        }
      ]
    },

    ...mapStores(useProductsStore),
  }
})
</script>