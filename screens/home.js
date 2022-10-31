import React ,{ useState} from "react";
import { StyleSheet, View, Text, Alert, TouchableOpacity, Button} from 'react-native';
//import game from "./game";





export default function home({navigation}){

  const [Menu,setMenu] = useState ([
    {name:'Mulai',key:'1'},
    {name:'Top Score',key:'2'},
    {name:'Setting',key:'3'},
    {name:'About Game',key:'4'}
  ])
    const eventHandle =(prop)=>{
       return Alert.alert('alert','text '+ prop +' telah ditekan')
    }

    const pressHandler =() =>{
        navigation.navigate('Top_Score');
    }
    const eventPressComponent =(prop)=>{
        navigation.navigate(prop)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                 <Text style={styles.word}>SELAMAT DATANG</Text>
            </View>
            <Card>
                {Menu.map((item)=>{
                return(
                    <TouchableOpacity key={item.key} onPress={()=>eventPressComponent(item.name)}>
                         <View>
                            <Text style={styles.item}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                   
                )  
                })}
            </Card>
            <Button 
            title="game"
            onPress={()=>pressHandler()}
            />
        </View>
        
    );
}

 export function Card(propS){
    return(
        <View style={styles.padd}>
            {propS.children}
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange',
        //padding : 50
    },
    item:{
        padding : 20,
        borderColor:'grey',
        borderWidth:4,
        borderRadius:15,
        marginTop: 25,
        //backgroundColor: '#ccc',
        fontSize: 30,
        alignItems:'center'
    },
    header :{
        width:350,
        alignItems :'center',
        alignSelf :'center',
        marginTop:5,
        paddingTop: 10,
        
       // backgroundColor: '#ADD8E6',
    },
    word:{
        fontWeight:'bold',
        fontSize : 30
    },
    padd:{
        padding:40,
        paddingTop:10,
    }
});