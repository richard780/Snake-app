import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Coordinate } from './types/types';

function getRandomFruitEmoji() {
    const fruitEmojis = ["🍎", "🍉", "🍇", "🍈", "🥭", "🍐", "🍒", "🍑", "🍍"];
    const randomIndex = Math.floor(Math.random() * fruitEmojis.length);
    return fruitEmojis[randomIndex];
}

function getRandomCoordinate(max: number): number {
    return Math.floor(Math.random() * max);
}

export default function Food(): JSX.Element {
    const [food, setFood] = useState<Coordinate>({ x: getRandomCoordinate(30), y: getRandomCoordinate(60) });
    const [emoji, setEmoji] = useState<string>(getRandomFruitEmoji());

    useEffect(() => {
        const interval = setInterval(() => {
            setFood({ x: getRandomCoordinate(30), y: getRandomCoordinate(60) });
            setEmoji(getRandomFruitEmoji());
        }, 5000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={[{ top: food.y * 10, left: food.x * 10 }, styles.food]}>{emoji}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    food: {
        width: 20,
        height: 20,
        borderRadius: 7,
        position: "absolute",
    }
});

