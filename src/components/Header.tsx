import { TouchableOpacity, StyleSheet, View } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { Colors } from "./styles/Colors";
import {FontAwesome} from '@expo/vector-icons';

interface HeaderProps{
    reloadGame:()=>void;
    pauseGame:()=>void;
    children:JSX.Element;
    isPaused:boolean;
}

export default function Header({
    reloadGame,
    pauseGame,
    children,
    isPaused,
}:HeaderProps):JSX.Element{
    return <View style={styles.container}>
        <TouchableOpacity onPress={reloadGame}>
            <Ionicons name="reload-circle" size={25} color={Colors.primary}/>
            </TouchableOpacity>
            
        <TouchableOpacity onPress={pauseGame}>
            <FontAwesome
            name={isPaused ? "play-circle" : "pause-circle"}
            size={35}
            color={Colors.primary}
            />
            </TouchableOpacity>{children}</View>;
       
}

const styles = StyleSheet.create({
    container:{
        flex: 0.05,
        flexDirection: "row",
        alignContent: "center",
        justifyContent:"space-between",
        borderWidth: 12,
        borderColor:Colors.primary,
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
        borderBottomWidth:0,
        padding: 15,
        backgroundColor:Colors.background



    }
});