import { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../constants/context';
import Themes from '../constants/ThemeColors';
import styles from './Themes.styles'; 


function ThemesScreen () {

  const currentTheme = useContext (ThemeContext);
  const theme = currentTheme.state.theme;
  const colors = Themes[theme]

  const blueThemeChange = ()  => {
    currentTheme.dispatch({ type: "BLUEMODE" })
  };

  const redThemeChange = ()  => {
    currentTheme.dispatch({ type: "REDMODE" })
  };

  const purpleThemeChange = ()  => {
    currentTheme.dispatch({ type: "PURPLEMODE" })
  };

  const yellowThemeChange = ()  => {
    currentTheme.dispatch({ type: "YELLOWMODE" })
  };

  const lightThemeChange = ()  => {
    currentTheme.dispatch({ type: "LIGHTMODE" })
  };

  const darkThemeChange = ()  => {
    currentTheme.dispatch({ type: "DARKMODE" })
  };


    return (
         <View style={[styles.itemContainer, {backgroundColor: colors.background} ]} >
         <Text style={[styles.headerText, {color: colors.textColor}]}>Themes</Text>  

         <View>
        <TouchableOpacity onPress={blueThemeChange} style={styles.button}>
          <Text style={styles.buttonText}>Blue Mode</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={redThemeChange} style={styles.button}>
          <Text style={styles.buttonText}>Red Mode</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={purpleThemeChange} style={styles.button}>
          <Text style={styles.buttonText}>Purple Mode</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={yellowThemeChange} style={styles.button}>
          <Text style={styles.buttonText}>Yellow Mode</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={lightThemeChange} style={styles.button}>
          <Text style={styles.buttonText}>Light Mode</Text>
        </TouchableOpacity>

         <TouchableOpacity onPress={darkThemeChange} style={styles.button}>
          <Text style={styles.buttonText}>Dark Mode</Text>
        </TouchableOpacity>

      </View>
      </View>
       
    );
    
    
}

export default ThemesScreen;