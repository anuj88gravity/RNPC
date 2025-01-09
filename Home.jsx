import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useDispatch, useSelector} from "react-redux";

const Home = () => {

   const {c} = useSelector(state => state.custom);
    const dispatch = useDispatch();

    const addBtn = () =>{
        console.log('Increment Button Pressed');
        dispatch({
            type: "increment",
        });
    };

    const addBtn25 = () => {
        console.log('Increment By Value Button Pressed');
        dispatch({
            type: "incrementByValue",
            payload: 25,
        });
    };
    

    const subBtn = ()=>{
        console.log('Decrement Button Pressed');
        dispatch({
            type: "decrement",
        });  
    };

    console.log('Home Component Rendered, current value of c:', c);

    
  return (
    <View style={styles.container}> 
      <Text style={styles.textBox}>Home Component : {c}</Text>
      <View style={styles.buttonBox}>
        <Button onPress={addBtn} title='Increment'/>
        <Button onPress={addBtn25} title='Increment By Value'/>
        <Button onPress={subBtn} title='Decrement'/>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        
    },
    // buttonBox:{
    //     justifyContent: 'space-between',
    //     flexDirection:'row',
    //     margin:16,
    //     flex:1,
    //     flexDirection:'row',
    // },

    textBox:{
        textAlign:'center',
        marginTop:20
        
    }
})