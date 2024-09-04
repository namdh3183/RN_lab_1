import React from "react";  
import { View, Text, StyleSheet } from "react-native";  
const styles = StyleSheet.create({   
    container: {   
        flex: 1,
        alignItems: "center",   
        flexDirection: "row",   
        justifyContent: "space-around",   
    },   
        
    box: {  
        width: 100,   
        height: 100,   
        justifyContent: "center",   
        alignItems: "center", 
        margin:10  
    },  
})

const Square = ({ text, bgColor = "#7ce0f9" }) => (
    <View style = {[styles.box, {backgroundColor:bgColor}]}>
        <Text>{text}</Text>
    </View>
)

const Project5 = () => {
    return (
        <View style = {styles.container}>
            <Square text = "1"/>
            <Square text = "2" bgColor="#4dc2c2"/>
            <Square text = "3" bgColor="#ff637c"/>
        </View>
    )
}

export default Project5