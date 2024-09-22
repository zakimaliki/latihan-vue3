

<template>
  <div
    class="header__navbar row justify-content-between align-items-center"
    style="width: 450px"
  >
    <SearchMenu />
    <component :is="components[menuComponent]"></component>
  </div>
</template>

<script setup>
import SignupMenu from "./SignupMenu.vue";
import SearchMenu from "./SearchMenu.vue";
import ProfileMenu from "./ProfileMenu.vue";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
const menuComponent = ref("signup-menu");
const store = useStore();
const getToken = computed(() => {
  if (!getToken.value) {
    menuComponent.value = "signup-menu";
  } else {
    menuComponent.value = "profile-menu";
  }
  return store.state.auth.token;
});
watch(getToken, (newValue, oldValue) => {
  if (!newValue) {
    menuComponent.value = "signup-menu";
  } else {
    menuComponent.value = "profile-menu";
  }
});
const components = {
  "signup-menu": SignupMenu,
  "profile-menu": ProfileMenu,
};
</script>