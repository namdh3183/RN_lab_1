import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Project2 = () => {
    return (
        <View style={style.container}>
            <Button title="Button 1" onPress={() => alert("Hello !")}/>
            
            <TouchableOpacity style={style.button} onPress={() => alert("Hello 2 !")}>
                <Text style={style.text}>
                    Button 2
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Project2

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },

    button: {
        backgroundColor: "blue",
        marginTop: 10,
        alignItems: "center",
        padding: 10
    },

    text: {
        color: "white",
        fontSize: 18
    }
})