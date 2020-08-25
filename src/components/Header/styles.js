import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerHeader:{
        width: "100%",
        backgroundColor: "#01579B",
        paddingTop:30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    imageHeader:{
        borderRadius: 30,
        width: 30,
        height: 30,
        margin:5
    },
    imageMenu:{
        width: 30,
        height:30
    },
    menuHeader:{
        margin:5,
        marginRight: 10
    },
    textCountry:{
        color: "#FFFFFF"
    }
})

export default  styles;