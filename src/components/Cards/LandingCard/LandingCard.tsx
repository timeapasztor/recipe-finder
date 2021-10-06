import React, { FC } from 'react';
import {
    LandingCardIngredients,
    LandingCardHeader,
    LandingCardSubtitle,
    LandingCardImage,
    LandingCardTitle,
    LandingCardWrapper,
    LandingDescription,
    Source
} from './LandingCard.css';
import { checkIngredient } from '../../../helper';
import { Link } from 'react-router-dom';

type LandingCardPropTypes = {
    id?: string;
    area?: string;
    title?: string;
    category?: string;
    image?: string;
    description?: string;
    source?: string;
    youtube?: string;
    ingredient1?: string;
    ingredient2?: string;
    ingredient3?: string;
    ingredient4?: string;
    ingredient5?: string;
    ingredient6?: string;
    ingredient7?: string;
    ingredient8?: string;
    ingredient9?: string;
    ingredient10?: string;
    ingredient11?: string;
    ingredient12?: string;
    ingredient13?: string;
    ingredient14?: string;
    ingredient15?: string;
    ingredient16?: string;
    ingredient17?: string;
    ingredient18?: string;
    ingredient19?: string;
    ingredient20?: string;
};

export const LandingCard: FC<LandingCardPropTypes> = ({
    id,
    area,
    title,
    category,
    image,
    description,
    source,
    youtube,
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    ingredient5,
    ingredient6,
    ingredient7
}) => {
    let ingredients: (string | undefined)[] = [];

    const renderIngredients = () => {
        let list: JSX.Element[] = [];
        checkIngredient(ingredient1) && ingredients.push(ingredient1);
        checkIngredient(ingredient2) && ingredients.push(ingredient2);
        checkIngredient(ingredient3) && ingredients.push(ingredient3);
        checkIngredient(ingredient4) && ingredients.push(ingredient4);
        checkIngredient(ingredient5) && ingredients.push(ingredient5);
        checkIngredient(ingredient6) && ingredients.push(ingredient6);
        checkIngredient(ingredient7) && ingredients.push(ingredient7);
        if (ingredients.length) {
            ingredients.map((ingredient, index) => {
                list.push(<li key={index}>{ingredient}</li>);
                console.log('list', list);
            });
        }
        return <LandingCardIngredients>{list}</LandingCardIngredients>;
    };

    return (
        <LandingCardWrapper>
            <LandingCardImage src={image} />
            <LandingCardHeader>
                <LandingCardTitle>{title}</LandingCardTitle>
                <LandingCardSubtitle>
                    {category} | {area}
                </LandingCardSubtitle>
                {renderIngredients()}
            </LandingCardHeader>
            <LandingDescription>{description}</LandingDescription>
            <Source>
                For more information about the whole recipe, click &nbsp;
                <a href={`${source}`} rel="noopener noreferrer" target={'_blank'}>
                    here
                </a>
                .
            </Source>
            <Source>
                Or watch the &nbsp;
                <a href={`${source}`} rel="noopener noreferrer" target={'_blank'}>
                    video
                </a>
                &nbsp; on YouTube.
            </Source>
        </LandingCardWrapper>
    );
};
