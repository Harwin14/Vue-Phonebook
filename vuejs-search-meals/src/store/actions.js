import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
        console.log(data);
        commit("setSearchedMeals", data.meals);
    });
}

export function searchMealsByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
        commit("setMealsByLetter", data.meals);
    });
}
export function searchMealsByIngredient({ commit }, ing) {
    axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
        commit("setMealsByIngredient", data.meals);
    });
}
    