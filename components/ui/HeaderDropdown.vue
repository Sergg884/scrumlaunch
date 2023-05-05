<template>
  <div :class="[dropdownVisible ? 'header-dropdown' : 'header-dropdown--hiden']"  @mouseenter="showDropdown" @mouseleave="hideDropdown">
    <nuxt-link :to="to" class="header-dropdown-toggle" :class="{'white': isWhite}">
      {{ title }}
    </nuxt-link>
    <transition name="dropdown">
      <div v-if="dropdownVisible" :class="wide ? 'header-dropdown-menu--wide' : 'header-dropdown-menu'" no-gutters>
        <div
          v-for="item in menuItems"
          :key="item.title"
          class="header-dropdown-item"
          @click="selectItem(item.path)"
        >
          {{ item.title }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    menuItems: {
      type: Array,
      required: true
    },
    wide: {
      type: Boolean,
      default: false
    },
    isWhite: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dropdownVisible: false,
    };
  },
  methods: {
    showDropdown() {
      this.dropdownVisible = true;
    },
    hideDropdown() {
      this.dropdownVisible = false;
    },
    selectItem(item) {

      this.dropdownVisible = false;
      this.$router.push(item);
      // Do something with the selected item
    },
  },
};
</script>

<style scoped lang="scss">
.header-dropdown {
  position: relative;
  display: inline-block;
  
  &:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: -40px;
    width: 100%;
    height: 50px;
  }
  &--hiden {
    @extend .header-dropdown;
    &:before {
      display: none;
    }
  }
}

.header-dropdown-toggle {
  font-size: 18px;
  line-height: 150%;
  font-weight: 700;
  text-decoration: none;
  color: #1e1f21;
  cursor: pointer;
  &.white {
    color: #fff;
  }
  &:hover {
    color: $main-green;
  }
}

.header-dropdown-menu {
  right: -100px;
  position: absolute;
  top: calc(100% + 20px);
  background-color: white;
  min-width: 480px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 40px 40px 24px 40px;
  border: 1px solid black;
  z-index: 1;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(50px, auto);
  gap: 20px;

  &--wide {
    @extend .header-dropdown-menu;
    grid-template-columns: repeat(1, 1fr);
  }
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  visibility: hidden;
}

.header-dropdown-item {
  text-align: left;
  cursor: pointer;
  white-space: nowrap;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  font-size: 18px;
  display: inline-flex;

  &:hover {
    color: $main-green;
  } 
}
</style>