import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity, Alert, Button, TextInput, Animated, ImageBackground} from "react-native"
import { Timer } from "react-native-stopwatch-timer";


export default function kopp(){
    const [pemain,setPemain] =useState(['sapto','tama','acong','tony','anggoro'])
    const [negara,setNegara] = useState([])
    const arr = ['Maroko','Portugal','Inggris','Kroasia','Brasil','prancis','Belanda']
    const [gam,Setgam] = useState ([
        {title:'brasil',text:"require('../gambar/brazil.jpg')"},
        {title:'kroasia',text:"require('../gambar/kroasia.jpeg')"},
        {title:'prancis',text:"require('../gambar/prancis.jpeg')"}
    ])
    

    const [star,setStart] = useState(false)
    const [long,setLong] = useState(10000)

    
    const fadeanime = new Animated.Value(0)
    const x = !star? 1:0
    
    useEffect(()=>{
        Animated.timing(fadeanime,{toValue:x,opacity:1000,useNativeDriver:false}).start()
    })
    const xp = negara[0]

    const shuffle = useCallback(() =>{
       // loopAray(arr)
        var aray = arr, curren = arr.length, randm;
        while (curren != 0){
            randm = Math.floor(Math.random()*(curren+1));
            curren--;
            
            [aray[curren],aray[randm]]=[aray[randm],aray[curren]];
        }
    })
    shuffle()   
    
    const Handle =()=>{
      setNegara((prev)=>(prev=arr))
    }
    return(
        <View style={{flex:1}}>
            <View style={{}}>
                {pemain.map((p)=>{
                    return(
                        <TouchableOpacity onPress={()=>setStart(!star)}>
                            <View style={styles.kontainerPemain}>
                                <Text style={{fontSize:30}}> {p}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View style={{height:320,width:370, borderColor:'black',borderWidth:2,margin:3, backgroundColor:'skyblue'}}>
                <Timer 
                start={star}
                totalDuration={long}
                options={options} />
                <Button title="handle" onPress={()=>{Handle()}}/>
                <Animated.View style={[{flex:1,backgroundColor:'#fff'},{opacity: fadeanime}]}>
                    <Text style={{fontSize:20}}> {xp}</Text>
                  
                </Animated.View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    kontainerPemain:{
        padding:7,
        borderColor:'black',
        borderWidth: 2,
        margin:3
    }
})
const options ={
    container :{
        alignItems:'center'
    },
    text:{
        fontSize:25,
        color:'black',
        marginLeft:7
    }
};
