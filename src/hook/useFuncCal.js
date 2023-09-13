import { useState, useRef } from "react"

export function useFuncCal () {
  const numbers = [7,8,9, 'DEL' , 4,5,6,'+',1,2,3,'-', '.',0,'/','*']
  const [strin, setString] = useState([])
  const sonido = useRef()

  const handleOnClick = (num) => {
    let resul = [...strin]
    let ulti = typeof strin[strin.length -1]  === 'string'

    if(ulti === false || typeof num !== typeof strin[strin.length - 1]){
      resul.push(num)
      setString(resul) 
    }

    sonido.current.play()
  } 
  
  const handleDel = () => {
    let resul = [...strin]
    strin.length > 0 ? resul.pop() : null
    setString(resul)

  }
  
  const handdleResul = () =>{
    let cal = eval(strin.join(''))
    sonido.current.play()
    
    let nu = cal?.toFixed(3)
    setString([parseFloat(nu)])
  }

  const handleReset = () =>{
    sonido.current.play()
    setString([])
  }


  return {handleOnClick, handdleResul, handleDel, handleReset ,resul: strin, btns: numbers, sonido}
}