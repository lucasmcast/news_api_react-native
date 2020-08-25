import { StyleSheet, Dimensions } from "react-native";

const largura = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    picture: {
        width: "100%",
        height: largura-100
    },
    description:{
        textAlign: "center"
    }
})

export default styles;