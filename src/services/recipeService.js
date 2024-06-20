// src/services/recipeService.js
import axios from 'axios';

const API_URL = 'https://dummyjson.com/recipes';

export const fetchRecipes = async (page) => {
    const limit = 20;
    const skip = (page - 1) * limit;
    const response = await axios.get(`${API_URL}?limit=${limit}&skip=${skip}`);
    return {
        recipes: response.data.recipes,
        total: response.data.total,
    };
};