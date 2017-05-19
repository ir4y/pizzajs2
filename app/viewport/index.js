import React from 'react';

import {
    Animated,
    PanResponder,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import s from './styles';


export default React.createClass({
    getInitialState() {
        return {
            showDraggable: true,
            dropZoneValues: null,
            pan: new Animated.ValueXY(),
        };
    },

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, {
                dx: this.state.pan.x,
                dy: this.state.pan.y,
            }]),
            onPanResponderRelease: (e, gesture) => {
                if (this.isDropZone(gesture)) {
                    this.setState({
                        showDraggable: false,
                    });
                } else {
                    Animated.spring(
                        this.state.pan,
                        { toValue: { x: 0, y: 0 } }
                    ).start();
                }
            },
        });
    },

    isDropZone(gesture) {
        let dz = this.state.dropZoneValues;
        return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
    },

    setDropZoneValues(event) {
        this.setState({
            dropZoneValues: event.nativeEvent.layout,
        });
    },

    getBubbleBack() {
        this.state.pan.setValue({ x: 0, y: 0 });
        this.setState({
            showDraggable: true,
        });
    },

    render() {
        return (
            <View style={s.mainContainer}>
                <View
                    onLayout={this.setDropZoneValues}
                    style={s.dropZone}
                >
                    <Text style={s.text}>Drop me here!</Text>
                </View>

                {this.renderDraggable()}

                {
                    this.state.showDraggable
                ?
                    null
                :
                    <TouchableHighlight
                        onPress={this.getBubbleBack}
                        style={s.getBubbleBack}
                    >
                        <Text>Get bubble back</Text>
                    </TouchableHighlight>
                }
            </View>
        );
    },

    renderDraggable() {
        if (this.state.showDraggable) {
            return (
                <View style={s.draggableContainer}>
                    <Animated.View
                        {...this.panResponder.panHandlers}
                        style={[this.state.pan.getLayout(), s.circle]}
                    >
                        <Text style={s.text}>Drag me!</Text>
                    </Animated.View>
                </View>
            );
        }
        return null;
    },
});
