import {
    StyleSheet,
    Dimensions,
} from 'react-native';

let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    dropZone: {
        paddingTop: 75,
        height: 150,
        backgroundColor: '#2c3e50',
    },
    text: {
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        textAlign: 'center',
        color: '#fff',
    },
    draggableContainer: {
        position: 'absolute',
        top: (Window.height / 2) - CIRCLE_RADIUS,
        left: (Window.width / 2) - CIRCLE_RADIUS,
    },
    circle: {
        backgroundColor: '#1abc9c',
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS,
    },
    getBubbleBack: {
        position: 'absolute',
        top: Window.height - 50,
        left: (Window.width / 2) - 60,
    },
});
