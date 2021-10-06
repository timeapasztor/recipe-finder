import styled from 'styled-components';
import getTheme, { fontSizesCSS, fontWeightsCSS } from '../../../style/themes/theme';

const { fontWeightEasy, fontWeightMedium } = fontWeightsCSS;
const theme: any = getTheme();

export const LandingCardWrapper = styled.div`
    border: 1px solig lightgray;
    position: relative;
    margin: 30px;
`;

export const LandingCardImage = styled.img<{ src: any }>`
    float: left;
    clear: both;
    background-image: url(${(props) => props.src});
    border-radius: 4px;
    border: transparent;
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin: 0 30px 30px 0;
`;

export const LandingCardHeader = styled.div`
    float: left;
`;

export const LandingCardTitle = styled.div`
    display: inline-block;
    height: auto;
    margin-bottom: 10px;
    font-weight: ${fontWeightMedium};
    ${fontSizesCSS.fs24lh32ls25};
`;

export const LandingCardSubtitle = styled.div`
    height: 20px;
    margin-bottom: 10px;
    font-weight: ${fontWeightEasy};
    ${fontSizesCSS.fs14lh20ls4};
`;

export const LandingCardIngredients = styled.ul`
    max-height: 200px;
    width: 100%;
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
