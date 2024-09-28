<template>
  <ul class="dropdown-menu">
    <router-link to="/user/personal-info" class="dropdown-item">
      My Profile</router-link
    >
    <router-link to="/user/favorite-recipes" class="dropdown-item">
      Favorited Recipes</router-link
    >
    <router-link to="/user/user-recipe" class="dropdown-item">
      My Recipes</router-link
    >
    <li><hr class="dropdown-divider" /></li>
    <li class="dropdown-item" @click="logout">Logout</li>
  </ul>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();
const logout = () => {
  store.commit("auth/setUserLogout");
  router.push("/");
};
</script>