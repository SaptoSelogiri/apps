import React,{ useState }from "react";
import { StyleSheet,View , Text,TouchableOpacity, FlatList,Button} from "react-native";


export default function score() {

    return(
        <View style={styles.container}>
            <View style={styles.kotak}>
                <Text> ipsum lorem</Text>
            </View>
            <View style={styles.kotak}> 
                <Text> lorem ipsum</Text>
            </View>
            <View style={styles.kotak2}> 
                <Text> lorem ipsum</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'pink',
        flexDirection:'row',
        alignItems:'stretch'
    },
    kotak:{
        flex:1,
        //position:'absolute',
        //top:20,
        height:50,
        backgroundColor:'#fff',
        borderColor:'blue',
        borderWidth:2,
        
    },
    kotak2:{
        flex:1,
        //Top:20,
        backgroundColor:'#ddd',
        height:50,
        borderWidth:2,
        borderColor:'red',
        flexDirection:'column-reverse'
        //width:40
    }
})
