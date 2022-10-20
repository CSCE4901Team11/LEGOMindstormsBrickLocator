import React from 'react';
import { ThemeProvider } from './constants/context';
import Navigation from './constants/navigation';

function App() {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;