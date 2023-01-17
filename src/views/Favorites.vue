<template>
  <div>
    <tages-breadcrumbs :links="breadcrumbs" />
    
    <h1>Избранное</h1>

    <div v-if="!productsStore.favorites.length">
      Избранных товаров нет
    </div>
    <div
      v-for="(product, index) in productsStore.favorites"
      :key="product.id"
    >
      {{ index + 1 }})
      <router-link :to="{name: 'product', params: {id: product.id}}">
        {{ product.name }}
      </router-link>
      {{ product.price.current_price }}{{ productsStore.currency }}
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import TagesBreadcrumbs from '@/components/Breadcrumbs.vue';
import {mapStores} from 'pinia'
import {useProductsStore} from '@/stores/productsStore';

export default defineComponent({
	name: 'TagesFavorites',

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
          name: 'Избранное',
          href: '/'
        }
      ]
    },

    ...mapStores(useProductsStore),
  }
})
</script>