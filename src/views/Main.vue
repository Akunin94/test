<template>
  <tages-breadcrumbs :links="breadcrumbs" />
  
  <h1>{{ pageName }}</h1>

  <tages-filter
    :sort="sort"
    :sort-selected="sortSelected"
    :filter="filter"
    :filter-selected="filterSelected"
    @sort-change="onSortChange"
    @filter-change="onFilterChange"
  />

  <tages-products :products="products" />
</template>

<script>
import {defineComponent} from 'vue'
import TagesBreadcrumbs from '@/components/Breadcrumbs.vue';
import TagesFilter from '@/components/Filter.vue';
import TagesProducts from '@/components/Products.vue';
import {mapStores} from 'pinia'
import {useProductsStore} from '@/stores/productsStore';
import _ from 'lodash';

export default defineComponent({
	name: 'TestMain',

  components: {
    TagesBreadcrumbs,
    TagesFilter,
    TagesProducts,
  },

  data() {
    return {
      sortSelected: 'asc',
      filterSelected: '',
    }
  },

	computed: {
    products() {
      let products = this.productsStore.allProducts;

      if (this.sortSelected === 'asc') {
        products = _.orderBy(products, ['price.current_price'], ['asc', 'desc'])
      } else if (this.sortSelected === 'desc') {
        products = _.orderBy(products, ['price.current_price'], ['desc', 'asc'])
      }

      if (this.filterSelected) {
        products = products.filter(item => {
          return item.material == this.filterSelected;
        })
      }

      return products;
    },

		pageName() {
			return 'Комплекты стеллажных систем'
		},

    breadcrumbs() {
      return [
        {
          name: 'Главная',
          href: '/'
        },
        {
          name: 'Системы хранения',
          href: '/'
        },
        {
          name: 'Комплекты стеллажных систем',
          href: '/'
        }
      ]
    },

    sort() {
      return {
        name: 'Сортировать по:',
        options: [
          {
            name: 'Цена по возрастанию',
            value: 'asc'
          },
          {
            name: 'Цена по убыванию',
            value: 'desc'
          }
        ]
      }
    },

    filter() {
      return {
        name: 'Материал',
        options: [
          {
            name: 'Любой',
            value: ''
          },
          {
            name: 'Дерево',
            value: '1'
          },
          {
            name: 'Металл',
            value: '2'
          }
        ]
      }
    },

    ...mapStores(useProductsStore),
	},

  mounted() {
    this.productsStore.getAllProducts()
  },

  methods: {
    onSortChange(value) {
      this.sortSelected = value;
    },
    onFilterChange(value) {
      this.filterSelected = value;
    }
  }
})
</script>

<style lang="scss" scoped>

</style>