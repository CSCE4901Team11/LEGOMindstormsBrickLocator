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
      <View style={[styles.container, {backgroundColor: colors.background} ]} >
        <Text style={[styles.headerText, {color: colors.textColor}]}>Themes</Text>  
        <View>
          <TouchableOpacity onPress={lightThemeChange} style={styles.button} accessible={true} accessibilityLabel="Light Theme" accessibilityRole="Button">
            <Text style={styles.buttonText}>Light</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={darkThemeChange} style={styles.button} accessible={true} accessibilityLabel="Dark Theme" accessibilityRole="Button">
            <Text style={styles.buttonText}>Dark</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={blueThemeChange} style={styles.button} accessible={true} accessibilityLabel="Blue Theme" accessibilityRole="Button"> 
            <Text style={styles.buttonText}>Blue</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={purpleThemeChange} accessible={true} style={styles.button} accessibilityLabel="Purple Theme" accessibilityRole="Button">
            <Text style={styles.buttonText}>Purple</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={redThemeChange} style={styles.button} accessible={true} accessibilityLabel="Red Theme" accessibilityRole="Button">
            <Text style={styles.buttonText}>Red</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={yellowThemeChange} style={styles.button} accessible={true} accessibilityLabel="Yellow Theme" accessibilityRole="Button">
            <Text style={styles.buttonText}>Yellow</Text>
          </TouchableOpacity>

        </View>
      </View> 
    );
    
    
}

export default ThemesScreen;
