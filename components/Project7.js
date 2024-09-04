import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

const Project7 = () => {
    const [name, setName] = useState("")

    return (
        <View>
            <Text style={style.text}>What's your name ?</Text>
            <TextInput 
                style = {style.input}
                onChangeText = {(text) => setName(text)}
                value = {name}/>
            <Button
                title="Say Hello"
                onPress={() => {
                    alert(`Hello ${name} !`)
                    setName("")
                }}/>
        </View>    
    )
}

export default Project7

const style = StyleSheet.create({
    text: {
        fontSize: 23,
        fontWeight: "bold",
        color: "black"
    },

    input: {
        backgroundColor: "#c1c9c4",
        borderRadius: 5,
        padding: 5,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20
    }
})