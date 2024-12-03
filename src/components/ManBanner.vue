<template>
    <div class="container">
      <!-- Banner -->
      <div class="banner">
        <img src="@/assets/Picture/banner_mens.png" alt="Men Banner" />
      </div>
  
      <!-- Product Images Section -->
      <div class="products-section">
        <h2>Our Products</h2>
        <div class="products-grid">
          <!-- Manually add 10 products with the correct image paths -->
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_13.png" 
              alt="Product 13" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_14.png" 
              alt="Product 14" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_15.png" 
              alt="Product 15" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_16.png" 
              alt="Product 16" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_17.png" 
              alt="Product 17" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_18.png" 
              alt="Product 18" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_19.png" 
              alt="Product 19" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_20.png" 
              alt="Product 20" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_21.png" 
              alt="Product 21" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_22.png" 
              alt="Product 22" 
              class="product-image"
            />
          </div>
  
          <!-- Additional products can be added here with the same pattern -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MenBanner",
  };
  </script>
  
  <style scoped>
  .container {
    width: 100%;
    margin: 0 auto;
  }
  
  .banner img {
    width: 100%;
    height: auto;
  }
  
  .products-section {
    padding: 20px;
    text-align: center;
  }
  
  .products-section h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }
  
  .products-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 products per row */
    gap: 15px;
    padding: 10px;
    overflow-y: auto;
    height: 600px; /* Fixed height for scrollable area */
  }
  
  .product-item {
    background-color: #f8f8f8;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .product-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
  
  .product-image {
    width: 100%;
    height: 200px; /* Adjust height to make the images a bit smaller */
    object-fit: contain; /* Ensures the entire image is visible, scaled to fit */
    border-radius: 5px;
  }
  </style>
  