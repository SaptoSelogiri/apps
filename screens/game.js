import React,{ useState, useEffect, useCallback }from "react";
import { StyleSheet,View , Text,TouchableOpacity, FlatList,Button, Alert,Modal} from "react-native";
import { Timer } from "react-native-stopwatch-timer";


export default function game(navigation){
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
    const [howLong,setLong] = useState(60000)
    const [modalOn,setModal]= useState(false)
    
    const timerOff =()=>{
        setTime(false)
        setModal(true)
    }

    const closeModal =()=>{
        navigation.navigate('home')
    }

    return(
        <View style={styles.boxs}>
            <Modal visible = {modalOn} animationType='fade'>
                <View style={{...styles.boks3,...{flex:1/3}}}>
                    <View style={styles.konten}>
                        <Text > Lorem Ipsum. Dis Amori</Text>
                        <Text > Lorem Ipsum. Dis Amori</Text>
                        <Text > Lorem Ipsum. Dis Amori</Text>
                        <Text > Lorem Ipsum. Dis Amori</Text>
                    </View> 
                    <View style={styles.tombol}>
                        <Button
                        title='Close'
                        onPress={()=>setModal(false)}/>
                    </View>
                </View>
            </Modal>
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
        </View>
    )
}





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