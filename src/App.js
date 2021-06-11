import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Show from './pages/Show'
import Starred from './pages/Starred'
import {ThemeProvider} from 'styled-components'
import {LightTheme, DarkTheme, GlobalStyles} from './themes_1'


export function App() {

  const [theme, setTheme] = useState('dark');

  const themeToggler=() => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  
  return (
    
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
    <Switch>
      <Route exact={true} path="/">
      <center>
      <button onClick={()=> themeToggler()} style={{
          display: 'flex',
          padding: '5px',
          marginLeft : '80%',
          fontSize: '15px',
          border: 'none',
          outline: 'none',
          borderRadius: '12px',
          justifyContent: 'center',
          marginTop: '10px',
          backgroundColor : '#addfad',
          marginBottom : '10px;'
        }}>
          change theme
          </button>
          </center>
          
        <Home>
        </Home>

        <GlobalStyles />
        
    
      </Route>

      <Route exact={true} path="/starred">

      <center>
      <button onClick={()=> themeToggler()} style={{
          display: 'flex',
          padding: '10px',
          marginLeft : '85%',
          fontSize: '15px',
          border: 'none',
          outline: 'none',
          borderRadius: '12px',
          justifyContent: 'center',
          marginTop: '10px',
          backgroundColor : '#addfad'
        }}>
          change theme
          </button>
          </center>


        <Starred />
        <GlobalStyles />
        
      </Route>

      <Route exact={true} path="/show/:id">
      <center>
      <button onClick={()=> themeToggler()} style={{
          display: 'flex',
          padding: '10px',
          marginLeft : '85%',
          fontSize: '15px',
          border: 'none',
          outline: 'none',
          borderRadius: '12px',
          justifyContent: 'center',
          marginTop: '10px',
          backgroundColor : '#addfad'
        }}>
          change theme
          </button>
          </center>

          <Show/>
          <GlobalStyles />
        
      </Route>

    </Switch>
    </ThemeProvider>
    
  );
}

export default App;

