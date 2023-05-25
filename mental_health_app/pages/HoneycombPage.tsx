import { Text, View, StyleSheet, ScrollView } from 'react-native';
import styles from '../App.style';
import Honeycomb from '../components/Honeycomb';


export default function HoneycombPage(props: any) {
    const theme: string = props.theme;
    let exercises: any;

    function Capitalize(str: string){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

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
                ]
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
                ]
            break;
        default:
            exercises = [
                {title: "Title 1", theme: "sleep", favorite: true},
                {title: "Title 2", theme: "movement", favorite: true},
                {title: "Title 3", theme: "sleep", favorite: false},
                {title: "Title 4", theme: "self-esteem", favorite: true},
                {title: "Title 5", theme: "mindfulness", favorite: false},
                {title: "Title 6", theme: "relaxation", favorite: false},
                {title: "Title 7", theme: "self-esteem", favorite: true},
                ]

    }

    return (
        <>
            <View style={styles2.textContainer}>
                <Text style={styles.h1}>{Capitalize(theme)}</Text>
                <Text style={styles.p}>{exercises.length} exercises</Text>
                <Text style={[styles.p, styles2.description]}>At vero eos et accusamus et iusto odio dignissimos ducimus.</Text>
            </View>
            <ScrollView style={styles2.exerciseContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles2.exerciseInnerCont}>
                    {exercises.map((hc: any, index: any) => (
                        <Honeycomb isFavorite={hc.favorite} theme={hc.theme} title={hc.title} key={index}></Honeycomb>
                    ))}
                </View>
            </ScrollView>
        </>
    );
}

const styles2 = StyleSheet.create({
    textContainer: {
        margin: 20,
        // backgroundColor: "lightblue",

    },
    exerciseContainer: {
        margin: 20,
        width: '100%',
    },
    exerciseInnerCont: {
        // backgroundColor: "pink",
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
    }
});