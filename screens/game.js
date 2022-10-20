import React,{ useState }from "react";
import { StyleSheet,View , Text,TouchableOpacity, FlatList,Button} from "react-native";



export default function game(){
function shuffle(arr){
    var curren = arr.length , randm;
    while (curren != 0){
        randm = Math.floor(Math.random()*(curren+1));
        curren--;

        [arr[curren],arr[randm]]=[arr[randm],arr[curren]];
    }
}

const arr = [1,2,3,4,5,6,7,8,9,10,11];
//shuffle(arr);
function tostring(input,output){
    var long = input.length ,i=0;
    for(i ;i<long;i++){
        output[i]=input[i] +'';
    }
}
var arr_S =[];
tostring(arr,arr_S);
const presshandler =()=>{
    shuffle(arr)
    tostring(arr,arr_S);
    /*for(var i=0;i<arr_S.length;i++){
    return (
        shuffle(arr)
        //angka[i].key == arr_S[i]
   )}*/
}

const erase =(key)=>{
    setAngka((prev) =>{
        return prev.filter(angka => angka.id != key)
    })
    id_data(key)
}
 var asr =[];
const id_data = (id) =>{
    shuffle(arr)
    asr =(()=>{ return asr.push(id)})
       
}

var [angka,setAngka]= useState ([
    {name:'2',id:"1"},
    {name:'4',id:"11"},
    {name:'6',id:"3"},
    {name:'1',id:"4"},
    {name:'7',id:"5"},
    {name:'0',id:"6"},
    {name:'7',id:"7"},
    {name:'71',id:'8'},
    {name:'91',id:'9'},
    {name:'13',id:'0'},
    {name:'33',id:'10'},
])

return(
    <View style={styles.boxs}>
       <FlatList
            numColumns={3}
            //listKey  
            keyExtractor={(item)=>item.name}
            data={angka}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>erase(item.id)}>
                    <Text style={styles.item}>{item.id}</Text>
                </TouchableOpacity>
            )}
       />
        <Text>{arr_S}</Text>
        <Text> {asr}</Text>
        <View style={styles.tombol}>
            <Button
            title="scrambel"
            onPress={()=> shuffle(arr)}
            />
        </View>
    </View>
)

}



const styles = StyleSheet.create({
    boxs:{
        flex: 1,
        backgroundColor:'pink',
        margin:5
        
    },
   item :{
    marginTop: 30,
    padding: 16,
    backgroundColor:'#fff',
    fontSize:30,
    marginHorizontal:35,
    marginLeft:30,
    marginStart:40
   },
   tombol :{
    
    backgroundColor : '#fff',
    padding: 15,
   }
});

