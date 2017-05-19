import React from 'react';

import {
    View,
    Text,
    NavigatorIOS,
    TouchableHighlight,
} from 'react-native';

import s from './styles';
import Dnd from '../dnd';

function Hello({ navigator }) {
    return (
        <View style={s.container}>
            <Text style={s.welcome}>
                Welcome to React Native demo App!
            </Text>
            <Text style={s.instructions}>
                This app is developed special for pizzajs2
            </Text>

            <TouchableHighlight
                onPress={() => navigator.push({ component: Dnd, title: 'Drag and Drop Screen' })}
            >
                <Text>
                    Open Drag and Drop screen
                </Text>
            </TouchableHighlight>
        </View>
    );
}

export default React.createClass({
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: Hello,
                    title: 'Hello Scene',
                }}
                style={s.navigator}
            />
        );
    },
});
