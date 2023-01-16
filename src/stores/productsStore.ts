import {defineStore} from "pinia";

const products = require('../assets/items.json');

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      cartItems: [] as any,
      favorites: [] as any,
      addedProducts: [],
      allProducts: [] as [],
      currency: '₽'
    }
  },
  getters: {
    cartSum: (state: any) => {
      if (state.cartItems.length) {
        let sum = 0;

        for (const product of state.cartItems) {
          sum += product.price.current_price          
        }

        return Math.ceil(sum);
      }

      return 0;
    }
  },
  actions: {
    getAllProducts() {
      this.allProducts = products;
    },
    addToCart(product: any) {
      this.cartItems.push(product);
    },
    removeFromCart(product: any) {
      this.cartItems = this.cartItems.filter((item: any) => item.id !== product.id);
    },
    addToFavorites(product: any) {
      this.favorites.push(product);
    },
    removeFromFavorites(product: any) {
      this.favorites = this.favorites.filter((item: any) => item.id !== product.id);
    }
  }
})