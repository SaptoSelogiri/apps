import react from "react";
import { View,StyleSheet,Text,Modal} from "react-native"

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