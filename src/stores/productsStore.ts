import {defineStore} from "pinia";
import {getItem, setItem} from '@/helpers/persistanceStorage';
import { IProduct } from "@/types/entity/product";

const products = require('../assets/items.json');
const materials = require('../assets/materials.json');

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      cartItems: [] as IProduct[],
      favorites: [] as IProduct[],
      addedProducts: [] as IProduct[],
      allProducts: [] as IProduct[],
      currency: '₽',
      materials
    }
  },
  getters: {
    cartSum: (state) => {
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

    addToCart(product: IProduct) {
      this.cartItems.push(product);
      this.updateStorageCartItems(this.cartItems);
    },

    removeFromCart(product: IProduct) {
      this.cartItems = this.cartItems.filter((item: IProduct) => item.id !== product.id);
      this.updateStorageCartItems(this.cartItems);
    },

    addToFavorites(product: IProduct) {
      this.favorites.push(product);
      this.updateStorageFavorites(this.favorites);
    },

    removeFromFavorites(product: IProduct) {
      this.favorites = this.favorites.filter((item: IProduct) => item.id !== product.id);
      this.updateStorageFavorites(this.favorites);
    },

    getCartFromStorage() {
      this.cartItems = getItem('cartItems') || [];
    },

    getFavoritesFromStorage() {
      this.favorites = getItem('favorites') || [];
    },
    
    updateStorageCartItems(cartItems: IProduct[]) {
      setItem('cartItems', cartItems);
    },
    
    updateStorageFavorites(favorites: IProduct[]) {
      setItem('favorites', favorites);
    },
  }
})