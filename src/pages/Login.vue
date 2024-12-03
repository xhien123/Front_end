<template>
  <div class="min-h-screen flex items-center justify-center bg-cover bg-center" style="background-image: url('/path-to-your-background.jpg');">
    <!-- Login Section -->
    <div v-if="!isLoggedIn" class="w-full max-w-sm p-6 bg-black bg-opacity-60 rounded-lg">
      <h1 class="text-2xl font-bold text-center text-white mb-6">Login</h1>
      <form class="space-y-6" @submit.prevent="handleLogin">
        <div>
          <label for="username" class="block text-sm font-medium text-white mb-2">Username</label>
          <input
            id="username"
            v-model="username"
            placeholder="Username"
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-white mb-2">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Password"
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>

        <!-- Register Link -->
        <div class="block text-center text-blue-300 hover:underline mt-4">
          <button type="button" @click="showRegisterModal = true">Register</button>
        </div>
      </form>
    </div>

    <!-- Logout Button (Visible when user is logged in) -->
    <div v-if="isLoggedIn" class="w-full max-w-sm p-6 bg-black bg-opacity-60 rounded-lg">
      <h1 class="text-2xl font-bold text-center text-white mb-6">Welcome, {{ username }}</h1>
      <button
        @click="handleLogout"
        class="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Log Out
      </button>
    </div>

    <!-- Registration Modal -->
    <div v-if="showRegisterModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <button
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          @click="showRegisterModal = false"
        >
          ✕
        </button>

        <!-- Registration Form -->
        <h2 class="text-xl font-bold mb-4">Create Account</h2>
        <form @submit.prevent="register">
          <div>
            <label for="reg-username" class="block text-sm font-medium mb-2">Username</label>
            <input
              id="reg-username"
              v-model="regUsername"
              placeholder="Username"
              class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label for="reg-password" class="block text-sm font-medium mb-2">Password</label>
            <input
              id="reg-password"
              v-model="regPassword"
              type="password"
              placeholder="Password"
              class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label for="role" class="block text-sm font-medium mb-2">Role</label>
            <select
              id="role"
              v-model="regRole"
              class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
            </select>
          </div>

          <button
            type="submit"
            class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none mt-4"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const username = ref("");
const password = ref("");
const showRegisterModal = ref(false);
const regUsername = ref("");
const regPassword = ref("");
const regRole = ref("admin"); // Default role
const router = useRouter();

// Check if the user is logged in
const isLoggedIn = ref(localStorage.getItem("token") !== null);

// Login handler
const handleLogin = async () => {
  try {
    const res = await axios.post("http://localhost:3000/auth/login", {
      username: username.value,
      password: password.value,
    });
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("username", username.value);
    isLoggedIn.value = true; // User is logged in
    router.push("/categories");
  } catch (error) {
    console.log(error);
    alert("Login failed. Please try again.");
  }
};

// Logout handler
const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  isLoggedIn.value = false; // User is logged out
  router.push("/login");
};

// Registration handler
const register = async () => {
  try {
    const response = await axios.post("http://localhost:3000/auth/register", {
      username: regUsername.value,
      password: regPassword.value,
      role: regRole.value,
    });
    alert("Registration successful! You can now log in.");
    showRegisterModal.value = false; // Close the modal
  } catch (error) {
    console.log(error);
    alert("Registration failed. Please try again.");
  }
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
