import React from "react";
import { View, StyleSheet } from "react-native";
import { Coordinate } from "./types/types";
import { Colors } from "./styles/Colors"; // Asegúrate de importar Colors correctamente

interface SnakeProps {
    snake: Coordinate[];
}

export default function Snake({ snake }: SnakeProps): JSX.Element {
    return (
        <React.Fragment>
            {snake.map((segment: Coordinate, index: number) => {
                const segmentStyle = {
                    left: segment.x * 10,
                    top: segment.y * 10
                };
                return <View key={index} style={[styles.snake, segmentStyle]} />;
            })}
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    snake: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: Colors.snike,
        position: 'absolute' // Asegúrate de que las posiciones se aplican correctamente
    }
});

