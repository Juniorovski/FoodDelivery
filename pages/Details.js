import React, { useState } from 'react'

import {Main, Field_Details, Detail_Picture, Title_Field, Text_View } from '../style/DetailsStyle';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';


const Details = () => {
    const [isFavorite,setIsFavorite]= useState(false);
  return (

       <Main>
        <Field_Details>
          <Detail_Picture source={{uri:(`https://cdn.folhape.com.br/img/pc/450/450/dn_arquivo/2021/10/burger.jpg`)}}/>
        </Field_Details>
        <Title_Field>
            <Text_View>
                Hamburguer
            </Text_View>
            <TouchableOpacity 
            onPress={()=>setIsFavorite(!isFavorite)}>
              <Entypo
              name={isFavorite? 'heart':'heart-outlined'}
              size={40}
              color={'#F83B01'}
              />
            </TouchableOpacity>
        </Title_Field>
       </Main>

      )
}

export default Details;