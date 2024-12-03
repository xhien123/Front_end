<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const categories = ref([]);

onMounted(async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("You need to login first.");
    router.push("/login");
    return;
  }

  try {
    const res = await axios.get("http://localhost:3000/categories", {
      headers: { "x-auth-token": token },
    });
    categories.value = res.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    if (error.response && error.response.status === 401) {
      alert("Unauthorized. Please log in again.");
      router.push("/login");
    } else {
      alert("Failed to load categories. Please try again later.");
    }
  }
});

const createCategory = () => router.push("/categories/create");
const editCategory = (id) => router.push(`/categories/edit/${id}`);
const deleteCategory = async (id) => {
  if (confirm("Are you sure you want to delete this category?")) {
    try {
      await axios.delete(`http://localhost:3000/categories/${id}`, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      });
      alert("Category deleted successfully.");
      categories.value = categories.value.filter((category) => category._id !== id);
    } catch (error) {
      console.error("Error deleting category:", error);
      alert("Failed to delete category. Please try again.");
    }
  }
};
const viewDetails = (id) => router.push(`/categories/${id}`);
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-semibold text-gray-800">Categories</h1>
      <button class="btn-primary" @click="createCategory">Create Category</button>
    </div>

    <div class="overflow-x-auto bg-white shadow-md rounded-lg">
      <table class="min-w-full table-auto">
        <thead>
          <tr class="bg-gray-100 text-left text-sm font-semibold text-gray-700">
            <th class="py-3 px-4">ID</th>
            <th class="py-3 px-4">Image</th>
            <th class="py-3 px-4">Name</th>
            <th class="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category._id" class="border-b">
            <td class="py-3 px-4">{{ category._id }}</td>
            <td class="py-3 px-4">
              <img
                src="https://via.placeholder.com/36"
                alt="Category Image"
                class="rounded-full w-9 h-9 object-cover"
              />
            </td>
            <td class="py-3 px-4">{{ category.name }}</td>
            <td class="py-3 px-4 flex gap-2">
              <button class="btn-edit" @click="editCategory(category._id)">Edit</button>
              <button class="btn-delete" @click="deleteCategory(category._id)">Delete</button>
              <button class="btn-details" @click="viewDetails(category._id)">Details</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.btn-primary {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
}
.btn-primary:hover {
  background-color: #2563eb;
}

.btn-edit {
  background-color: #fbbf24;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s ease;
}
.btn-edit:hover {
  background-color: #f59e0b;
}

.btn-delete {
  background-color: #ef4444;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s ease;
}
.btn-delete:hover {
  background-color: #dc2626;
}

.btn-details {
  background-color: #22c55e;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s ease;
}
.btn-details:hover {
  background-color: #16a34a;
}
</style>
