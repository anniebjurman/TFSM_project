import { StyleSheet, View } from 'react-native';

export default function QABubble() {
    return (
        <View style={styles.bubble}>
            <h3>Question: How to make friends?</h3>
            <p>Answer: At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum....</p>
        </View>
    )
}

const styles = StyleSheet.create({
    bubble: {
        padding: 20,
        width: '80%',
        backgroundColor: '#FFCC88',
        borderRadius: 30
    }
})