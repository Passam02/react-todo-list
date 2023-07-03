import './App.css';
import TodoApp from './TodoApp';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import UseLocalStorageState from './hooks/useLocalStorageState';
import * as React from 'react';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const [isDarkMode, setDarkMode] = UseLocalStorageState("DarkMode", false)
  return (
    <ThemeProvider theme={ isDarkMode === true ? darkTheme : lightTheme}>
      <CssBaseline />
      <TodoApp setDarkMode={setDarkMode}/>
    </ThemeProvider>
  );
}

export default App;