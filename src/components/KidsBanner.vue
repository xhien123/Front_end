<template>
    <div class="container">
      <!-- Banner -->
      <div class="banner">
        <img src="@/assets/Picture/banner_kids.png" alt="Kids Banner" />
      </div>
  
      <!-- Product Images Section -->
      <div class="products-section">
        <h2>Our Products</h2>
        <div class="products-grid">
          <!-- Manually add 12 products with the correct image paths -->
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_25.png" 
              alt="Product 25" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_26.png" 
              alt="Product 26" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_27.png" 
              alt="Product 27" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_28.png" 
              alt="Product 28" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_29.png" 
              alt="Product 29" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_30.png" 
              alt="Product 30" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_31.png" 
              alt="Product 31" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_32.png" 
              alt="Product 32" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_33.png" 
              alt="Product 33" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_34.png" 
              alt="Product 34" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_35.png" 
              alt="Product 35" 
              class="product-image"
            />
          </div>
  
          <div class="product-item">
            <img 
              src="@/assets/Picture/product_36.png" 
              alt="Product 36" 
              class="product-image"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "KidsBanner",
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
  