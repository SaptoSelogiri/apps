import React,{ useState, useEffect,useCallback, useMemo }from "react";
import { StyleSheet,View , Text,TouchableOpacity, TouchableHighlight,Alert} from "react-native";
import {Timer} from 'react-native-stopwatch-timer';

export default function score() {
    
    const [isTimerStart,setTimerStart] = useState(false)
    const [isTimerRiset,setTimerRiset] =useState(false)
    const [howLong,setLong] = useState(9000)
    return(
        <View style={styles.container }>
            <View style={{top:60,margin:30,alignItems:'center'}}>
                <Timer
                totalDuration={howLong}
                msec
                start={isTimerStart}
                reset={isTimerRiset}
                handleFinish={()=>{Alert.alert('timerr is freee')}}
                options={options}
               />
            </View>
            <TouchableHighlight
            style={styles.posisi}
            onPress={()=>{
            setTimerStart(!isTimerStart)
            setTimerRiset(false)
            }}
            >
            <Text style={styles.text}>{ !isTimerStart? 'start':'stop'}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'pink',
        //flexDirection:'row',
        alignItems:'stretch'
    },
    box:{
        top:50,
        padding:20,
        borderWidth:2,
        borderColor:'#ccc'
    },
    text:{
        fontSize:60,
        fontWeight:'bold'
    },
    posisi:{
        top: 150,
        padding:20
    }
})
const options = {
    container: {
      borderColor: '#ccc',
      borderWidth:4,
        //backgroundColor: '#FF0000',
      padding: 5,
      borderRadius: 5,
      width: 200,
      alignItems: 'center',
    },
    text: {
      fontSize: 25,
      color: '#FFF',
      marginLeft: 7,
    },
  };
