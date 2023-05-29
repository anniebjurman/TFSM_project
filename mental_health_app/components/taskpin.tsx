import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import styles from "../App.style";

const TaskPin = ({taskTitle, taskTime, taskNr, onPress}) => {
    let title = taskTitle;
    let time = taskTime;
    let number = taskNr;
    let nrSide = null;

    if(taskNr % 2 == 0){
        nrSide = pinStyles.evenNr;
    }
    else{
        nrSide = pinStyles.oddNr;
    }

    return(
        <TouchableOpacity onPress={onPress}>
            <View style={pinStyles.container}>  
                <View style={pinStyles.droplett}>
                    <View style={pinStyles.textBox}>
                        <Text style={styles.h2}>{title}</Text>
                        <Text style={styles.fontSpecial}>{time}</Text>
                    </View>
                </View>
                <Text style={[styles.h1, nrSide]}>{number}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TaskPin

const pinStyles = StyleSheet.create({
    container:{
        marginTop: 10,
        height:120
    },
    evenNr:{
        fontSize: 40,
        marginTop: -112,
        marginLeft:75
    },
    oddNr:{
        fontSize: 40,
        marginTop: -112,
        marginLeft: 5
    },
    droplett:{
        alignItems: 'center',
          justifyContent: 'center',
          width: 100,
          height: 100,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius:3,
          backgroundColor: '#D79DD7',
          transform: [{ rotateZ: '45deg' }]
    },
    textBox:{
        transform: [{rotateZ: '-45deg'}]
    }
})