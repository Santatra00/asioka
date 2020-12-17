import React, { useState} from 'react';

import { 
  Header, 
  Item, 
  Input, 
  Icon,
} from 'native-base';
import { StyleSheet} from 'react-native';

export default function MyHeader(props) {
  
  return (
        <Header>
          <Item>
              {
                  props.isSearch?<Icon name="ios-search"/>:<AntDesign name="arrowleft" size={24} color="#fff" onPress={()=>props.precedent()}/>
              }
            {
                props.isSearch?<Input style={styles.searchInput} placeholder="Search" onChangeText={text=>props.searchText(text)}/>:<Text style={styles.text}>{props.title}</Text>
            }
          </Item>
        </Header>
        
  );
}


const styles = StyleSheet.create({
  message: {
    marginLeft: '5px',
    border: "3px solid red",
    marginBottom: '30px'
  },
  item:{
    paddingLeft: "5px",
    height: '70px',   
  },
  right: {
    marginTop: '20px'
  },
  searchInput:{
  },
  text:{
    color: "#fff",
    fontFamily: "AvenirNext-Regular",
    marginLeft: "24px",
    fontSize: "18px"

  },
});
