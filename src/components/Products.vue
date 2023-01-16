<template>
  <div class="tages-products">
    <div
      v-for="product in products"
      :key="product.id"
      class="tages-products__item"
    >
      <img
        :src="imageSrc(product)"
        :alt="product.name"
        class="tages-products__image"
      >

      <div
        v-if="product.price.old_price"
        class="tages-products__label"
      >
        Скидка
      </div>

      <div
        v-if="product.code"
        class="tages-products__code"
      >
        {{ product.code }}
      </div>

      <div
        v-if="product.name"
        class="tages-products__name"
      >
        {{ product.name }}
      </div>

      <div class="tages-products__bottom">
        <div
          v-if="product.price.old_price || product.price.current_price"
          class="tages-products__prices"
        >
          <div
            v-if="product.price.old_price"
            class="tages-products__prices-old"
          >
            {{ Math.ceil(product.price.old_price) }} {{ productsStore.currency }}
          </div>
          <div
            v-if="product.price.current_price"
            class="tages-products__prices-current"
          >
            {{ Math.ceil(product.price.current_price) }} {{ productsStore.currency }}
          </div>
        </div>
        <div class="tages-products__actions">
          <button
            v-if="isAdded(product)"
            class="tages-products__button tages-products__button--added"
            @click="removeFromCart(product)"
          />
          <button
            v-if="!isAdded(product)"
            class="tages-products__button tages-products__button--add"
            @click="addToCart(product)"
          />
          <button
            v-if="isFavorite(product)"
            class="tages-products__button tages-products__button--favorited"
            @click="removeFromFavorites(product)"
          />
          <button
            v-if="!isFavorite(product)"
            class="tages-products__button tages-products__button--favorite"
            @click="addToFavorites(product)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {mapStores} from 'pinia'
import {useProductsStore} from '@/stores/productsStore';

export default defineComponent({
  name: 'TagesProducts',

  props: {
    products: {
      type: Object,
      default: () => ({}),
    }
  },

  computed: {
    ...mapStores(useProductsStore)
  },

  methods: {  
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

    imageSrc(product) {
      if (product.image.url) {
        return `./${product.image.url}`;
      }
      
      return 'https://via.placeholder.com/150'
    },

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
    }
  }
})
</script>

<style lang="scss" scoped>
  .tages-products {
    display: flex;
    flex-wrap: wrap;
    margin-right: -48px;

    &__item {
      flex: 0 0 calc(25% - 48px);
      margin: 0 48px 40px 0;
      border: 1px solid #EEEEEE;
      position: relative;
      padding: 9px 12px 4px;
      display: flex;
      flex-direction: column;
    }

    &__image {
      max-width: 100%;
      display: block;
      margin: 0 auto auto;
      padding-bottom: 23px;
    }

    &__label {
      position: absolute;
      top: 8px;
      left: 0;
      background: #eb5757;
      color: #fff;
      font-size: 14px;
      padding: 3px 16px;
      font-weight: 500;
    }

    &__code {
      font: 10px / 14px 'SF UI Text', sans-serif;
      margin-bottom: 6px;
      color: #888888;
    }

    &__name {
      font: 500 16px / 1.4 'SF UI Text', sans-serif
    }

    &__bottom {
      display: flex;
      align-items: center;
    }

    &__prices {
      display: flex;
      font: 16px / 1.4 'SF UI Text', sans-serif;
      margin-right: auto;

      &-old {
        margin-right: 9px;
        color: #888888;
        text-decoration: line-through;
      }
    }

    &__actions {
      display: flex;
    }

    &__button {
      width: 36px;
      height: 36px;
      padding: 0;
      border: none;
      background: none;
      cursor: pointer;

      &--add {
        background: url(../assets/images/icons/cart.svg);
      }

      &--added {
        background: url(../assets/images/icons/check-green.svg);
      }

      &--favorite {
        background: url(../assets/images/icons/favorite.svg);
      }

      &--favorited {
        background: url(../assets/images/icons/favorited.svg);
        background-size: 100%;
      }
    }
  }
</style>