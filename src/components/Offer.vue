<template>
    <div class="offers">
      <div class="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>
      </div>
      <div class="offers-right">
        <img :src="exclusiveImage" alt="Exclusive Offers" />
      </div>
    </div>
  </template>
  
  <script>
  import exclusiveImage from "@/assets/Picture/exclusive_image.png";

  export default {
    name: "Offers",
    data() {
      return {
        exclusiveImage,
      };
    },
  };
  </script>
  
  <style scoped>
  .offers {
    margin: 100px auto;
    width: 65%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0px 8%;
    margin-bottom: 150px;
    background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%);
  }
  
  .offers-left h1 {
    color: #171717;
    font-size: 60px;
    font-weight: 600;
  }
  .offers-left p {
    color: #171717;
    font-size: 16px;
    font-weight: 600;
  }
  .offers-left button {
    width: 200px;
    height: 50px;
    border-radius: 35px;
    background: #ff4141;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 500;
    margin-top: 30px;
    cursor: pointer;
  }
  .offers-right img {
    width: 320px;
    padding-top: 20px;
  }
  
  /* ----- media query----- */
  
  @media (max-width: 1280px) {
    .offers-right img {
      width: 300px;
    }
    .offers-left h1 {
      font-size: 40px;
    }
    .offers-left p {
      font-size: 14px;
    }
    .offers-left button {
      width: 200px;
      height: 50px;
      font-size: 18px;
      margin-top: 25px;
    }
  }
  @media (max-width: 1024px) {
    .offers-right img {
      width: 200px;
    }
  }
  @media (max-width: 800px) {
    .offers-right {
      display: none;
    }
    .offers {
      padding: 50px 8%;
    }
  }
  </style>
  