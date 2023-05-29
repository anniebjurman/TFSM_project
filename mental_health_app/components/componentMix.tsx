import { View } from "react-native"
import TaskCard from "./TaskCard"
import TaskButton from "./TaskButton"
import Header from "./Header"
import QABubble from "./QABubble"
import TaskPin from "./taskpin"



const componentMix = () => {

    return(
        <>
        <Header/>
        <View style={{margin: 10, marginTop:20}}>
            
            <TaskCard title="Hi person" text="breathe four times" color="#F3E0F3" height="252px" width="302px" radius={10} png='medMan.png'/>
            <View style={{height:10}}/>
            <TaskButton border="none" color="#E84855" text="Next" onClick={null} radius="25px" width="150px" height="52px"/>
            <QABubble question='What are you doing?' answer='For this task we will focus on meditation and the bodys connection with the galaxy. We will embark on a journey beyond the human consciousness.'/>
            <TaskPin taskNr={1} taskTime={'10 min'} taskTitle={'Fun'} onPress={''}/>
        </View>
        </>
    )

}

export default componentMix