import React,{ useState, useEffect,useCallback, useMemo } from "react";
import { StyleSheet,View , Text,TouchableOpacity, TouchableHighlight,Alert, ImageBackground, Modal, Dimensions,Button} from "react-native";
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
        <View style={{flex:1}}>     
            <Coba></Coba>
            <View style={{height:170,borderColor:'blue',borderWidth:2}}></View>
        </View>
    )
}

const window =Dimensions.get("window")
const screen = Dimensions.get("screen")
const DimensiSize =()=>{
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


function Coba({}){
    const Grid_hor =(prop)=>{
        const backColor = prop.backColor || null
        return(
            <TouchableOpacity onPress={()=>{aturkey(prop.id)}}  style={{borderBottomColor:'#fff',borderBottomWidth:1,margin:0.5,backgroundColor:backColor,flex:1}}>
                <View style={{backgroundColor:warna(prop.id,prop.color),margin:5,flex:1}}>
                    {prop.children}
                </View>
            </TouchableOpacity>
        )
    }
    const [on,off] = useState(false)
    const [keys,setKey]= useState([
        {id:'1a',value:true},
        {id:'2a',value:true},
        {id:'3a',value:true},
        {id:'4a',value:true},
        {id:'5a',value:true},
        {id:'1b',value:true},
        {id:'2b',value:true},
        {id:'3b',value:true},
        {id:'4b',value:true},
        {id:'5b',value:true},
        {id:'1c',value:true},
        {id:'2c',value:true},
        {id:'3c',value:true},
        {id:'4c',value:true},
        {id:'5c',value:true},
        {id:'1d',value:true},
        {id:'2d',value:true},
        {id:'3d',value:true},
        {id:'4d',value:true},
        {id:'5d',value:true},
    ])
    
    const aturkey=(id)=>{
        const preview = keys.find((key)=>{return( key.id == id)})   //onpress bisa dibuat default atau mau dikasih fungsi sendiri
        preview.value = !preview.value
        setKey((prev)=>{return prev.filter(keys => keys.id != id)}) 
        setKey((prev)=>{return [...prev,preview]})
    }
    const warna =(key,color)=>{
        const preview = keys.find((id)=>{return(id.id == key)})    
        return (!preview.value? null:color)
    }
    
    const Grid_ver =(prop)=>{
        const backColor = prop.color || null //'#663300'
        return(
            <View style={{flex:1,borderRightWidth:1,borderRightColor:'#fff',backgroundColor:backColor,margin:0.5}}>
                    {prop.children}
            </View>
        )
    }
    const [data,setDat]= useState([
        
                  [
                    { "key":"1a", "value":"true","text":"data"},
                    { "key":"2a", "value":"true","text":"data"},
                    { "key":"3a", "value":"true","text":"data"},
                    { "key":"4a", "value":"true","text":"data"}
                  ],
                  [
                   { "key":"1b", "value":"true","text":"data"},
                   { "key":"2b", "value":"true","text":"data"},
                   { "key":"3b", "value":"true","text":"data"},
                   { "key":"4b", "value":"true","text":"data"}
                 ]
       
            /// data dibuat dengan satu objek induk dengan index data[0], untuk lebih mudah mengkases semua data. jika dipisah
               /// kurung kurawal, akses obj = data[0],obj1 = data[1]
       ])
    const Algo_pengkotakan = useCallback((column, list)=>{
        //column = prop.column    || 2
        //list = prop.list
        var length = list //.length

        const column_row = [] //list final
        var x = length % column
        var row = ((length - x )/column) + 1
        const L_row =['a','b','c','d','e','f']
        var listRow =[] //jumlah row tiap column
        for(var i=0;i<column;i++){
            if(i<x){
                listRow[i]=row
            }else{
                listRow[i]=row-1
            }
        }
        if(listRow.some()){
            for(var i =0; i<listRow.length;i++){
                var r = listRow[i]
                const apend =[]
                for(var o = 0; o<r; o++){
                    apend[o] = {key:(o+L_row[i]),value:true}
                }
                column_row.push(apend)
            }
        }
        setDat (()=> {return column_row})
    },[status])
    const [status,setSat] =useState(0)
   // Algo_pengkotakan(3,15)
   // Algo_pengkotakan(column={})
    
    
    const coba=()=>{
        //var transit = data
        //transit.push(p)
        try {
            var outPUT =[]
             const p = [{ "key":"1a", "value":"true","text":"data"},{ "key":"2a", "value":"true","text":"data"},]
        //Algo_pengkotakan(3,15,outPUT)

        setDat((prev)=>{    //cara submit config baru ke objek untuk row-column
            
            return [...prev,p] //outPUT
        })
       } catch (error) {
        Alert.alert('error')
       }
    }
    const Tampil =()=>{ //sakdurungr entries mengko dimap sek
        
        return(
            <View style={{flex:4, flexDirection:'row'}}>    
                {Object.entries(data).map(([key,value])=>(
                    <Grid_ver color={'yellow'}>
                        {value.map((obj)=>(
                            <Grid_hor id={obj.key} color={'#87CEEB'}>
                                <Text> {obj.text} </Text>
                            </Grid_hor>
                        ))}
                    </Grid_ver>
                ))}
                <Button title="coba" onPress={()=>{coba()}}/>
            </View>
        )
    }
   

///cari cara agar dapat buat card grid yang fleksibel dan bisa untuk .children
///  view pertama width nya ingin pakai flex tapi height nya ikut kena flex
  return(
    <View style={{height:450,flex:1}}>
        <ImageBackground source={require('../assets/wood_texture.jpg')} resizeMode='cover' style={{flex:1,flexDirection:'row'}}>
            <Grid_ver>
                <Grid_hor id={'1a'} color={'#87CEEB'}></Grid_hor>
                <Grid_hor id={'2a'} color={'#87CEEB'}></Grid_hor>
                <Grid_hor id={'3a'} color={'#87CEEB'}></Grid_hor>
                <Grid_hor id={'4a'} color={'#87CEEB'}></Grid_hor>
            </Grid_ver>
            
            <Tampil></Tampil>
        </ImageBackground>
    </View>
  )
}

const Card_ =(prop)=>{
    for(var i=0;i<5;i++){
        return(
            <View style={{top:0,height:100,width:100,backgroundColor:'orange', margin:5}}>
                <TouchableOpacity style={{flex:1}}>
                {prop.children}

                </TouchableOpacity>
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

  /**/