<template>
    <div class="container">
      <!-- Banner -->
      <div class="banner">
        <img src="@/assets/Picture/banner_women.png" alt="Women Banner" />
      </div>
  
      <!-- Product Images Section -->
      <div class="products-section">
        <h2>Our Products</h2>
        <div class="products-grid">
          <!-- Manually add 13 products with the correct image paths -->
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_1.png" 
              alt="Product 1" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_2.png" 
              alt="Product 2" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_3.png" 
              alt="Product 3" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_4.png" 
              alt="Product 4" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_5.png" 
              alt="Product 5" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_6.png" 
              alt="Product 6" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_7.png" 
              alt="Product 7" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_8.png" 
              alt="Product 8" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_9.png" 
              alt="Product 9" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_10.png" 
              alt="Product 10" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_11.png" 
              alt="Product 11" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_12.png" 
              alt="Product 12" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_13.png" 
              alt="Product 13" 
              class="product-image"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "WomenBanner",
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
  