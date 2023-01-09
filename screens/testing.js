import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity, Alert, Button, TextInput, Animated} from "react-native"
import { Testi } from "./modul/grid";

export default function testing() {
    
    return(
        <View style={{flex:1,}}>
            <Testi></Testi>
        </View>
    )
}

const Kotak=()=>{
    const [status,setstatus] = useState(0)
    const animations = new Animated.Value(0)
    const Animasi_pindah = new Animated.Value(0)

    const pindah=()=>{
        const x = status % 2 ==0? 0 : 50
        Animated.timing(Animasi_pindah,{toValue:x,duration:500,useNativeDriver:false}).start()
    }
    useEffect(()=>{
        const x=(status % 2)+1
        Animated.timing(animations,{toValue:x,duration:500,useNativeDriver:false}).start()
        pindah()
    },)
    const styles ={
        transform:[
            {scale:animations},
            {translateY:Animasi_pindah},
            {translateX:Animasi_pindah},
            
        ],
        
    }
    const opa ={
        opacity:animations.interpolate({
            inputRange:[1,2],
            outputRange:[0,1]
        })   ///
    }
    return(
        <TouchableOpacity onPress={()=>{setstatus((prev)=>(prev += 1))}}>
            <Animated.View  style={[ss.box,styles,opa]}></Animated.View>
        </TouchableOpacity>
    )
}

const ss = StyleSheet.create({
    box:{
        top:100,
        left:50,
        height:100,
        width:100,
        backgroundColor:'orange',
        
    }
})