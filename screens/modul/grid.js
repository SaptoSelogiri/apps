import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity, Alert, Button, TextInput, RefreshControlBase, Animated,Image} from "react-native"


export function Testi(){

    const Grid_ver =(prop)=>{
        return(
            <View style={{flex:1,borderRightColor:'#fff',borderRightWidth:1,margin:0.5}}>
                {prop.children}
            </View>
        )
    }
    const Grid_hor = (prop)=>{
        return(
            <TouchableOpacity style={{flex:1,margin:0.5,borderBottomColor:'#fff',borderBottomWidth:1}} onPress={()=>{changeValue(prop.id)}} onLongPress={()=>{changeText(prop.id,data3,setdata3)}}>
                <Anime status={prop.status}>
                    {prop.children}
                </Anime>
            </TouchableOpacity>
        )
    }
    const [keys,setkey] = useState([
        {id:'1a',value:true},{id:'2a',value:true},{id:'3a',value:true},{id:'4a',value:true},{id:'5a',value:true},
        {id:'1b',value:true},{id:'2b',value:true},{id:'3b',value:true},{id:'4b',value:true},{id:'5b',value:true},
        {id:'1c',value:true},{id:'2c',value:true},{id:'3c',value:true},{id:'4c',value:true},{id:'5c',value:true},
        {id:'1d',value:true},{id:'2d',value:true},{id:'3d',value:true},{id:'4d',value:true},{id:'5d',value:true},
        {id:'1e',value:true},{id:'2e',value:true},{id:'3e',value:true},{id:'4e',value:true},{id:'5e',value:true},
        {id:'1f',value:true},{id:'2f',value:true},{id:'3f',value:true},{id:'4f',value:true},{id:'5f',value:true},
    ])
    const [dataStatus,setStatus]= useState(false)

    const warn ={}
    const changeValue =(id)=>{
        const ar =data3
        try {
            if(ar != null){
                Object.entries(ar).map(([key,value])=>{
                 value.map((item)=>{
                    if(item.key == id){item.value = !item.value}
                 })
                })
            }
            setdata3((prev)=>(prev = ar))
           // console.log(data3)
        } catch (error) {
           console.log('eror')// Alert.alert('eroor')
        }
        setdata3((prev)=>([...prev]))
    }
    
    const warna =(id,color)=>{
        var preview
        Object.entries(data3).map(([key,value])=>{
            value.map((item)=>{if(item.key == id){preview = item}})
        })
        return(!preview.value? null : color)
        //const preview = keys.find((key)=>(key.id == id))
        //return (!preview.value?null : color )
    }
    
    const [data2,setdata] =useState([
        { "key":"1a", "value":true,"text":"data 1"},
        { "key":"2a", "value":true,"text":"data 2"},
        { "key":"3a", "value":true,"text":"data 3"},
        { "key":"4a", "value":true,"text":"data 4"},
        { "key":"1b", "value":true,"text":"data 5"},
        { "key":"2b", "value":true,"text":"data 6"},
        { "key":"3b", "value":true,"text":"data 7"},
        { "key":"4b", "value":true,"text":"data 8"},
        { "key":"4b", "value":true,"text":"data 9"},
    ])
    const [data3,setdata3]=useState([])
    const setset=(val)=>{
        const ar =data3
        Object.entries(data3).map(([key,value])=>{
            value.map((item)=>(item.text = 'berhasill'))
        })
       // setdata3((prev)=>prev = ar)
        setdata3((prev)=>([...prev]))
    }
    const tem = ["data 1","data 2","data 3","data 4","data 5","data 6","data 7","data 8","data 9"]
    const templateData =()=>{       //make tamplate data
        try {
            var column = 2
            const x =  tem.length %column//data2.length % column
            var row =  ((tem.length - x)/column)+1 
            const Lrow =['a','b','c','d','e','f','g']
            const listcolumn =[]
            for(var o =0; o<column;o++){
                var apend =[]
                const prom = new Promise(resolve =>{
                    for( var m =0; m<row; m++){
                       var dataTampil = tem[m+(row*o)]    || null//data2[m+(r*o)].text || null
                      // var valNew = tem[m+(row*o)].text    || true        // ini sebenarnya untuk memasukan value dari list asal
                       apend[m]= {key: ((m+1) + Lrow[o]),value:true,text:dataTampil}    
                    }
                })
                listcolumn.push(apend)
            }            
            setdata3((prev)=>prev = listcolumn)
        //asd = listcolumn
        } catch (error) {
           Alert.alert('error') 
        }
    }
    
    const temp =()=>{
        temp1(setdata3)
    }
    const change=()=>{
        setdata((prev)=>{
            return [...prev]
        })
        //templateData()
    }
    
    return(
        <View style={{flex:1,backgroundColor:'#87CEEB',flexDirection:'row'}}>
            <Image source={require('../../assets/monyet.jpeg')} 
                style={[StyleSheet.absoluteFill,{flex:1}]}
                blurRadius={5}
            />
            {Object.entries(data3).map(([key,value])=>(
                <Grid_ver>
                    {value.map((obj)=>(
                        <Grid_hor id={obj.key} color={'yellow'} status={obj.status}>
                            <View style={{backgroundColor:warna(obj.key,'yellow'),margin:5,flex:1}}>
                                {obj.value == true? <Text style={{fontSize:20}}>{obj.text}</Text> : <Text style={{fontSize:20}}> </Text>}
                            </View>
                        </Grid_hor>
                    ))}
                </Grid_ver>
            ))}
            <View style={{top:50}}>
                <Button title="Terapkan" onPress={()=>{setList(setdata3)}}/>
                <TextInput style={{ height: 30,width:100,backgroundColor:'#fff'}} placeholder= 'coba' onChangeText={(val)=> {setset(val)}}/>
                <Button title="change" onPress={()=>{change()}}/>
            </View>
        </View>
    )
}

const setList =(setList)=>{
    const colom = 3
    const row =6
    const Lrow =['a','b','c','d','e','f','g']
    const listcolom =[]
    for(var i=0;i<colom;i++){
        var apend =[]
        const prom =new Promise(solve=>{
            for(var m=0;m<row;m++){
                apend[m]={key:((m+1)+Lrow[i]),value:true,text:'data',status:false}
            }
        })
        listcolom.push(apend)
    }
    setList((prev)=>prev=listcolom)
}


const changeText =(id,data,setdata)=>{
    const ar =data
    try {
        Object.entries(ar).map(([key,value])=>{
            value.map((item)=>{
                if(item.key == id){item.status = !item.status}
            })
        })
        setdata((prev)=>(prev=ar))
    } catch (error) {
        Alert.alert('error')
    }
    setdata((prev)=>([...prev]))
}

const Anime =(prop)=>{
    const animationsScale = new Animated.Value(1)
    const animationMove = new Animated.Value(0)
    const startAnmasi=()=>{
        Animated.timing(animationsScale,{toValue:3,duration:500,useNativeDriver:false}).start()
    }
    
    const animasiStyle={
        transform:[
            {scale:animationsScale},
            {translateY:animationMove},
            
        ],
        
    }
    useEffect(()=>{
        if(prop.status == true){
            startAnmasi()
        }else{
            Animated.timing(animationsScale,{toValue:1,duration:500,useNativeDriver:false}).start()
        }
        const x = prop.status == false? 0 : -50
        Animated.timing(animationMove,{toValue:x,duration:500,useNativeDriver:false}).start()
    })
    const box ={
        flex:1,
        backgroundColor:prop.status? 'orange':'',
        justifyContent:'center',
        top:0,
        //position:'absolute'
    }
    return(
        <Animated.View style={[box,animasiStyle]}>
            {prop.children}
        </Animated.View>
    )
}