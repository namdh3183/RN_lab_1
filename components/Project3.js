import { Text, TouchableOpacity, View } from "react-native";

const Button = (props) => (
    <TouchableOpacity
        onPress={props.onPress}
        style={{
            backgroundColor: "yellow",
            alignSelf:"center",
            padding:10,
            margin:10,
            width:150,
            alignItems:"center",
            ...props.buttonStyle
        }}>
        <Text style={{color:"black"}}>{props.Text}</Text>
    </TouchableOpacity>
)

const Project3 = () => {
    return (
        <View style={{flex:1, justifyContent:"center"}}>
            <Button Text="Say Hello" onPress={() => alert("Hello 123 !")}/>
            <Button
                Text="Say Goodbye"
                onPress = {() => alert("Goodbye 123 !")}
                buttonStyle = {{backgroundColor:"#4dc2c2"}}/>
        </View>
    )
}

export default Project3