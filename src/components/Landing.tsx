import React, { useEffect, useState } from 'react';
import Api, { Url } from '../api/Api';
import { LandingCard } from './Cards/LandingCard/LandingCard';

type MealType = {
    idMeal: string;
    strArea: string;
    strMeal: string;
    strCategory: string;
    strMealThumb: string;
    strInstructions: string;
    strSource: string;
    strYoutube: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strIngredient16: string;
    strIngredient17: string;
    strIngredient18: string;
    strIngredient19: string;
    strIngredient20: string;
};

const Landing: React.FC = () => {
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
        strIngredient20: ''
    });

    useEffect(() => {
        loadRandomMeal();
    }, []);

    const loadRandomMeal = async () => {
        let result = await Api.fetchRandomMeal();
        const mealResult = result.meals[0];
        setRandomMeal(mealResult);
    };

    return (
        <LandingCard
            id={randomMeal?.idMeal}
            area={randomMeal?.strArea}
            title={randomMeal?.strMeal}
            category={randomMeal?.strCategory}
            image={randomMeal?.strMealThumb}
            description={randomMeal?.strInstructions}
            source={randomMeal?.strSource}
            youtube={randomMeal?.strYoutube}
            ingredient1={randomMeal?.strIngredient1}
            ingredient2={randomMeal?.strIngredient2}
            ingredient3={randomMeal?.strIngredient3}
            ingredient4={randomMeal?.strIngredient4}
            ingredient5={randomMeal?.strIngredient5}
            ingredient6={randomMeal?.strIngredient6}
            ingredient7={randomMeal?.strIngredient7}
            ingredient8={randomMeal?.strIngredient8}
            ingredient9={randomMeal?.strIngredient9}
            ingredient10={randomMeal?.strIngredient10}
            ingredient11={randomMeal?.strIngredient11}
            ingredient12={randomMeal?.strIngredient12}
            ingredient13={randomMeal?.strIngredient13}
            ingredient14={randomMeal?.strIngredient14}
            ingredient15={randomMeal?.strIngredient15}
            ingredient16={randomMeal?.strIngredient16}
            ingredient17={randomMeal?.strIngredient17}
            ingredient18={randomMeal?.strIngredient18}
            ingredient19={randomMeal?.strIngredient19}
            ingredient20={randomMeal?.strIngredient20}
        />
    );
};

export default Landing;
