<template>
  <div class="col-12 col-sm-8">
    <recipe-description></recipe-description>
  </div>
</template>
<script setup>
import RecipeDescription from "./RecipeDescription.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const route = useRoute();
onMounted(async () => {
  console.log(route.params.id);
  await store.dispatch("recipe/getRecipeDetail", route.params.id);
});
</script>