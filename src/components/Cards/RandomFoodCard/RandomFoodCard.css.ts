import styled from 'styled-components';
import getTheme, { fontSizesCSS, fontWeightsCSS } from '../../../style/themes/theme';

const { fontWeightEasy, fontWeightMedium } = fontWeightsCSS;
const theme: any = getTheme();

export const FoodCardWrapper = styled.table`
    border: 1px solid lightgray;
    position: relative;
    margin: 30px;
    padding: 10px;
`;

export const FoodCardImage = styled.img<{ src: any }>`
    float: left;
    clear: both;
    background-image: url(${(props) => props.src});
    border-radius: 4px;
    border: transparent;
    width: 30%;
    height: auto;
    object-fit: cover;
    margin: 0 30px 30px 0;
`;

export const FoodCardTitle = styled.td`
    width: 30%;
    text-align: center;
    display: inline-block;
    height: auto;
    margin-bottom: 10px;
    font-weight: ${fontWeightMedium};
    ${fontSizesCSS.fs24lh32ls25};
`;

export const FoodCardIngredients = styled.td`
    width: 60%;
    text-align: center;
    display: inline-block;
    height: auto;
    margin-bottom: 10px;
    font-weight: ${fontWeightMedium};
    ${fontSizesCSS.fs24lh32ls25};
`;

export const FoodIngredients = styled.td`
    width: 60%;
    display: flex;
    flex-wrap: wrap;
`;

export const FoodCardSubtitle = styled.div`
    height: 20px;
    margin-bottom: 10px;
    font-weight: ${fontWeightEasy};
    ${fontSizesCSS.fs14lh20ls4};
`;

export const LandingDescription = styled.div`
    clear: both;
    text-align: justify;
    text-indent: 30px;
    line-height: 1.5;
    margin-bottom: 30px;
`;

export const Source = styled.div`
    clear: both;
    display: block;
    padding-bottom: 10px;
`;

export const IngredientImage = styled.img`
    width: 20%;
    height: 90%;
`;
