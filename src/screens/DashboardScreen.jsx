import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const DashboardScreen = () => {
    // const array = useState(0); //inital value is zero
    // const counter = array[0]; // store in counter (value of array)
    // const setCounter = array[1]; //set value by 1 in array\

    //these above code is ugly now we will modifiy and that will array destructring it will be clean code
    // const [counter, setCounter] = useState(0);
    // const [name, setName] = useState("");

    
    // function increaseCounter(){
    //     setCounter(counter+1);
    // }

    //How to useState hook when we have object as a object variable

    // State with object containing counter and name
    const [details, setDetails] = useState({ counter: 0, name: "" });

    // Function to increase counter
    function increaseCounter() {
        setDetails((prev) => ({
            ...prev,
            counter: prev.counter + 1,
        }));
    }

    // Function to update name in details object
    function updateName(text) {
        setDetails((prev) => ({
            ...prev,
            name: text,
        }));
    }

    return (
        <View style={styles.container}>
            <Text> DashboardScreen 1 Name: {details.name}</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Name"
                onChangeText={updateName} // Updates name in details
                value={details.name} // Binds value to details.name
            />
            <Text>DashboardScreen `counter`: {details.counter}</Text>
            <Button title="Increase" onPress={increaseCounter} />
        </View>
    );
};

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    }, 
})