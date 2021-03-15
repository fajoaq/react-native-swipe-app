import React, { useMemo, useState, useRef } from 'react';
import { Animated, StyleSheet, PanResponder, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Deck = ({ data, renderCard }) => {

    const position = useRef(new Animated.ValueXY()).current;

    const panResponder = useMemo(
        () =>
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gestureState) => {
                position.setValue({ x: gestureState.dx, y: gestureState.dy });
            },
            onPanResponderRelease: () => {
                resetPosition()
            }
        })
    , []);

    const resetPosition = () => {
        Animated.spring(position, {
            useNativeDriver: false,
            toValue: { x: 0, y: 0 }
        }).start();
    }

    const getCardStyle = () => {
        const rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange: ['-120deg', '0deg', '120deg']
        })

        return {
            ...position.getLayout(),
            transform: [{ rotate }]
        }
    };

    const renderCards = () => {
        return data.map((item, index) => {
            if(index === 0) {
                return (
                    <Animated.View 
                        key={ item.id }
                        style={ getCardStyle() }
                        { ...panResponder.panHandlers }
                    >
                        { renderCard(item) }
                    </Animated.View>
                );
            }
            return renderCard(item);
        });
    };

    return <React.Fragment>
        { renderCards() }
    </React.Fragment>
};

const styles = StyleSheet.create({});

export default Deck;