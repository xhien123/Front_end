<template>
    <div class="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div class="collections">
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
  import Item from "@/components/Item.vue"; // Adjust the path to match your project structure.
  
  export default {
    name: "NewCollections",
    components: {
      Item,
    },
    props: {
      data: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .new-collections {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-bottom: 100px;
  }
  .new-collections h1 {
    color: #171717;
    font-size: 40px;
    font-weight: 600;
  }
  .new-collections hr {
    width: 150px;
    height: 4px;
    border-radius: 10px;
    background: #252525;
  }
  .collections {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 60px auto;
    gap: 30px;
    max-width: 1280px;
  }
  </style>
  