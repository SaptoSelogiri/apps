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
        padding : 60
    },
    item:{
        padding : 30,
        marginTop: 30,
        backgroundColor: '#ccc',
        fontSize: 30
    }
});