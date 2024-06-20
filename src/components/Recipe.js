// src/components/Recipe.js
import React, { useEffect } from 'react';

const Recipe = ({ recipe, toggleFavorite, isFavorite }) => {
    useEffect(() => {
        console.log('Recipe props:', recipe);
    }, [recipe]);

    return (
        <div className="recipe" style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <h3>{recipe.name}</h3>
            <p>MealType: {recipe.mealType}</p>
            <p>Tags: {recipe.tags}</p>
            <button onClick={() => toggleFavorite(recipe.id)}>
                {isFavorite ? '❤️' : '♡'}
            </button>
        </div>
    );
};

export default Recipe;