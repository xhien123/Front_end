<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const text = ref("");
const router = useRouter();

const token = localStorage.getItem("token");

onMounted(() => {
  if (!token) {
    alert("You need to login first");
    router.push("/login");
  }
});

const handleCreate = async () => {
  try {
    await axios.post(
      "http://localhost:3000/categories",
      { name: text.value },
      { headers: { "x-auth-token": token } }
    );
    alert("Category created successfully.");
    router.push("/categories");
  } catch (error) {
    console.error("Error creating category:", error);
    alert("Failed to create category. Please try again.");
  }
};
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <button class="text-blue-600 hover:underline" @click="router.push('/categories')">Go Back</button>
    <h1 class="text-3xl font-semibold text-gray-800 mt-4">Create Category</h1>
    <div class="bg-white shadow-md rounded-lg mt-6 p-6">
      <label class="block text-lg text-gray-700">Category Name</label>
      <input v-model="text" type="text" placeholder="Category Name" class="mt-2 w-full p-3 border border-gray-300 rounded-lg" />
      <button @click.prevent="handleCreate" class="btn-primary mt-4">Create Category</button>
    </div>
  </div>
</template>
