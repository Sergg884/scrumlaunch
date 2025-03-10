<template>
  <div class="share-button">
    <button class="share-icon" @click="toggleShareMenu">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
      </svg>
    </button>
    <div v-if="showShareMenu" class="share-menu">
      <a 
        v-for="network in networks" 
        :key="network.network" 
        :href="getShareLink(network.network)" 
        target="_blank" 
        class="share-network-btn"
      >
        <img :src="network.icon" :alt="network.network" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShareButton',
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showShareMenu: false,
      networks: [
        { 
          network: 'facebook', 
          icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/facebook.svg' 
        },
        { 
          network: 'twitter', 
          icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/twitter.svg' 
        },
        { 
          network: 'linkedin', 
          icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg' 
        }
      ]
    }
  },
  methods: {
    toggleShareMenu() {
      this.showShareMenu = !this.showShareMenu
    },
    getShareLink(network) {
      const encodedUrl = encodeURIComponent(this.url);
      const encodedTitle = encodeURIComponent(this.title);
      const encodedDesc = encodeURIComponent(this.description);
      
      switch(network) {
        case 'facebook':
          return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedDesc}`;
        case 'twitter':
          return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=yourTwitterHandle`;
        case 'linkedin':
          return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&summary=${encodedDesc}&title=${encodedTitle}`;
        default:
          return '#';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.share-button {
  position: relative;
  
  .share-icon {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    color: $main-black;
    border: 1px solid $main-black;
    
    &:hover {
      background-color: $main-green;
    }
  }
  
  .share-menu {
    position: absolute;
    bottom: 100%;
    right: 0;
    background: white;
    border: 1px solid $main-black;
    border-radius: 4px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 10;
    margin-bottom: 8px;
    
    &:before {
      content: '';
      position: absolute;
      bottom: -6px;
      right: 10px;
      width: 10px;
      height: 10px;
      background: white;
      transform: rotate(45deg);
      border-right: 1px solid $main-black;
      border-bottom: 1px solid $main-black;
    }
    
    .share-network-btn {
      display: flex;
      align-items: center;
      padding: 8px;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.3s;
      
      img {
        width: 20px;
        height: 20px;
        margin-right: 0;
        border-radius: 0;
      }
      
      &:hover {
        background-color: $main-green;
      }
    }
  }
}
</style> 