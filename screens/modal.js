import react from "react";
import { View,StyleSheet,Text,Modal,Image} from "react-native"
import DataJson from '../routes/score.json'
import { useState } from "react";

export default function mod({status, close}){
    return(
        <Modal visible ={status}>
            <View style={{...styles.boks3,...{flex:1/3,top:100}}}>
                    <View style={styles.konten}>
                        <Text > Lorem Ipsum. Dis Amori</Text>
                        <Text > Lorem Ipsum. Dis Amori</Text>
                        <Text > Lorem Ipsum. Dis Amori</Text>
                        <Text > Lorem Ipsum. Dis Amori</Text>
                    </View> 
                    <View style={styles.tombol}>
                        <Button
                        title='Close'
                        onPress={()=>close}/>
                    </View>
                </View>
        </Modal>
    )
};


export const UserList = ({List,height,width})=>{
    height = height || 70;
    width = width ||230;

    return(
        <View style={{flex:1}}>
            {List.map((item)=>{
                return(
                    <View key={List.indexOf(item)} style={{}}>
                        <Card_user heightC={height} widthC={width} Name={item.name} Score={item.score} />
                    </View>
                )
            })}
        </View>
    )
}
export const Card_user = ({heightC,widthC,Name,Score})=>{  
    return(
        <View style={{flexDirection:"row", width:widthC,height:(heightC-8),margin:10}}>
            <View style={{ backgroundColor:'#eee' ,justifyContent:'center', borderRadius:10, flex:1,top:3}}>
                <Text style={{fontSize:20,left:15}}> {Name}</Text>
                <Text style={{fontSize:10,left:15}}> Score : {Score} </Text>
            </View>
           <Image source={require('../assets/user.png')}
                style={{width:heightC,height:heightC, marginLeft:-20,borderRadius:(heightC/2)}}/>
        </View>
    )
}
const styles = StyleSheet.create({
    boks3:{
        flex:1,
        flexDirection:'row'
    },
    tombol :{
        flex:1,
        backgroundColor : '#fff',
        padding: 15,
        borderWidth:2,
        borderColor:'grey',
        borderRadius:10,
        margin:5
       // position:'absolute',
       // bottom:0,
        //flexDirection:'row',
    },
    konten:{
        flex:2,
        margin:5,
        borderColor:'blue',
        borderWidth:2,
        borderRadius:10
    }
})