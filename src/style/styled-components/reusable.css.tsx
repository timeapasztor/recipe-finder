import styled from 'styled-components';
import SVGInline from 'react-inlinesvg';
import getTheme, { fontSizesCSS, zIndexesCSS } from '../themes/theme';

const theme: any = getTheme();

export const StyledSVGInline = styled(SVGInline)`
    width: 40px;
    height: 40px;
    z-index: ${zIndexesCSS.zIndexItem};
    padding: 0 10px 0 10px;
`;

export const TopHeader = styled.div`
    background: rgba(62, 69, 85, 0.7);
    position: relative;
    width: 100%;
    height: 61px;
    z-index: 5;
    top: 0;
    padding: 0 20px;
    border-bottom: 1px solid#444d63;
`;

export const TopNavigation = styled.div`
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
    font-family: Quicksand, sans-serif;
    display: flex;
    align-items: center;
    .img {
        height: 35px;
        padding: 12px 0 0 35px;
        flex-grow: 0.7;
        animation-duration: 1s;
        animation-name: slidein;
        animation-iteration-count: initial;
    }
    a {
        color: #ededed;
        text-align: center;
        padding: 20px 20px;
        text-decoration: none;
        font-size: 17px;
    }

    a:hover {
        text-decoration: underline;
    }

    a.active {
        background-color: #4caf50;
        color: white;
    }
`;

export const MenuList = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
`;

export const LandingWrapper = styled.div`
    margin-top: 61px;
    height: auto;
    width: 100%;
    padding: 0 20px;
    // background: ${theme.palette.background.default};
    background: red;
`;
