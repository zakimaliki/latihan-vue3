

<template>
  <div
    class="header__navbar row justify-content-between align-items-center"
    style="width: 450px"
  >
    <SearchMenu />
    <SignupMenu />
  </div>
</template>

<script>
import SignupMenu from "./SignupMenu.vue";
import SearchMenu from "./SearchMenu.vue";
export default {
  components: {
    SignupMenu,
    SearchMenu,
  },
};
</script>