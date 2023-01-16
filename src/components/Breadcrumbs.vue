<template>
  <div class="tages-breadcrumbs">
    <div
      v-for="({name, href}, index) in links"
      :key="name"
      class="tages-breadcrumbs__item"
    >
      <span
        v-if="index === links.length-1"
        class="tages-breadcrumbs__text"
      >
        {{ name }}
      </span>

      <a
        v-else
        class="tages-breadcrumbs__link"
        :href="href"
      >
        {{ name }}
      </a>

      <span
        v-if="index !== links.length-1"
        class="tages-breadcrumbs__divider"
      >
        /
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'TagesBreadcrumbs',

  props: {
    links: {
      type: Object,
      required: true,
    }
  },
})
</script>

<style lang="scss" scoped>
  .tages-breadcrumbs {
    display: flex;
    margin-bottom: 26px;
    white-space: nowrap;
    overflow: auto;
    padding-bottom: 6px; // for scroll bar

    &__item {
      color: #727783;
      line-height: 1;
      font-family: 'SF UI Text', sans-serif;
    }

    &__link {
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    &__text {
      color: #000;
    }

    &__divider {
      margin: 0 13px 0 8px;
    }
  }
</style>