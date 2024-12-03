<template>
  <nav class="bg-gray-200 shadow-lg p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo and "SHOPPER" title -->
      <router-link to="/" class="flex items-center">
        <img src="@/assets/Picture/logo.png" alt="Logo" class="mr-2" />
        <span class="text-black text-2xl font-bold">SHOPPER</span>
      </router-link>

      <!-- Navigation Links -->
      <div class="flex space-x-4">
        <router-link to="/shop" class="text-black hover:text-red-500">Shop</router-link>
        <router-link to="/shop/men" class="text-black hover:text-red-500">Men</router-link>
        <router-link to="/shop/women" class="text-black hover:text-red-500">Women</router-link>
        <router-link to="/shop/kids" class="text-black hover:text-red-500">Kids</router-link>
      </div>

      <!-- Login and Cart Icon Positioned at Right -->
      <div class="flex items-center">
        <router-link to="/login" class="text-black hover:text-red-500 ml-4">Login</router-link>
        <router-link to="/cart" class="ml-4">
          <img src="@/assets/Picture/cart_icon.png" alt="Cart" />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
/* Nav logo and "SHOPPER" title */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-logo img {
  width: 45px;
}

.nav-logo span {
  color: black;
  font-size: 2rem;
  font-weight: bold;
}

/* Adjust text colors for navbar links */
.navbar-link {
  color: #000000;
  transition: color 0.3s;
}

.navbar-link:hover {
  color: #ff69b4; /* Pink on hover */
}

/* Styles for Login and Cart */
.nav-login-cart {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-login-cart img {
  width: 35px;
}
</style>
