import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerSearch:{
        marginTop: 10,
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "space-around"
        
    },
    inputSearch:{ 
        height: 30, 
        width: 200, 
        borderColor: 'gray', 
        borderWidth: 1,
        padding: 5,
        borderRadius: 20
    }
})

export default styles;