<template>
  <div class="tages-products">
    <div
      v-for="product in products"
      :key="product.id"
      class="tages-products__item"
    >
      <router-link :to="{name: 'product', params: {id: product.id}}">
        <img
          :src="imageSrc(product)"
          :alt="product.name"
          class="tages-products__image"
        >
      </router-link>

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

      <router-link
        v-if="product.name"
        :to="{name: 'product', params: {id: product.id}}"
        class="tages-products__name"
      >
        {{ product.name }}
      </router-link>

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

        <product-actions :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import ProductActionsMixin from '@/mixins/ProductActionsMixin';
import ProductActions from '@/components/ProductActions.vue'

export default defineComponent({
  name: 'TagesProducts',

  components: {
    ProductActions,
  },

  mixins: [
    ProductActionsMixin,
  ],

  props: {
    products: {
      type: Object,
      default: () => ({}),
    }
  },

  methods: { 

    imageSrc(product) {
      if (product.image.url) {
        return `./${product.image.url}`;
      }
      
      return 'https://via.placeholder.com/150'
    }
  }
})
</script>

<style lang="scss" scoped>
  .tages-products {
    display: flex;
    flex-wrap: wrap;
    margin-right: -48px;

    @media all and (max-width: 1024px) {
      margin-right: -30px;
    }

    @media all and (max-width: 768px) {
      margin-right: -20px;
    }

    &__item {
      flex: 0 0 calc(25% - 48px);
      max-width: calc(25% - 48px);
      margin: 0 48px 40px 0;
      border: 1px solid #EEEEEE;
      position: relative;
      padding: 9px 12px 4px;
      display: flex;
      flex-direction: column;

      @media all and (max-width: 1024px) {
        flex-basis: calc(33.333% - 30px);
        max-width: calc(33.333% - 30px);
        margin: 0 30px 30px 0;
      }

      @media all and (max-width: 768px) {
        flex-basis: calc(50% - 20px);
        max-width: calc(50% - 20px);
        margin: 0 20px 20px 0;
      }

      @media all and (max-width: 400px) {
        flex-basis: calc(100% - 20px);
        max-width: calc(100% - 20px);
        margin: 0 20px 20px 0;
      }
    }

    &__image {
      max-width: 100%;
      display: block;
      margin: 0 auto;
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
      margin-top: auto;
      font: 500 16px / 1.4 'SF UI Text', sans-serif;
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: underline;
      }
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