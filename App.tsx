import { Image, StyleSheet, Text, View } from "react-native"
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import Project5 from "./components/Project5";
import Project6 from "./components/Project6";
import Project7 from "./components/Project7";
import Project8 from "./components/Project8";


const App = ()=> {
  return (
    <View style = {mainStyle.container}>
      <Project8/>
    </View>
  )
}

export default App;

const mainStyle = StyleSheet.create( {
  container: {
    flex:1, 
    justifyContent: "center", 
    alignItems:"center"
  }
})

