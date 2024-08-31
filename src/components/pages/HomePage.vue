<template>
  <div class="container-md my-5 py-5">
    <div class="recipe__title text-center">
      <h2>All Recipe</h2>
      <p style="font-size: 15px">
        Find and share everyday cooking inspiration on Allrecipes.Discover
        recipes, cooks, videos, and how-tos based on the food you love and the
        friends you follow.
      </p>
    </div>
    <RecipeList :recipes="recipes"></RecipeList>
  </div>
</template>

<script>
import RecipeList from "../recipe/RecipeList.vue";
import RecipeData from "../../recipe.js"

// const recipeList = RECIPE_DATA
export default {
  components: {
    RecipeList,
  },
  data() {
    return {
      recipes: RecipeData // Gunakan data JSON dari recipe.js di sini
    };
  },
};
</script>