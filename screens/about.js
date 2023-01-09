import react, { useCallback, useEffect, useState } from "react";
import {View, StyleSheet,Text, Animated} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { ease } from "react-native/Libraries/Animated/Easing";

export default function about(){
   var ae =[1,2,3,4,5,6] 
   
   
    function Taba(){
       const [status,setStatus] = useState(false)
       const [hitung, setHitung] = useState(0)
       const ubah =() =>{
       //7 setStatus(!status)
        setHitung((prev)=>{return prev += 1})
       }
       const animations = new Animated.Value(1)

       const anima =()=>{
        Animated.timing(animations,{toValue:2,duration:1500,useNativeDriver:false}).start()
       }
       const anime ={
        transform:[
            {scale:animations}
        ]
       }
       return(<View>
         {ae.map((item)=>{
             return( <View key ={item} style={!(ae.indexOf(item)% 2)? styles.boxGelap:styles.boxTerang}>
                <TouchableOpacity key={item} onPress={()=>anima()}>
                    <Animated.View style={[styles.boxTerang,anime]}>
                        <Text style={{fontSize:30,padding:'30%',}}>{item}</Text>
                    </Animated.View>
                </TouchableOpacity>
            </View>)
         })}
        </View>)
    }
    const metrik = [{ae},{ae},{ae}]

    return(
        <View style={styles.container}>
          {metrik.map((item)=>{
            return(
                <View key ={metrik.indexOf(item)} style={ styles.border}>
                   <Taba/>
                </View>
            )
        })}
        </View>
    )
};



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#add8e6',
       //borderColor:'green',
        borderWidth:3,
        flexDirection:'row'
    },
    border:{
        flex:1,
        borderColor:'red',
        //borderWidth:3
    },
    boxTerang:{
        borderBottomWidth:2,
        borderColor:'blue',
        borderLeftWidth:2,
        justifyContent:'center',
        padding:5,
        height:'16.6667%',
        backgroundColor:"#FFFFE0"
    },
    boxGelap:{
        borderBottomWidth:2,
        borderColor:'blue',
        borderLeftWidth:2,
        justifyContent:'center',
        padding:5,
        height:'16.6667%',
       // backgroundColor:"#ccc"
    },
    kotakKecil:{
        borderBottomWidth:2,
        borderColor:'blue',
        borderLeftWidth:2,
        justifyContent:'center',
        padding:5,
        height:'16.6667%' /// 100% /6 bagian... dapatnya itu...

    },
    coba:{
        flex:1,
        backgroundColor:'blue'
    }
})