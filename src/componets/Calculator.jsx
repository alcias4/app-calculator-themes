import { useFuncCal } from "../hook/useFuncCal";


export function Calculator ({theme}) {
  const { handleOnClick , handleDel, handdleResul, handleReset , resul , btns, sonido} = useFuncCal()

  const onclickFun = (e) =>{
    handleOnClick(e)
    e === 'DEL' ? handleDel(): null 
  }

  const styleLi = (e) =>{

    const style = {background: theme.brnFondoActivo,boxShadow: `0px -5px 0px ${theme.btnFondos} inset`, color: theme.colorTeclado}
    const style2 = {background: theme.btnDelet,boxShadow: `0px -5px 0px ${theme.btnDeletShow} inset`, color:"white"}
    return e === 'DEL' ?  style2:style
  }
  
  return (
    <div className="calc"  >
      <div className="panel" style={{background: theme.input, color:theme.colorResto}}  >
        <label className="val" style={{color: theme.colorResto}}>{resul.join('')}</label>
      </div>
      <section style={{background: theme.calculadoraFondo}}>
        <ul className="teclado" >
          {
            btns.map((e,i) => (
            <li  style={styleLi(e)} onClick={()=> onclickFun(e)} key={i} className="teclas">
                {e === '*'?  'X': e}
              </li>
            ))
          }
        </ul>
        <aside>
          <button style={{background: theme.btnDelet, color:"white",boxShadow: `0px -5px 0px ${theme.btnDeletShow} inset`}} onClick={handleReset} className="reset">RESET</button>
          <button style={{background: theme.btnIgual,boxShadow: `0px -5px 0px ${theme.btnIgualShow} inset` , color: theme.colorIgual}} onClick={handdleResul} className="igual"> = </button>
        </aside>
      </section>
      <audio ref={sonido} src="./sonido/tecla.mp3"></audio>
    </div>
  )
}