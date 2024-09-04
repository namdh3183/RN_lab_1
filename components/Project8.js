import { Dimensions, FlatList, Text, View } from "react-native"

const DATA = [
    { 
        id: 1,
        firstName: "Nam1",
        lastName: "DuongHoai"
    },
    { 
        id: 2,
        firstName: "Nam2",
        lastName: "DuongHoai"
    },
    { 
        id: 3,
        firstName: "Nam3",
        lastName: "DuongHoai"
    },
    { 
        id: 4,
        firstName: "Nam4",
        lastName: "DuongHoai"
    },
    { 
        id: 5,
        firstName: "Nam5",
        lastName: "DuongHoai"
    },
    { 
        id: 6,
        firstName: "Nam6",
        lastName: "DuongHoai"
    },
    { 
        id: 7,
        firstName: "Nam7",
        lastName: "DuongHoai"
    },
    { 
        id: 8,
        firstName: "Nam8",
        lastName: "DuongHoai"
    },
    { 
        id: 9,
        firstName: "Nam9",
        lastName: "DuongHoai"
    },
    { 
        id: 10,
        firstName: "Nam10",
        lastName: "DuongHoai"
    },
    { 
        id: 11,
        firstName: "Nam11",
        lastName: "DuongHoai"
    },
    { 
        id: 12,
        firstName: "Nam12",
        lastName: "DuongHoai"
    }
]

const {width: windowWidth} = Dimensions.get("window")

const renderItem = ({item}) => {
    return (
        <View style = {{
            width: windowWidth,
            padding: 10,
            height: 75,
            backgroundColor: "lightgray", 
            justifyContent: "center",
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5}}>
            <Text>
                {item.firstName + " " + item.lastName}
            </Text>
        </View>
    )
}

const Project8 = () => {
    return (
        <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={renderItem}/>
    )
}

export default Project8