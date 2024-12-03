<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const text = ref("");
const route = useRoute();
const router = useRouter();

const handleEdit = async () => {
  try {
    await axios.put(
      `http://localhost:3000/categories/${route.params.id}`,
      { name: text.value },
      { headers: { "x-auth-token": localStorage.getItem("token") } }
    );
    alert("Category updated successfully.");
    router.push("/categories");
  } catch (error) {
    console.error("Error editing category:", error);
    alert("Failed to update category. Please try again.");
  }
};
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <button class="text-blue-600 hover:underline" @click="router.push('/categories')">Go Back</button>
    <h1 class="text-3xl font-semibold text-gray-800 mt-4">Edit Category</h1>
    <div class="bg-white shadow-md rounded-lg mt-6 p-6">
      <label class="block text-lg text-gray-700">Category Name</label>
      <input v-model="text" type="text" placeholder="Category Name" class="mt-2 w-full p-3 border border-gray-300 rounded-lg" />
      <button @click.prevent="handleEdit" class="btn-primary mt-4">Save Changes</button>
    </div>
  </div>
</template>
