import React,{ useState, useEffect, useCallback,useRef }from "react";
import { StyleSheet,View , Text,TouchableOpacity, FlatList,Button, Alert,Modal, Animated, ScrollView} from "react-native";
import { Timer } from "react-native-stopwatch-timer";
import DataJson from "../routes/score.json"
import { Axios } from "axios";
import { UserList } from "./modal";
//import { ScrollView } from "react-native-gesture-handler";
//import { useRef } from "react/cjs/react.production.min";
//  import { Dropdown } from "react-native-material-dropdown";
//import * as fs from "@expo/json-file"


export default function game({navigation}){
    const [status,setstarus] = useState (0)
   // const stat =()=>{setstarus((prev)=> {return prev +=1})}
    const loopAray = (aray) =>{
        for(var i=1;i<=15;i++){
            aray[i]=i
        }
    }
    const arr = []//
    const shuffle = useCallback(() =>{
        loopAray(arr)
        var aray = arr, curren = arr.length, randm;
        while (curren != 0){
            randm = Math.floor(Math.random()*(curren+1));
            curren--;
            
            [aray[curren],aray[randm]]=[aray[randm],aray[curren]];
        }
    },[status])
    shuffle()       //dipanggil saat status berubah
    
    function tostring(input,output){
        var long = input.length ,i=0;
        for(i ;i<long;i++){
            output[i]=input[i] +'';
        }
    }
    var arr_S =[];
    tostring(arr,arr_S);
    
    const [angka,setAngka]= useState ([
        {name:arr_S [0],id:"1"},
        {name:arr_S [1],id:"2"},
        {name:arr_S [2],id:"3"},
        {name:arr_S [3],id:"4"},
        {name:arr_S [4],id:"5"},
        {name:arr_S [5],id:"6"},
        {name:arr_S [6],id:"7"},
        {name:arr_S [7],id:'8'},
        {name:arr_S [8],id:'9'},
        {name:arr_S [9],id:'0'},
        {name:arr_S [10],id:'10'},
        {name:arr_S [11],id:'11'},
        {name:arr_S [12],id:'12'},
        {name:arr_S [13],id:'13'},
        {name:arr_S [14],id:'14'},
    ])

    const erase =(key)=>{
        setAngka((prev) =>{
            return prev.filter(angka => angka.name != key)
        })
        cetakScore(key)
    }
    const [score,setScore] = useState([])
    const cetakScore =(key)=>{
        setScore((prev)=>{ return [...prev,key]})
    }
    const [nilai,setNilai] = useState(0)
    
    
    const [salah,setSalah] = useState ([])
    async function ubah(){
        if (score.length>=15){
            var mm =0 , banding = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
            for (var i =0; i<score.length;i++){
                if(score[i] == banding[i]){
                    mm++
                }else{
                    setSalah((prev)=> {return [...prev,score[i]]}) /// salahe neng kene... akses aray deny.... undefine
                }
            }
            if(mm >= 14){
                setNilai((prov)=>{return prov += 1})
            }
           
        }
        
        setstarus((prev)=>{return prev += 1})
        setAngka([
            {name:arr_S [0],id:"1"},
            {name:arr_S [1],id:"2"},
            {name:arr_S [2],id:"3"},
            {name:arr_S [3],id:"4"},
            {name:arr_S [4],id:"5"},
            {name:arr_S [5],id:"6"},
            {name:arr_S [6],id:"7"},
            {name:arr_S [7],id:'8'},
            {name:arr_S [8],id:'9'},
            {name:arr_S [9],id:'0'},
            {name:arr_S [10],id:'10'},
            {name:arr_S [11],id:'11'},
            {name:arr_S [12],id:'12'},
            {name:arr_S [13],id:'13'},
            {name:arr_S [14],id:'14'},
            
        ])
        setScore(()=>{return []})
    }

    const [time,setTime] = useState(true)
    const [riset,setRiset] = useState(false)
    const [howLong,setLong] = useState (5000)//(60000)
    const [modalOn,setModal]= useState(false)
    
    const timerOff =()=>{
        setTime(false)
        setModal(true)
    }

   

    return(
        <View style={styles.boxs}>
            <View style ={styles.boks1}>
                <Timer
                start ={time}
                reset={riset}
                totalDuration ={howLong}
                options={options}
                handleFinish={()=>timerOff()}
                />
            </View>
            <View style={styles.boks2}>
                <FlatList
                    numColumns={3}
                    //listKey  
                    keyExtractor={(item)=>item.id}
                    data={angka}
                    renderItem={({item})=>(
                        <TouchableOpacity onPress={()=>erase(item.name)}>
                            <View style={styles.nomor}>
                                <Text style={styles.item}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
               />
            </View>
            <View style={styles.boks3}>
                <View style={styles.tombol}>
                    <Button
                    title="scrambel"
                    onPress={()=>ubah()}
                    />
                </View>
                <View style={styles.konten}>
                    <Text style={{fontSize:20}} > Score anda ={nilai} </Text>
                </View>
            </View>
            <ModalScore status ={modalOn} close={setModal} navigation={navigation} score={nilai} datas={DataJson}></ModalScore>
        </View>
    )
}


 const ModalScore =({status,close ,navigation, score, datas}) =>{
    const closeModal =(close)=>{
        //close(false)
        navigation.pop()
    }
    const [dataSet,setData] = useState([{datas}])

   
    const fadeAnime = new Animated.Value(0)
    const [on,setOn] = useState(0)
    
    useEffect(()=>{
        var x = on%2
        Animated.timing(fadeAnime,{toValue:x,opacity:1000,useNativeDriver:false}).start()
        
    })
    const getData = async ()=>{
        try {
            Axios.get('http://172.20.10.7:9000/user/')
            .then(result=>{setData(result)})
            
        } catch (error) {
        Alert.alert('eror')    
        }
    }
    const getget =()=>{
        fetch('http://localhost:3000/user')
        .then(respon=>respon.json())
        .then(json=> {setData(json)})
        .catch(error=>{Alert.alert('error')})
    }
    return(
        <Modal visible ={status} animationType='fade'>
        <View style={{flex:3/4, top:50, opacity:'50%'}}>
            <View style={{flex:2/3}}>
                <View style={styleModal.conten}>
                    <Text style={{fontSize:30}}> SELAMAT</Text>
                    <Text style={{fontSize:15}}> ANDA BERHASIL MENYELASIKAN {score} RONDE</Text>
                    <Text > Anda mau menyimpan score ini?</Text>
                    <Text > lorem ipsum         {on%2}</Text>
                </View> 
                <View style={styleModal.tombol}>
                    <Button title='Simpan' onPress={()=>getData()}/>
                    <Button title='Home' onPress={()=>closeModal(close)}/>
                </View>
            </View>
            <Button title={!(on%2)? 'Wall Of Fame':'Tutup'} onPress={()=>setOn((prev)=>{return prev += 1})}/>
            <Animated.View style={[{flex:1, },{opacity:fadeAnime}]}>
                <ScrollView style={{left:20}}>
                    <UserList List={datas}/>
                </ScrollView>
            </Animated.View>
            
        </View>
    </Modal>
    )
}

const styleModal = StyleSheet.create({
    conten:{
        flex:2,
        borderWidth:2,
        borderColor:'black',
        left:10

    },
    tombol:{
        flex:1/2,
        flexDirection:'row',
        justifyContent:'space-around'
        
    }
})

const styles = StyleSheet.create({
    boxs:{
        flex: 1,
        backgroundColor:'pink',
        margin:5,
       // alignItems:'center',
        //width:'100%'
    },
    boks1:{
         backgroundColor:'#ccc',
         height:30,
         width: '100%',
    },
    boks2:{
        width:'100%',
        height:500
        //alignItems:'center',
    },
    boks3:{
        flex:1,
        flexDirection:'row',
        //borderColor:'green',
        //borderWidth:2,
        //alignItems:'center'
    },
    nomor:{
        flex: 1,
        alignItems:'center',
        backgroundColor:'#fff',
        borderWidth:2,
        borderColor:'blue', //borderRadius
        width:121.5,
        height: 100,    
    },
    item :{
         flex:1,
         justifyContent:'center',
         alignItems:'center', 
         textAlign : 'center',
         fontSize:50,
         top: 15
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
});

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