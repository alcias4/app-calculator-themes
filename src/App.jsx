import { Calculator } from './componets/Calculator'
import { MenuThemes } from './componets/MenuTheme'
import { useState } from 'react'
import { data } from  './themes/data'
import './App.css'


function App() {
  const [theme, setTheme] = useState(data.theme1)
 
  const themeFunc = (e) =>{
    if(e===1){
      setTheme(data.theme1)
    } else if(e=== 2){
      setTheme(data.theme2)
    } else if ( e=== 3){
      setTheme(data.theme3)
    }

  }

  return (
    <>
      <main style={{background: theme.main}}>
        <MenuThemes theme={theme} themeFunc={themeFunc}/>
        <Calculator theme={theme} />
      </main>
    </>
  )
}

export default App
