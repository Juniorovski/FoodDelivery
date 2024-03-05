import React, { useState } from 'react'
import { Bottom_Order, Box_Slider, BtnTxt, Container, Field_Itens, Field_Promo, Main_Slider, Order_Text, Pic_Itens, Picture, Sub_Title, Text_Category, Text_View, Title_Field, Title_Field2, Title_Itens, Title_Price } from '../style/StyleHome';
import Swiper from 'react-native-swiper';
import { Entypo, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Home = ({navigation}) => {

   const [isLiked,setIsLiked] = useState(false);
  return (
    <Container>
      <Field_Promo>
      <Swiper>
        <Main_Slider>
        <Box_Slider>
            <Order_Text>
              Get your 30% daily discount now!
            </Order_Text>
            <Bottom_Order>
              <BtnTxt>
                Order Now
              </BtnTxt>
            </Bottom_Order>
        </Box_Slider>
        <Picture source={{uri:(`https://github.com/corn.png`)}}/>
        </Main_Slider>
        <Main_Slider>
        <Box_Slider>
            <Order_Text>
              Get your 30% daily discount now!
            </Order_Text>
            <Bottom_Order>
              <BtnTxt>
                Order Now
              </BtnTxt>
            </Bottom_Order>
        </Box_Slider>
        <Picture/>

        </Main_Slider>
        <Main_Slider>
        <Box_Slider>
            <Order_Text>
              Get your 30% daily discount now!
            </Order_Text>
            <Bottom_Order>
              <BtnTxt>
                Order Now
              </BtnTxt>
            </Bottom_Order>
        </Box_Slider>
        <Picture/>
        </Main_Slider>
        </Swiper>
        </Field_Promo>

        <Title_Field>
          <Text_View>
             Food Delivery
          </Text_View>
          <TouchableOpacity
            onPress={()=> setIsLiked(!isLiked)}>
            <Entypo
             name={isLiked? 'heart' : 'heart-outlined'}
            color={'#F83B01'}
            size={35}/>
          </TouchableOpacity>
        </Title_Field>
        <Sub_Title>
        The best food delivery!
        </Sub_Title>
       <Title_Field2>
        <Text_Category>
          Popular Items
        </Text_Category>
        <Entypo name='cog' size={35} color={'#F83B01'}/>
       </Title_Field2>
       <Field_Itens>
        <Box_Slider>
          <Title_Itens>
            Hamburguer
          </Title_Itens>
          <Sub_Title>
            Hamburguer, presunto, queijo, tomate, salada 
          </Sub_Title>
          <TouchableOpacity>
          <Title_Price>
          R$10,50
          </Title_Price>
        </TouchableOpacity>
        </Box_Slider>
        <TouchableOpacity
        onPress={()=>navigation.navigate('details')}
        >
        <Pic_Itens 
         source={{uri:(`https://github.com/corn.png`)}}
        />
        </TouchableOpacity>
        
       </Field_Itens>

    </Container>

    
  )
}

export default Home;