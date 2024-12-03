<template>
    <div class="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div class="popular-item">
        <Item
          v-for="(item, index) in data"
          :key="index"
          :id="item.id"
          :name="item.name"
          :image="item.image"
          :newPrice="item.new_price"
          :oldPrice="item.old_price"
        />
      </div>
    </div>
  </template>
  
  <script>
  import Item from "@/components/Item.vue";
  
  export default {
    name: "Popular",
    components: { Item },
    props: {
      data: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .popular {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 1280px;
    margin: auto;
  }
  .popular h1 {
    color: #171717;
    font-size: 40px;
    font-weight: 600;
  }
  .popular hr {
    width: 150px;
    height: 4px;
    border-radius: 10px;
    background: #252525;
  }
  .popular-item {
    margin-top: 40px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;
  }
  
  /* ---------- media query------------ */
  @media (max-width: 800px) {
    .popular h1 {
      font-size: 30px;
    }
    .popular hr {
      width: 80px;
      height: 4px;
    }
  }
  </style>
  