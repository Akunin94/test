<template>
  <div>
    <tages-breadcrumbs
      v-if="product"
      :links="breadcrumbs"
    />
    
    <div v-if="product">
      <h1>{{ product.name }} ({{ product.code }})</h1>
      Цена: 
      - <s v-if="product.price.old_price">{{ product.price.old_price }}{{ productsStore.currency }}</s>
      {{ product.price.current_price }}{{ productsStore.currency }}
      <img
        v-if="product.image.url"
        :src="`./${product.image.url}`"
        :alt="product.name"
      >
      <div>
        Материал - {{ material }}
      </div>

      <product-actions :product="product" />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import TagesBreadcrumbs from '@/components/Breadcrumbs.vue';
import ProductActionsMixin from '@/mixins/ProductActionsMixin';
import ProductActions from '@/components/ProductActions.vue'
import { IProduct } from '@/types/entity/product';

export default defineComponent({
	name: 'TagesCart',

  components: {
    TagesBreadcrumbs,
    ProductActions,
  },

  mixins: [
    ProductActionsMixin,
  ],

  computed: {
    product(): IProduct | undefined {
      return this.productsStore.allProducts.find(item => {
        return item.id === this.$route.params.id
      })
    },

    breadcrumbs() {
      return [
        {
          name: 'Главная',
          href: '/'
        },
        {
          name: this.product!.name
        }
      ]
    },

    material(): string {
      return this.productsStore.materials
        .find((item: IProduct) => item.id == this.product!.material).name
    },
  },

  mounted() {
    this.productsStore.getAllProducts()
  },
})
</script>