import { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../constants/context';
import styles from './Themes.styles'; 

function ThemesScreen () {

    const currentTheme = useContext (ThemeContext);
    const theme = currentTheme.state.theme;

    return (
        <View style={ theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : styles.container_blue }>
         <Text style = {theme == 'light' ? styles.text_light : theme == 'dark' ? styles.text_dark : styles.text_blue }>Themes</Text>
        </View>
    );
    
}

export default ThemesScreen;