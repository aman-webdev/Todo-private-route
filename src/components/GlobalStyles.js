import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


*,*::before,*::after{

    box-sizing: border-box;
}

body{
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans', sans-serif;
    background: #17181F;
    color: white;
    
    

}
input,button{
    font:inherit;
}

`;

export default GlobalStyles;
