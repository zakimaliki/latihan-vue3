import axios from "axios";

export default {
    namespaced: true,
    state() {
        return {
            recipes
                : []
        }
    },
    getters: {},
    mutations: {
        setRecipeData(state, payload) {
            state.recipes = payload
        }
    },
    actions: {
        async getRecipeData({ commit }) {
            try {
                const { data } = await axios.get(
                    "https://vue-js-project-feed8-default-rtdb.firebaseio.com/recipes.json")
                const arr = []
                for (let key in data) {
                    arr.push({ id: key, ...data[key] })
                }
                commit("setRecipeData", arr)
            } catch (err) {
                console.log(err)
            }
        }
    }
}