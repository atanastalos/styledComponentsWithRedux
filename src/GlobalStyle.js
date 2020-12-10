import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body {
    color: #1DAB66;
    font-family: 'Arial';
}
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-top: 50px;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 991px) {
    padding-top: 30px;
    padding-right: 30px;
    padding-left: 30px;
    font-size: 16px;
}
`;

export const Button = styled.button`
    background-color: #1DAB66;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`;

export const Title = styled.h1`
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-content: center;
`;

export default GlobalStyle;

