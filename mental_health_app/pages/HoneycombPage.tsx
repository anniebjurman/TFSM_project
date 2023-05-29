import { Text, View, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import styles from '../App.style';
import Honeycomb from '../components/Honeycomb';
import Header from '../components/Header';


export default function HoneycombPage(props: any) {
    const theme: string = props.theme;
    let exercises: any;
    let description: string;
    let iconPath: any;

    switch (theme) {
        case 'sleep':
            exercises = [
                {title: "Breathe", theme: "sleep", favorite: true},
                {title: "Relaxation", theme: "sleep", favorite: true},
                {title: "Aerobics", theme: "sleep", favorite: false},
                {title: "Rest", theme: "sleep", favorite: true},
                {title: "Breathe 2.0", theme: "sleep", favorite: false},
                {title: "Aerobics 2.0", theme: "sleep", favorite: false},
                {title: "Rest 2.0", theme: "sleep", favorite: true},
                {title: "Breathe 2.0", theme: "sleep", favorite: false},
                {title: "Aerobics 2.0", theme: "sleep", favorite: false},
                {title: "Rest 2.0", theme: "sleep", favorite: true},
                {title: "Breathe 2.0", theme: "sleep", favorite: false},
                {title: "Aerobics 2.0", theme: "sleep", favorite: false},
                {title: "Rest 2.0", theme: "sleep", favorite: true},
                {title: "Breathe 2.0", theme: "sleep", favorite: false},
                {title: "Aerobics 2.0", theme: "sleep", favorite: false},
                {title: "Rest 2.0", theme: "sleep", favorite: true},
                ];
            description = "Discover different exercises that is designed to improve your sleep quality.";
            iconPath = require('../assets/honeycomb/sleep/sleep.png');
            break;
        case 'movement':
            exercises = [
                {title: "Walk", theme: "movement", favorite: true},
                {title: "Strength", theme: "movement", favorite: true},
                {title: "Run", theme: "movement", favorite: false},
                {title: "Yoga", theme: "movement", favorite: true},
                {title: "Run 2.0", theme: "movement", favorite: false},
                {title: "Aerobics", theme: "movement", favorite: false},
                {title: "Gymnastics", theme: "movement", favorite: true},
                {title: "Walk", theme: "movement", favorite: true},
                {title: "Strength", theme: "movement", favorite: true},
                {title: "Run", theme: "movement", favorite: false},
                {title: "Yoga", theme: "movement", favorite: true},
                {title: "Run 2.0", theme: "movement", favorite: false},
                {title: "Aerobics", theme: "movement", favorite: false},
                {title: "Gymnastics", theme: "movement", favorite: true},
                {title: "Run 2.0", theme: "movement", favorite: false},
                {title: "Aerobics", theme: "movement", favorite: false},
                ];
            description = "Explore the power of movement with these exercises designed to improve physical fitness and invigorate your body.";
            iconPath = require('../assets/honeycomb/movement/movement.png');
            break;
        case 'self-esteem':
            exercises = [
                {title: "Walk", theme: "self-esteem", favorite: true},
                {title: "Strength", theme: "self-esteem", favorite: true},
                {title: "Run", theme: "self-esteem", favorite: false},
                {title: "Yoga", theme: "self-esteem", favorite: true},
                {title: "Run 2.0", theme: "self-esteem", favorite: false},
                {title: "Aerobics", theme: "self-esteem", favorite: false},
                {title: "Gymnastics", theme: "self-esteem", favorite: true},
                {title: "Walk", theme: "self-esteem", favorite: true},
                {title: "Strength", theme: "self-esteem", favorite: true},
                {title: "Run", theme: "self-esteem", favorite: false},
                {title: "Yoga", theme: "self-esteem", favorite: true},
                {title: "Run 2.0", theme: "self-esteem", favorite: false},
                {title: "Aerobics", theme: "self-esteem", favorite: false},
                ];
            description = "Explore the power of movement with these exercises designed to improve physical fitness and invigorate your body."; // CHANGE!!
            iconPath = require('../assets/honeycomb/self-esteem/self_esteem.png');
            break;
        case 'relaxation':
            exercises = [
                {title: "Walk", theme: "relaxation", favorite: true},
                {title: "Strength", theme: "relaxation", favorite: true},
                {title: "Run", theme: "relaxation", favorite: false},
                {title: "Yoga", theme: "relaxation", favorite: true},
                {title: "Run 2.0", theme: "relaxation", favorite: false},
                {title: "Aerobics", theme: "relaxation", favorite: false},
                {title: "Gymnastics", theme: "relaxation", favorite: true},
                {title: "Walk", theme: "relaxation", favorite: true},
                {title: "Strength", theme: "relaxation", favorite: true},
                {title: "Run", theme: "relaxation", favorite: false},
                {title: "Yoga", theme: "relaxation", favorite: true},
                {title: "Run 2.0", theme: "relaxation", favorite: false},
                {title: "Aerobics", theme: "relaxation", favorite: false},
                {title: "Gymnastics", theme: "relaxation", favorite: true},
                {title: "Gymnastics", theme: "relaxation", favorite: true},
                {title: "Walk", theme: "relaxation", favorite: true},
                {title: "Strength", theme: "relaxation", favorite: true},
                ];
            description = "Explore the power of movement with these exercises designed to improve physical fitness and invigorate your body."; // CHANGE!!
            iconPath = require('../assets/honeycomb/relaxation/relaxation.png');
            break;
        case 'acceptance':
            exercises = [
                {title: "Walk", theme: "acceptance", favorite: true},
                {title: "Strength", theme: "acceptance", favorite: true},
                {title: "Run", theme: "acceptance", favorite: false},
                {title: "Yoga", theme: "acceptance", favorite: true},
                {title: "Run 2.0", theme: "acceptance", favorite: false},
                {title: "Aerobics", theme: "acceptance", favorite: false},
                {title: "Gymnastics", theme: "acceptance", favorite: true},
                {title: "Walk", theme: "acceptance", favorite: true},
                {title: "Strength", theme: "acceptance", favorite: true},
                {title: "Run", theme: "acceptance", favorite: false},
                {title: "Yoga", theme: "acceptance", favorite: true},
                {title: "Run 2.0", theme: "acceptance", favorite: false},
                {title: "Aerobics", theme: "acceptance", favorite: false},
                {title: "Gymnastics", theme: "acceptance", favorite: true},
                {title: "Run 2.0", theme: "acceptance", favorite: false},
                {title: "Aerobics", theme: "acceptance", favorite: false},
                {title: "Gymnastics", theme: "acceptance", favorite: true},
                {title: "Walk", theme: "acceptance", favorite: true},
                {title: "Strength", theme: "acceptance", favorite: true},
                {title: "Run", theme: "acceptance", favorite: false},
                ];
            description = "Explore the power of movement with these exercises designed to improve physical fitness and invigorate your body."; // CHANGE!!
            iconPath = require('../assets/honeycomb/acceptance/acceptance.png');
            break;
        case 'mindfulness':
            exercises = [
                {title: "Walk", theme: "mindfulness", favorite: true},
                {title: "Strength", theme: "mindfulness", favorite: true},
                {title: "Run", theme: "mindfulness", favorite: false},
                {title: "Yoga", theme: "mindfulness", favorite: true},
                {title: "Run 2.0", theme: "mindfulness", favorite: false},
                {title: "Aerobics", theme: "mindfulness", favorite: false},
                {title: "Gymnastics", theme: "mindfulness", favorite: true},
                {title: "Walk", theme: "mindfulness", favorite: true},
                {title: "Strength", theme: "mindfulness", favorite: true},
                {title: "Run", theme: "mindfulness", favorite: false},
                {title: "Yoga", theme: "mindfulness", favorite: true},
                {title: "Run 2.0", theme: "mindfulness", favorite: false},
                {title: "Aerobics", theme: "mindfulness", favorite: false},
                {title: "Gymnastics", theme: "mindfulness", favorite: true},
                ];
            description = "Explore the power of movement with these exercises designed to improve physical fitness and invigorate your body."; // CHANGE!!
            iconPath = require('../assets/honeycomb/mindfulness/mindfulness.png');
            break;
        case "todo":
            exercises = [
                {title: "Title 1", theme: "sleep", favorite: true},
                {title: "Title 2", theme: "movement", favorite: true},
                {title: "Title 3", theme: "sleep", favorite: false},
                {title: "Title 4", theme: "self-esteem", favorite: true},
                {title: "Title 5", theme: "mindfulness", favorite: false},
                {title: "Title 6", theme: "relaxation", favorite: false},
                {title: "Title 7", theme: "self-esteem", favorite: true},
                {title: "Title 8", theme: "acceptance", favorite: true},
                {title: "Title 1", theme: "sleep", favorite: true},
                {title: "Title 2", theme: "movement", favorite: true},
                {title: "Title 3", theme: "sleep", favorite: false},
                {title: "Title 4", theme: "self-esteem", favorite: true},
                {title: "Title 5", theme: "mindfulness", favorite: false},
                {title: "Title 6", theme: "relaxation", favorite: false},
                {title: "Title 7", theme: "self-esteem", favorite: true},
                {title: "Title 8", theme: "acceptance", favorite: true},
                ];
            description = "At vero eos et accusamus et iusto odio dignissimos ducimus."; // CHANGE!!
            iconPath = require('../assets/honeycomb/todo.png');
    }

    function Capitalize(str: string){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function RenderBackArrow() {
        if (theme != 'todo') {
            return (
                <View style={styles2.backArrowContainer}>
                    <Image style={[styles2.backArrow]} source={require('../assets/back_arrow.png')}></Image>
                </View>
            )
        }
    }

    return (
        <>
            <Header/>
            <View style={styles2.textContainer}>
                <RenderBackArrow></RenderBackArrow>
                <Text style={styles.h1}>{Capitalize(theme)}</Text>
                <Text style={styles.fontSpecial}>{exercises.length} exercises</Text>
                <Text style={[styles.p, styles2.description]}>{description}</Text>
            </View>
            <ScrollView style={styles2.exerciseContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles2.exerciseInnerCont}>
                    {exercises.map((hc: any, index: any) => (
                        <Honeycomb isFavorite={hc.favorite} theme={hc.theme} title={hc.title} key={index}></Honeycomb>
                    ))}
                </View>
            </ScrollView>
            <View style={styles2.backIconCont}>
                <Image style={[styles2.backIcon]} source={iconPath}></Image>
            </View>
        </>
    );
}

const styles2 = StyleSheet.create({
    textContainer: {
        margin: 20,
    },
    exerciseContainer: {
        margin: 20,
        width: '100%',
    },
    exerciseInnerCont: {
        flexDirection: "row",
        rowGap: 10,
        columnGap: 10,
        flexWrap: "wrap",
        width: "1000px",
        paddingLeft: 20,
        height: "70%"
    },
    description: {
        marginTop: 10
    },
    backArrow: {
        width: '17px',
        height: '100%',
        resizeMode: 'contain'
    },
    backArrowContainer: {
        width: "100%",
        height: "20px",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginBottom: "10px"
    },
    backIcon: {
        width: "100%",
        height: "100%",
        resizeMode: 'contain'
    },
    backIconCont: {
        width: "200px",
        height: "200px",
        position: "absolute",
        zIndex: -1,
        right: 0,
        bottom: 0,
    }
});