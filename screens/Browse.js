import { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../constants/context';
import styles from './Browse.styles';

function BrowseScreen () {

    const currentTheme = useContext (ThemeContext);
    const theme = currentTheme.state.theme;

    return (
        <View style={ theme == 'light' ? styles.container_light : styles.container_dark }>
         <Text style = {theme == 'light' ? styles.text_light : styles.text_dark }>Browse Screen</Text>
        </View>
    );
    
}

export default BrowseScreen;