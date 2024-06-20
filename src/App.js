import './App.css';
// src/App.js
import React, { useEffect, useState } from 'react';
import { fetchRecipes } from './services/recipeService';
import Recipe from './components/Recipe';

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [page, setPage] = useState(1);
    const [favorites, setFavorites] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getRecipes = async () => {
            const data = await fetchRecipes(page);
            console.log('Fetched data:', data);
            setRecipes(data.recipes);
            setTotal(data.total);
        };

        getRecipes();
    }, [page]);

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
        );
    };

    const handleNextPage = () => {
        const maxPage = Math.ceil(total / 20);
        if (page >= maxPage) {
            setPage(1);
        } else {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page === 1) {
            setPage(Math.ceil(total / 20));
        } else {
            setPage(page - 1);
        }
    };

    return (
        <div>
            <h1>Recipe App</h1>
            <div>
                {recipes.map((recipe) => (
                    <Recipe
                        key={recipe.id}
                        recipe={recipe}
                        toggleFavorite={toggleFavorite}
                        isFavorite={favorites.includes(recipe.id)}
                    />
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePreviousPage}>Previous</button>
                <button onClick={handleNextPage}>Next</button>
            </div>
        </div>
    );
};

export default App;