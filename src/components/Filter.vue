<template>
  <div class="tages-filter">
    <div class="tages-filter__layout">
      <div class="tages-filter__item">
        <div class="tages-filter__item-title">
          {{ sort.name }}
        </div>
        <div
          v-click-away="onSortClickAway"
          class="tages-filter__item-select"
          :class="{'select-opened': sortDropdownShow}"
          @click="onSortSelectClick"
        >
          <div class="tages-filter__item-select-text">
            {{ sortSelectedText }}
          </div>

          <div class="tages-filter__item-select-dropdown">
            <div
              v-for="sortItem in sort.options"
              :key="sortItem.value"
              class="tages-filter__item-select-item"
              :class="{checked: sortItem.value === sortSelected}"
              @click.stop="sortCheckItem(sortItem)"
            >
              {{ sortItem.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="tages-filter__item">
        <div class="tages-filter__item-title">
          {{ filter.name }}
        </div>
        <div
          v-click-away="onFilterClickAway"
          class="tages-filter__item-select"
          :class="{'select-opened': filterDropdownShow}"
          @click="onFilterSelectClick"
        >
          <div class="tages-filter__item-select-text">
            {{ filterSelectedText }}
          </div>

          <div class="tages-filter__item-select-dropdown">
            <div
              v-for="filterItem in filter.options"
              :key="filterItem.value"
              class="tages-filter__item-select-item"
              :class="{checked: filterItem.value === filterSelected}"
              @click.stop="filterCheckItem(filterItem)"
            >
              {{ filterItem.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'TagesFilter',

  props: {
    sort: {
      type: Object,
      default: () => ({}),
    },
    
    sortSelected: {
      type: String,
      default: '',
    },

    filter: {
      type: Object,
      default: () => ({}),
    },
    
    filterSelected: {
      type: String,
      default: '',
    },
  },

  emits: [
    'sortChange',
    'filterChange',
  ],

  data() {
    return {
      sortDropdownShow: false,
      filterDropdownShow: false,
    }
  },

  computed: {
    sortSelectedText() {
      return this.sort.options.find((item) => item.value === this.sortSelected).name;
    },
    filterSelectedText() {
      return this.filter.options.find((item) => item.value === this.filterSelected).name;
    }
  },

  methods: {
    sortCheckItem(sortSelected) {
      this.sortDropdownShow = false;
      this.$emit('sortChange', sortSelected.value);
    },
    onSortSelectClick() {
      this.sortDropdownShow = true;
    },
    onSortClickAway() {
      this.sortDropdownShow = false;
    },
    filterCheckItem(filterSelected) {
      this.filterDropdownShow = false;
      this.$emit('filterChange', filterSelected.value);
    },
    onFilterSelectClick() {
      this.filterDropdownShow = true;
    },
    onFilterClickAway() {
      this.filterDropdownShow = false;
    }
  }
})
</script>

<style lang="scss" scoped>
.tages-filter {
  margin-bottom: 40px;

  &__layout {
    display: flex;
    flex-wrap: wrap;
    margin-right: 24px;
  }

  &__item {
    margin-right: 24px;
    width: 288px;

    &-title {
      font-size: 12px;
      line-height: 18px;
      color: #4F4F4F;
      margin: 0 0 6px 16px; 
    }

    &-select {
      position: relative;
      background: #f2f2f2;
      padding: 10px 40px 10px 16px;
      font-size: 14px;
      line-height: 21px;
      cursor: pointer;

      &:before {
        position: absolute;
        right: 16px;
        top: calc(50% - 12px);
        width: 24px;
        height: 24px;
        content: '';
        background: url(../assets/images/icons/arrow-down.svg) 0 0 no-repeat;
        transition: 0.3s;

        .select-opened & {
          transform: rotate(180deg);
        }
      }

      &-text {
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &-dropdown {
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + 10px);
        background: #f2f2f2;
        opacity: 0;
        visibility: hidden;
        padding: 8px 0;
        z-index: 1;

        .select-opened & {
          opacity: 1;
          visibility: visible;
        }
      }

      &-item {
        cursor: pointer;
        padding: 8px 16px;

        &.checked {
          font-weight: bold;
        }
      }
    }
  }
}
</style>