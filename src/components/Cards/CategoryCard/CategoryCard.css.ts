import styled from 'styled-components';
import getTheme, { fontSizesCSS, fontWeightsCSS } from '../../../style/themes/theme';

const { fontWeightEasy, fontWeightMedium } = fontWeightsCSS;
const theme: any = getTheme();

export const CategoryCardWrapper = styled.div`
    border: 1px solid lightgray;
    position: relative;
    margin: 30px;
    padding: 10px;
    width: 25%;
    height: auto;
    display: inline-block;
`;

export const CategoryCardImage = styled.img<{ src: any }>`
    float: left;
    clear: both;
    border-radius: 4px;
    border: transparent;
    max-width: 100%;
    height: auto;
    object-fit: cover;
`;

export const CategoryCardHeader = styled.div`
    float: left;
`;

export const CategoryCardTitle = styled.div`
    display: flex;
    justify-content: center;
    height: auto;
    margin: 10px 0;
    font-weight: ${fontWeightMedium};
    ${fontSizesCSS.fs16lh24ls44};
`;

export const CategoryCardDescription = styled.div`
    clear: both;
    text-align: justify;
    text-indent: 30px;
    line-height: 1.5;
    margin-bottom: 30px;
`;
