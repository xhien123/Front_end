import { createRouter, createWebHistory } from "vue-router";

// Import existing components
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import Categories from "@/pages/Categories.vue";
import CategoryDetailsPage from "@/pages/CategoryDetailsPage.vue";
import CategoryEditPage from "@/pages/CategoryEditPage.vue";
import CreateCategory from "@/pages/CreateCategory.vue";
import ProductCreatePage from "@/pages/ProductCreatePage.vue";
import Products from "@/pages/Products.vue";
import Shop from "@/pages/Shop.vue";

// Import new banner components
import MenBanner from "@/components/ManBanner.vue";
import WomenBanner from "@/components/WomenBanner.vue";
import KidsBanner from "@/components/KidsBanner.vue";

const routes = [
  // Auth routes
  { path: "/login", component: Login },
  { path: "/register", component: Register },

  // Categories routes
  { path: "/categories", component: Categories },
  { path: "/categories/create", component: CreateCategory },
  { path: "/categories/:id", component: CategoryDetailsPage, props: true },
  { path: "/categories/edit/:id", component: CategoryEditPage, props: true },

  // Products routes
  { path: "/products", component: Products },
  { path: "/products/create", component: ProductCreatePage },

  // Shop routes
  { path: "/shop", component: Shop },

  // Banner routes
  { path: "/shop/men", component: MenBanner },
  { path: "/shop/women", component: WomenBanner },
  { path: "/shop/kids", component: KidsBanner },

  // Default route
  { path: "/", redirect: "/hero" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
