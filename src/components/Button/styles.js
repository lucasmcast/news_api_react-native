import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    buttonContainer: {
        width: "40%",
        elevation: 8,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.58,
        shadowRadius: 7.49,

        elevation: 24,
    },
    buttonText:{
        fontSize: 18,
        color: "#FFFFFF", 
        fontWeight: "bold",
        alignSelf: "center"
    }
});

export default styles;