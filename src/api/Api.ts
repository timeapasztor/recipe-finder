export default class Api {
    public static fetch = async (url: string) => {
        try {
            let response, data;
            response = await fetch(url);
            data = await response.json();
            return data;
        } catch (exception) {
            return exception;
        }
    };
}

export const Url = {
    randomMeal: 'https://www.themealdb.com/api/json/v1/1/random.php',
    mealCategories: 'https://www.themealdb.com/api/json/v1/1/categories.php',
    mealById: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772',
    mealByName: 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata',
    mealByCategory: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood',
    mealByArea: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian'
};
