import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor:"#ECEFF1",
        margin:10,
        borderRadius:10,
        padding:10,
        width: Dimensions.get('window').width/2.25,
        flex:1,
        alignItems:"center",
        
    },
    image_container:{
        backgroundColor:"white",
        padding:5,
        borderRadius:10,
    },
    image: {
        height: Dimensions.get('window').height/3,
        width: Dimensions.get('window').width/3,
        
        borderRadius:10,
    },
    inner_container:{
        padding:10
    },
    title: {
        fontWeight:"bold",
        fontSize:18,
        color:"black"
    },
    price: {
        fontSize:15,
        color:"dimgray"
    },
    stok:{
        color:"red",
        fontWeight:"bold"
    }
})