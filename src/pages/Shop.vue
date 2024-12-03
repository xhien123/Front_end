<template>
  <div>
    <Hero />
    <Popular :data="popular" />
    <Offers />
    <NewCollections :data="newCollection" />
    <NewsLetter />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Hero from '../components/HeroPage.vue'
import Popular from '../components/Popular.vue'
import Offers from '../components/Offer.vue'
import NewCollections from '../components/NewCollections.vue'
import NewsLetter from '../components/NewsLetter.vue'

const popular = ref([])
const newCollection = ref([])

const fetchInfo = async () => {
  try {
    const token = localStorage.getItem('token');
    console.log(token) // Replace with actual token
    const headers = { Authorization: `Bearer ${token}` }
    
  
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  fetchInfo()
})
</script>

<style scoped>
/* Add any styles for the Shop page if needed */
</style>
