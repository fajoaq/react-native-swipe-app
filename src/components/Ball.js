import React, { Component, useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';

const Ball = () => {
    const circlePos = useRef(new Animated.ValueXY()).current;

    useEffect(() => {
        Animated.spring(circlePos, {
            useNativeDriver: false,
            toValue: { x: 200, y: 500 }
        }).start();
    }, []);

    return (
        <Animated.View style={[circlePos.getLayout()]}>
            <View style={styles.ball} />
        </Animated.View>
    );
};

const styles = {
    ball: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'black'
    }
};

export default Ball;