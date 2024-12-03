<template>
  <div class="max-w-md mx-auto mt-10 p-5 border rounded shadow">
    <h1 class="text-2xl font-bold mb-4">Register</h1>
    <form @submit.prevent="register">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="username"
          id="username"
          placeholder="Username"
          required
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="password"
          id="password"
          type="password"
          placeholder="Password"
          required
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="role">
          Role
        </label>
        <select
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="role"
          id="role"
        >
          <option value="admin">Admin</option>
          <option value="customer">Customer</option>
        </select>
      </div>
      <!-- Updated flex container for centering the button -->
      <div class="flex justify-center">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const username = ref("");
const password = ref("");
const role = ref("admin"); // Default role is admin

const register = async () => {
  try {
    const response = await axios.post("http://localhost:3000/auth/register", {
      username: username.value,
      password: password.value,
      role: role.value,
    });
    console.log("Registration successful:", response.data);
    alert("Registration successful!");
    // Optionally, redirect to the login page or another page
  } catch (error) {
    // console.error("Error during registration:", error);
    console.log(error);
    alert("Registration failed. Please try again.");
  }
};
</script>

<style scoped>
/* Add any styles needed for your registration form here */
</style>
