<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const category = ref({});
const router = useRouter();
const route = useRoute();

onMounted(async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("You need to login first");
    router.push("/login");
  }

  const id = route.params.id;

  try {
    const res = await axios.get(`http://localhost:3000/categories/${id}`, {
      headers: { "x-auth-token": token },
    });
    category.value = res.data;
  } catch (error) {
    console.error("Error fetching category:", error);
    alert("Failed to load category details. Please try again.");
  }
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <button class="text-blue-600 hover:underline" @click="router.push('/categories')">Go Back</button>
    <h1 class="text-3xl font-semibold text-gray-800 mt-4">Category Details</h1>
    <div class="bg-white shadow-md rounded-lg mt-6 p-6">
      <p class="text-lg text-gray-700 mb-2">Category ID: <strong>{{ category._id }}</strong></p>
      <p class="text-lg text-gray-700 mb-2">Category Name: <strong>{{ category.name }}</strong></p>
      <div class="flex items-center gap-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Category Image"
          class="rounded-lg w-24 h-24 object-cover"
        />
        <p class="text-lg text-gray-700">Category Image</p>
      </div>
    </div>
  </div>
</template>
