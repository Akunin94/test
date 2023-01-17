import {mapStores} from 'pinia'
import {useProductsStore} from '@/stores/productsStore';

export default {
  computed: {
    ...mapStores(useProductsStore)
  },

  methods: {
    addToCart(product) {
      this.productsStore.addToCart(product);
    },

    removeFromCart(product) {
      this.productsStore.removeFromCart(product);
    },

    addToFavorites(product) {
      this.productsStore.addToFavorites(product);
    },

    removeFromFavorites(product) {
      this.productsStore.removeFromFavorites(product);
    },

    isAdded(product) {
      for (const prod of this.productsStore.cartItems) {
        if (prod.id === product.id) {
          return true;
        }
      }

      return false;
    },

    isFavorite(product) {
      for (const prod of this.productsStore.favorites) {
        if (prod.id === product.id) {
          return true;
        }
      }

      return false;
    },
  }
}