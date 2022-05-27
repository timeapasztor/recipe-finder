import React, { useEffect, useState } from 'react';
import Api, { Url } from '../api/Api';
import { MealType } from '../utils/types';
import { RandomFoodCard } from './Cards/RandomFoodCard/RandomFoodCard';

const RandomMeal: React.FC = () => {
    const [randomMeal, setRandomMeal] = useState<MealType>({
        idMeal: '',
        strArea: '',
        strMeal: '',
        strCategory: '',
        strMealThumb: '',
        strInstructions: '',
        strSource: '',
        strYoutube: '',
        strIngredient1: '',
        strIngredient2: '',
        strIngredient3: '',
        strIngredient4: '',
        strIngredient5: '',
        strIngredient6: '',
        strIngredient7: '',
        strIngredient8: '',
        strIngredient9: '',
        strIngredient10: '',
        strIngredient11: '',
        strIngredient12: '',
        strIngredient13: '',
        strIngredient14: '',
        strIngredient15: '',
        strIngredient16: '',
        strIngredient17: '',
        strIngredient18: '',
        strIngredient19: '',
        strIngredient20: '',
        strMeasure1: '',
        strMeasure2: '',
        strMeasure3: '',
        strMeasure4: '',
        strMeasure5: '',
        strMeasure6: '',
        strMeasure7: '',
        strMeasure8: '',
        strMeasure9: '',
        strMeasure10: '',
        strMeasure11: '',
        strMeasure12: '',
        strMeasure13: '',
        strMeasure14: '',
        strMeasure15: '',
        strMeasure16: '',
        strMeasure17: '',
        strMeasure18: '',
        strMeasure19: '',
        strMeasure20: ''
    });

    useEffect(() => {
        loadRandomMeal();
    }, []);

    const loadRandomMeal = async () => {
        let result = await Api.fetchRandomMeal();
        const mealResult = result.meals[0];
        setRandomMeal(mealResult);
    };
    return <RandomFoodCard {...randomMeal} />;
};

export default RandomMeal;
