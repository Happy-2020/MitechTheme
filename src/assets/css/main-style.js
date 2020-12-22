import { createGlobalStyle } from 'styled-components'
import SelectorIcon from "../images/icons/selector-icon.png"
import {worldRotate} from './animations'

export const GlobalStyle = createGlobalStyle `

*, *::after, *::before {
    box-sizing: border-box;
  }
html, body {
    height: 100%;
}
body{
  line-height: ${props => props.theme.lineHieghts.text};
  font-size: ${props => props.theme.fontSizes.text};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeight.text};
  visibility: visible;
  font-family: ${props => props.theme.fontFamily.text};
  color: ${props => props.theme.colors.textColor};
  position: relative;
  background-color: ${props => props.theme.colors.bodyBgColor};
  &.no-overflow{
    overflow: hidden;
  }
}

h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.headingColor};
    font-family: ${props => props.theme.fontFamily.heading};
    font-weight: ${props => props.theme.fontWeight.heading};
    margin-top: 0;
    margin-bottom: 0;
    line-height: ${props => props.theme.lineHieghts.heading};
}
h1 {
    font-size: ${props => props.theme.fontSizes.h1};
    @media only screen and (max-width: 1199px){
      font-size: 46px;
    }
    @media only screen and (max-width: 991px){
      font-size: 40px;
    }
    @media only screen and (max-width: 767px){
      font-size: 34px;
    }
  }
h2 {
    font-size: ${props => props.theme.fontSizes.h2};
    @media only screen and (max-width: 1199px){
      font-size: 36px;
    }
    @media only screen and (max-width: 991px){
      font-size: 36px;
    }
    @media only screen and (max-width: 767px){
      font-size: 30px;
    }
  }
h3 {
    font-size: ${props => props.theme.fontSizes.h3};
    @media only screen and (max-width: 1199px){
      font-size: 32px;
    }
    @media only screen and (max-width: 991px){
      font-size: 28px;
    }
    @media only screen and (max-width: 767px){
      font-size: 25px;
    }
}
h4 {
    font-size: ${props => props.theme.fontSizes.h4};
    @media only screen and (max-width: 1199px){
      font-size: 30px;
    }
    @media only screen and (max-width: 991px){
      font-size: 28px;
    }
    @media only screen and (max-width: 767px){
      font-size: 24px;
    }
}
h5 {
    font-size: ${props => props.theme.fontSizes.h5};
    @media only screen and (max-width: 767px){
      font-size: 20px;
    }
}
h6 {
    font-size: 18px;
}



p:last-child {
    margin-bottom: 0;
}
a, button {
  color: inherit;
  display: inline-block;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
}
a, button, img, input, span {
  transition: ${props => props.theme.transition};
}
*:focus {
  outline: none !important;
}
a:focus {
  color: inherit;
  outline: none;
  text-decoration: none;
}
.btn.focus, .btn:focus {
    outline: none;
    box-shadow: none;
}
a:hover, button:hover {
  text-decoration: none;
  color: ${props => props.theme.colors.themeColor};
}
button, input[type="submit"] {
  cursor: pointer;
}
ul {
  list-style: outside none none;
  margin: 0;
  padding: 0;
}
.mark, mark {
    padding: 0 0;
    background-color: transparent;
}

select {
    padding: 3px 20px;
    height: 56px;
    max-width: 100%;
    width: 100%;
    outline: none;
    border: 1px solid ${props => props.theme.colors.borderColorTwo};
    border-radius: 5px;
    background: ${props => props.theme.colors.borderColorTwo} url(${SelectorIcon}) no-repeat center right 20px;
    background-color: rgb(248, 248, 248);
    -moz-appearance: none;
    -webkit-appearance: none;
    &:focus {
        background: ${props => props.theme.colors.borderColorTwo} url(${SelectorIcon}) no-repeat center right 20px !important;
    }
}

img{
    max-width: 100%;
}

::selection {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.themeColor};
}
form {
    input:focus::-webkit-input-placeholder { color:transparent; }
    input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */
    input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */
    input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */
    input, textarea{
        &::placeholder{
            transition: ${props => props.theme.transition};
        }
    }
}
input[type="text"]:focus, input[type="email"]:focus, input[type="url"]:focus, input[type="password"]:focus, input[type="search"]:focus, input[type="number"]:focus, input[type="tel"]:focus, input[type="range"]:focus, input[type="date"]:focus, input[type="month"]:focus, input[type="week"]:focus, input[type="time"]:focus, input[type="datetime"]:focus, input[type="datetime-local"]:focus, input[type="color"]:focus, textarea:focus, select:focus, select:focus, textarea:focus {
    color: ${props => props.theme.colors.themeColor};
    border-color: ${props => props.theme.colors.themeColor};
}
input[type="checkbox"] {
    position: relative;
    background: 0 0;
    border-width: 0;
    box-shadow: none;
    margin: 0 10px 0 3px;
    cursor: pointer;
}

.site-wrapper-reveal{
  background-color: ${props => props.theme.colors.white};
}


@keyframes separator-bounce {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
}
#googleMap-1, #googleMap-2 , #googleMap-3 {
    height: 400px;
}
.wrapper{
    position: relative;
}
@media (min-width: 1200px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
        max-width: 1200px;
    }
}
@media (min-width: 1600px){
    .gutter-xl-70{
        margin-right: -35px;
        margin-left: -35px;
        [class*="col"]{
            padding-left: 35px;
            padding-right: 35px;
        }
    }
}
.xp-150{
    @media (min-width: 1200px){
        padding: 0 50px;
    }
    @media (min-width: 1600px){
        padding: 0 150px;
    }
}
figure{
  margin: 0;
}
.worldRotate {
  animation: ${worldRotate} 20s linear infinite;
}

`;