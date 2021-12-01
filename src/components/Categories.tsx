import React, { useEffect, useState } from 'react';
import Api from '../api/Api';
import CategoryCard from './Cards/CategoryCard/CategoryCard';

type CategoryType = {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
};

const Categories: React.FC = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        loadMealCategories();
    }, []);

    const loadMealCategories = async () => {
        let result = await Api.fetchMealCategories();
        setCategories(result.categories);
    };

    const renderCategories = () => {
        let helper: any[] = [];
        categories.forEach((category) => {
            helper.push(
                <CategoryCard
                    strCategory={category.strCategory}
                    strCategoryThumb={category.strCategoryThumb}
                    strCategoryDescription={category.strCategoryDescription}
                />
            );
        });
        console.log('helper', helper);
        return helper;
    };
    console.log('categories', categories);
    return <div>{categories.length > 0 && renderCategories()}</div>;
};

export default Categories;
