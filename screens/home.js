import React ,{ useState} from "react";
import { StyleSheet, View, Text, Alert, TouchableOpacity} from 'react-native';





export default function home(){

  const [Menu,setMenu] = useState ([
    {name:'Mulai',key:'1'},
    {name:'Top Score',key:'2'},
    {name:'Setting',key:'3'},
    {name:'About Game',key:'4'}
  ])
    const eventHandle =(prop)=>{
       return Alert.alert('alert','text '+ prop +' telah ditekan')
    }

    const erase =(key) =>{
        setMenu((prev) =>{
            return prev.filter(Menu => Menu.key !=key)
        })
    }

    return(
        <View style={styles.container}>
            <View style ={styles.header}>
                <Text style={styles.word}>SELAMAT DATANG</Text>
            </View>
            {Menu.map((item)=>{
                return(
                    <TouchableOpacity key={item.key} onPress={()=>eventHandle(item.name)}>
                         <View>
                            <Text style={styles.item}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                   
                )  
            })}
        </View>
        
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange',
        padding : 50
    },
    item:{
        padding : 25,
        marginTop: 30,
        backgroundColor: '#ccc',
        fontSize: 30
    },
    header :{
        width:350,
        alignItems :'center',
        alignSelf :'center',
        padding: 10,
        backgroundColor: '#ADD8E6',
    },
    word:{
        fontWeight:'bold',
        fontSize : 30
    }
});