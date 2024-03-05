import styled from "styled-components";

export const Main = styled.View`
 flex: 1;

`;
export const Field_Details = styled.View`
 display: flex;
 justify-content: center;
 height: 40%;
`;
export const Detail_Picture = styled.Image`
width: 200px;
height: 200px;
background: #c1c1c1;
border-radius:100px;
margin: auto;
`;

export const Title_Field = styled.View`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-evenly;
 text-align: justify;
`;
export const Sub_Title = styled.Text`
 font-size: 20px;
 color: #32354E;
 margin-left: 40px;
`;
export const Title_Price = styled.Text`
 font-size: 22px;
 font-weight: bold;
 color: #F83B01;
 text-align:justify;
 margin-left: 40px;
`;