export const checkIngredient = (ingredient: any) => {
    if (typeof ingredient === 'string' && ingredient !== '') {
        return true;
    }
};
