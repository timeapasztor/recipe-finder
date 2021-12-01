export default class Api {
    public static fetchRandomMeal = async () => {
        return await Api?.fetch(Url.randomMeal);
    };

    public static fetchMealCategories = async () => {
        return await Api?.fetch(Url.mealCategories);
    };

    // public static fetchUserId = async (userId: any) => {
    //     return await Api.fetch(`${Url.user}/${userId}`);
    // };

    // public static fetchAlbums = async (userId: string) => {
    //     return await Api.fetch(`${Url.user}/${userId}/albums`);
    // };

    // public static fetchPhotos = async (albumId: number) => {
    //     return await Api.fetch(`${Url.albums}/${albumId}/photos`)
    // };

    // public static fetchComments = async (userId: number) => {
    //     return await Api.fetch(`${Url.posts}/${userId}/comments`);
    // };

    public static postPosts = async (url: string, payload: any) => {
        return await Api.post(url, payload);
    };

    private static fetch = async (url: string) => {
        try {
            let response = await fetch(url);
            return await response.json();
        } catch (exception) {
            return exception;
        }
    };

    private static post = async (url: string, payload: any) => {
        try {
            let response = await fetch(url, {
                method: 'post',
                mode: 'cors',
                body: payload
            });
            return await response.json();
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
