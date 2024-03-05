import styled from "styled-components";

export const Container = styled.View`
 flex: 1;
 margin-top: 100px;
`;

export const Main_Slider = styled.View`
  display: flex;
  flex-direction: row;
  background: #F83B01;
  width: 90%;
  height: 85%;
  margin: 0 auto;
  border-radius: 15px;
`;
export const Box_Slider = styled.View`
  display: flex;
  width: 50%;
  justify-content: baseline;
`;


export const Bottom_Order = styled.TouchableOpacity`
 padding:10px;
 background: #0B0C17;
 border-radius: 35px;
 justify-content: center;
 margin-left: 10px;
`;

export const Order_Text = styled.Text`  
font-size: 25px;
color: #fff;
align-items: center;
font-weight: bold;
margin-top: 30px;
margin-left: 20px;
`;
export const BtnTxt = styled.Text`  
font-size: 25px;
color: #fff;
text-align: center;
`;
export const Field_Promo = styled.View`
 display: flex;
 flex-direction: row;
 justify-content: center;
 height: 40%;
`;
export const Picture = styled.Image`
width: 180px;
height: 180px;
background: #c1c1c1;
border-radius:100px;
margin: auto;
`;

export const Text_View = styled.Text`
 font-size: 40px;
 font-weight:bold;
 color: #0B0C17;
 text-align: justify;
 
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
export const Text_Category = styled.Text`
 font-size: 32px;
 font-weight:bold;
 color: #0B0C17;
 text-align: justify;
 margin-right: 5px;
`;
export const Title_Field2 = styled.View`
 display: flex;
 flex-direction: row;
 align-items: center;
 text-align: justify;
 margin-left: 40px;
 margin-top:20px;
`;

export const Field_Itens= styled.View`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 margin: 10px;
 
`;

export const Title_Itens = styled.Text`
 font-size: 22px;
 font-weight: bold;
 color: #0b0c17;
 text-align:justify;
 margin-left: 40px;
`;
export const Pic_Itens = styled.Image`
width: 120px;
height: 120px;
background: #c1c1c1;
border-radius:100px;
`;
export const Title_Price = styled.Text`
 font-size: 22px;
 font-weight: bold;
 color: #F83B01;
 text-align:justify;
 margin-left: 40px;
`;