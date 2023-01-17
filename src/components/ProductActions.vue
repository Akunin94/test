<template>
  <div class="tages-actions">
    <button
      v-if="isAdded(product)"
      class="tages-actions__button tages-actions__button--added"
      @click="removeFromCart(product)"
    />
    <button
      v-if="!isAdded(product)"
      class="tages-actions__button tages-actions__button--add"
      @click="addToCart(product)"
    />
    <button
      v-if="isFavorite(product)"
      class="tages-actions__button tages-actions__button--favorited"
      @click="removeFromFavorites(product)"
    />
    <button
      v-if="!isFavorite(product)"
      class="tages-actions__button tages-actions__button--favorite"
      @click="addToFavorites(product)"
    />
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import ProductActionsMixin from '@/mixins/ProductActionsMixin';

export default defineComponent({
  name: 'TagesProductActions',

  mixins: [
    ProductActionsMixin,
  ],

  props: {
    product: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
  .tages-actions {
    display: flex;

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