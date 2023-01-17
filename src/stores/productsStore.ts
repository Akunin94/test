import {defineStore} from "pinia";
import {getItem, setItem} from '@/helpers/persistanceStorage';

const products = require('../assets/items.json');
const materials = require('../assets/materials.json');

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      cartItems: [] as any,
      favorites: [] as any,
      addedProducts: [],
      allProducts: [] as [],
      currency: '₽',
      materials
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
      this.updateStorageCartItems(this.cartItems);
    },

    removeFromCart(product: any) {
      this.cartItems = this.cartItems.filter((item: any) => item.id !== product.id);
      this.updateStorageCartItems(this.cartItems);
    },

    addToFavorites(product: any) {
      this.favorites.push(product);
      this.updateStorageFavorites(this.favorites);
    },

    removeFromFavorites(product: any) {
      this.favorites = this.favorites.filter((item: any) => item.id !== product.id);
      this.updateStorageFavorites(this.favorites);
    },

    getCartFromStorage() {
      this.cartItems = getItem('cartItems');
    },

    getFavoritesFromStorage() {
      this.favorites = getItem('favorites');
    },
    
    updateStorageCartItems(cartItems: any) {
      setItem('cartItems', cartItems);
    },
    
    updateStorageFavorites(favorites: any) {
      setItem('favorites', favorites);
    },
  }
})