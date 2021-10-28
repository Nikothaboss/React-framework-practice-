// ! Styles for hele appen
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const colors = {
    pink: "#E92569",
    white: "#FFFF",
    black: "#0A0A0A",
    lightGray: "#EFEFEF",
    gray: "#C7C7C7",
    darkGray: "#767676",
    gradient: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(229,229,229,1) 100%);",
    btnGradient: "linear-gradient(90deg, rgba(233,37,105,1) 85%, rgba(118,118,118,1) 85%)",
}

export const fonts = {
    lato: "'Lato', sans-serif;",
    playfair: "'Playfair Display', serif;"
}

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
};

export const GlobalStyle = createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 18px;
        font-family: ${fonts.lato};
    }

    


`

export const AppWrapper = styled.div `


`