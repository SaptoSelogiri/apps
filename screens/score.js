import React,{ useState, useEffect,useCallback, useMemo }from "react";
import { StyleSheet,View , Text,TouchableOpacity, TouchableHighlight,Alert, Image, Modal, Dimensions} from "react-native";
import {Timer} from 'react-native-stopwatch-timer';
import { UserList } from "./modal";
import DataJson from '../routes/score.json'
//import RNFS from 'react-native-fs'

 function score() {
    
    const [isTimerStart,setTimerStart] = useState(false)
    const [isTimerRiset,setTimerRiset] =useState(false)
    const [howLong,setLong] = useState(9000)

    const [download,setDownload]= useState('')
    
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
            <View style={styles.bulat}>
                <Text>TT</Text>
            </View>
            <UserList height={70} List={DataJson}/>
            
        </View>
    )
}

export default function kotak(){

    return(
        <View>
            <Card_>
                <Text> halohgsdjfaskfashjfasfakas</Text>
            </Card_>
          <Dim></Dim>
        </View>
    )
}

const window =Dimensions.get("window")
const screen = Dimensions.get("screen")
const Dim =()=>{
    const [dimention,setDimention] = useState({window,screen})
    useEffect(()=>{
        const sub = Dimensions.addEventListener("change",
        ({window,screen})=>{
            setDimention({window,screen});
        })
        

        return(
            sub?.remove()
        )
    })
    const Tampi =()=>{
        return(
            <View>
                {Object.entries(dimention.window).map(([item,value])=>(
                    <Text>{item} =  {value}</Text>
                ))}
            </View>
        )
    }

    return(
        <View style={{top:100,left:100}}>
            <Text style={styles.header}> window</Text>
            {Object.entries(dimention.window).map(([key,value])=>(
                <Text>{key}= {value} </Text>
            ))}
            <Text style={styles.header}> screen</Text>
            {Object.entries(dimention.screen).map(([key,value])=>(
                <Text>{key} = {value} </Text>
            ))}
            <Tampi></Tampi>
        </View>
    )
}


const Anu =()=>{
    const [Menu,setMenu] = useState ([
        {name:'Mulai',key:'1'},
        {name:'Top Score',key:'2'},
        {name:'Setting',key:'3'},
        {name:'About Game',key:'4'}
      ])

    return(
      <View>
        {Menu.map((item)=>{
            return(
                <TouchableOpacity key={item.key}>
                    <View style={{height:50,width:130,backgroundColor:'yellow', margin:5,}}>
                        <Text> {item.name}</Text>
                     </View>
                </TouchableOpacity>
            )
        })}
      </View>
    )
}

function Coba({}){
    const Grid_hor =(prop)=>{
        var d1 = 'red'
        return(
        <View style={{backgroundColor:prop.color, flex:1,borderBottomWidth:1,borderBottomColor:'green'}}>
            {prop.children}
        </View>)
    }
    const Grid_ver =(prop)=>{
        
        return(
            <View style={{flex:1,borderRightWidth:1,borderRightColor:'blue',backgroundColor:prop.color}}>
                {prop.children}
            </View>
        )
    }
///cari cara agar dapat buat card grid yang fleksibel dan bisa untuk .children
  return(
    <View style={{height:400,width:300, borderColor:'red',borderWidth:1,flexDirection:'row'}}>
        <View style={{flex:1,borderRightWidth:1,borderRightColor:'blue'}}>
            <View style={{flex:1,borderBottomWidth:1,borderBottomColor:'green'}}></View>
            <View style={{flex:1,borderBottomWidth:1,borderBottomColor:'green'}}></View>
            <View style={{flex:1,borderBottomWidth:1,borderBottomColor:'green'}}></View>
        </View>
        <Grid_ver>
            <Grid_hor></Grid_hor>
            <Grid_hor></Grid_hor>
            <Grid_hor></Grid_hor>
        </Grid_ver>
        <View style={{flex:1,borderRightWidth:1,borderRightColor:'blue'}}>
            <View style={{flex:1,borderBottomWidth:1,borderBottomColor:'green'}}></View>
            <View style={{flex:1,borderBottomWidth:1,borderBottomColor:'green'}}></View>
            <View style={{flex:1,borderBottomWidth:1,borderBottomColor:'green'}}></View>
        </View>
    </View>
  )
}

const Card_ =(prop)=>{
    for(var i=0;i<5;i++){
        return(
            <View style={{top:100,height:100,width:100,backgroundColor:'orange', margin:5}}>
                {prop.children}
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'pink',
        //flexDirection:'row',
        //alignItems:'stretch'
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
    },
    bulat:{
        height:30,
        width:50,
        borderRadius:30/2,
        borderWidth:1,
        backgroundColor:'#fff',
        //borderColor:'blue',
        left:50
    },
    header: {
        fontSize: 16,
        marginVertical: 10
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
