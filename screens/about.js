import react from "react";
import {View, StyleSheet} from "react-native"
import { ease } from "react-native/Libraries/Animated/Easing";

export default function about(){
   var ae =[1,2,3,4,5,6] 
   
    const ddjd =()=>{
        return(
            <View style={ !abab? styles.boxTerang:styles.boxGelap}>        
            </View>
        )
    }
    const taba =()=>{
        return(
            <View>
                 {ae.map(()=>{
                    return( <View style={styles.border}></View>)
                 })}
            </View>
        )
    }
    const metrik = [taba(),taba(),taba]

    return(
        <View style={styles.container}>
          {metrik.map((item)=>{
            return(
                <View style={ styles.border}></View>
            )
          })}
        </View>
    )
};

export function Tabel (){
    const arr =[1,2,3,4,5,6]
    var abab = true
    const ar3 =[1,2,3]
    arr.forEach(nomor => {
        return(
            <View>
                {ar3.map(()=>{
                    return(
                        <View style={ styles.border}></View>
                    )
                  })}
            </View>
        )
    });
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#add8e6',
        borderColor:'green',
        borderWidth:3,
        flexDirection:'row'
    },
    boxTerang:{
        flex:1,
        backgroundColor:"#FFFFE0"
    },
    boxGelap:{
        flex:1,
        backgroundColor:"#ccc"
    },
    urutan:{
        flexDirection:'row'
    },
    border:{
        flex:1,
        borderColor:'red',
        borderWidth:3
    }
})