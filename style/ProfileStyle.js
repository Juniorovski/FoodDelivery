import styled from "styled-components";


export const Container = styled.View`
 flex: 1;
 
`;
export const Box_Login = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 50px;
`;
export const PictureProfile = styled.Image`
width: 120px;
height: 120px;
border-radius: 80px;
background: #c1c1c1;
margin: 0 auto;
`;
export const Text_View = styled.Text`
 font-size: 35px;
 font-weight:bold;
 color: #000;
 text-align: justify;
 margin: 0 auto;
`;
export const Simple_Text = styled.Text`  
font-size: 18px;
color: #000;
margin-left: 10px;
margin-top: 5px;
align-items: center;
text-align: center;
`;

export const FieldAlter= styled.View`
display: flex;
flex-direction: column;
padding: 15px;
margin-left: 10px;
margin-bottom:10px;
margin-top: 25px;
`;

export const RedirectedBottom = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: bold;
  margin: 15px;
  align-items: center;
`;
export const LogoutBottom = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: bold;
  align-items: center;
  
`;
export const Logout_Text = styled.Text`  
font-size: 20px;
color: #F83B01;
margin-left: 10px;
align-items: center;
text-align: center;
`;

export const FieldLogout= styled.View`
display: flex;
flex-direction: column;
padding: 15px;
width: 40%;
margin-left: 10px;
margin-bottom:10px;
border-radius: 30px;
border: 1px solid #F83B01;
`;