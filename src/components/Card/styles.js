import { StyleSheet, Dimensions } from "react-native"

//const largura = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 20,
        backgroundColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.58,
        shadowRadius: 7.49,

        elevation: 24,
    }
})

export default styles