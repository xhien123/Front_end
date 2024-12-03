<template>
  <div class="item">
    <router-link :to="`/product/${id}`">
      <img 
        :src="`${backendUrl}${image}`" 
        alt="Product" 
        @click="scrollToTop" 
      />
    </router-link>
    <p>{{ name }}</p>
    <div class="item-prices">
      <div class="item-price-new">{{ currency }}{{ newPrice }}</div>
      <div class="item-price-old">{{ currency }}{{ oldPrice }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    newPrice: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: false,
    },
    backendUrl: {
      type: String,
      default: "", // Pass in the backend URL as a prop
    },
    currency: {
      type: String,
      default: "$", // Default currency symbol
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.item {
  width: 21%;
}

.item img {
  width: 100%;
}

.item p {
  margin: 6px 0px;
}

.item-prices {
  display: flex;
  gap: 15px;
}

.item-price-new {
  color: #374151;
  font-size: 18px;
  font-weight: 600;
}

.item-price-old {
  color: #8c8c8c;
  font-size: 18px;
  font-weight: 500;
  text-decoration: line-through;
}

.item:hover {
  transform: scale(1.05);
  transition: 0.6s;
}

@media (max-width: 800px) {
  .item {
    width: 35%;
  }
  .item-price-old {
    font-size: 12px;
  }
}

@media (max-width: 500px) {
  .item p {
    font-size: 14px;
  }
  .item-price-new {
    font-size: 14px;
  }
}
</style>
