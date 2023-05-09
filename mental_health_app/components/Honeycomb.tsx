import { StyleSheet } from 'react-native';

export default function Honeycomb() {
    return (
        <div style={styles.honeycomb}>Honeycomb</div>
    );
}

const styles = StyleSheet.create({
    honeycomb: {
        height: 100,
        width: 100,
        borderWith: 10,
        backgroundColor: 'black'
    },
});