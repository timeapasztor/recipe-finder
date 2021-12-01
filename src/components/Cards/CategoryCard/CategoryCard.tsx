import React, { FC } from 'react';
import { CategoryCardDescription, CategoryCardHeader, CategoryCardImage, CategoryCardTitle, CategoryCardWrapper } from './CategoryCard.css';

type CategoryCardPropTypes = {
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
};

const CategoryCard: FC<CategoryCardPropTypes> = ({ strCategory, strCategoryThumb, strCategoryDescription }) => {
    return (
        <CategoryCardWrapper>
            <CategoryCardImage src={strCategoryThumb} />
            {/* <CategoryCardHeader> */}
            <CategoryCardTitle>{strCategory}</CategoryCardTitle>
            {/* </CategoryCardHeader> */}
            {/* <CategoryCardDescription>{strCategoryDescription}</CategoryCardDescription> */}
        </CategoryCardWrapper>
    );
};

export default CategoryCard;
