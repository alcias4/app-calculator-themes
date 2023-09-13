import { useRef } from "react"


export function MenuThemes ({themeFunc, theme}) {

  const btn  = [1,2,3]
  const buton = useRef(1)

  const handleOnclick = (e) => {
    themeFunc(e)
    if(e === 2){
      buton.current.style.left = '30px'
    } else if ( e=== 1) {
      buton.current.style.left = '4px'
    } else if(e===3) {
      buton.current.style.left = '58px'
    }
    
  }


  return (
  <nav className="menu" style={{color: theme.colorResto}}>
    <h1>Calc</h1>
    <div>
      <label>THEME</label>
      <menu>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <section className="pa" style={{background: theme.calculadoraFondo, boxShadow: `0px 0px 5px ${theme.calculadoraFondo} inset`}}>
          <div ref={buton} style={{background: theme.circulo}} className="circulo"></div>
          {
            btn.map((e)=>{
              return <button onClick={()=> handleOnclick(e)} key={e}></button>
            })
          }
        </section>
      </menu>
    </div>
  </nav>
  )
}