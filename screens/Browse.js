import { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../constants/context';
import styles from './Browse.styles';
import SearchBar from 'react-native-dynamic-search-bar';
import GetPieces from '../components/Pieces';
import Themes from '../constants/ThemeColors';

function BrowseScreen () {

    const currentTheme = useContext (ThemeContext)
    const theme = currentTheme.state.theme
    const colors = Themes[theme]

    return (
        <View style={[styles.container, {backgroundColor: colors.background}] }>
         <SearchBar
            placeholder="Search here"
            onPress={() => alert("onPress")}
            onChangeText={(text) => console.log(text)}
         />
         <GetPieces />
        </View>
    );
}

export default BrowseScreen;