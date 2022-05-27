import React, { FC } from 'react';
import {
    FoodCardSubtitle,
    FoodCardImage,
    FoodCardTitle,
    FoodCardIngredients,
    FoodCardWrapper,
    FoodIngredients,
    LandingDescription,
    Source,
    IngredientImage
} from './RandomFoodCard.css';
import { Url } from '../../../api/Api';
import { MealType } from '../../../utils/types';

export const RandomFoodCard = (randomMeal: MealType) => {
    let ingredients: (string | undefined)[] = [];
    const renderIngredients = () => {
        let list: JSX.Element[] = [];
        Object.entries(randomMeal).map(([key, value]) => {
            if (key.includes('strIngredient') && value !== '') {
                let index = key.substr(13);
                ingredients.push(value);
            }
        });
        if (ingredients.length) {
            ingredients.map((ingredient, index) => {
                list.push(<IngredientImage src={`${Url.ingredientImage}${ingredient}.png`} />);
            });
        }
        return list;
    };

    return (
        <>
            <FoodCardWrapper>
                <tbody>
                    <tr>
                        <FoodCardTitle>{randomMeal?.strMeal}</FoodCardTitle>
                        <FoodCardIngredients>Ingredients</FoodCardIngredients>
                    </tr>
                    <tr>
                        <FoodCardImage src={randomMeal?.strMealThumb} />
                        <FoodIngredients>{renderIngredients()}</FoodIngredients>
                    </tr>
                    <tr>
                        <LandingDescription>{randomMeal?.strInstructions}</LandingDescription>
                        <Source>
                            For more information about the whole recipe, click &nbsp;
                            <a href={`${randomMeal?.strSource}`} rel="noopener noreferrer" target={'_blank'}>
                                here
                            </a>
                            .
                        </Source>
                        <Source>
                            Or watch the &nbsp;
                            <a href={`${randomMeal?.strYoutube}`} rel="noopener noreferrer" target={'_blank'}>
                                video
                            </a>
                            &nbsp; on YouTube.
                        </Source>
                    </tr>
                </tbody>

                <FoodCardSubtitle>
                    {randomMeal?.strCategory} | {randomMeal?.strArea}
                </FoodCardSubtitle>
            </FoodCardWrapper>
        </>
    );
};
