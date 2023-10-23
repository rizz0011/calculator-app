import React, { useState } from 'react'
import  "./calculator.css"

function Calculator() {

  const [cal, setCal] = useState("")
  const [result, setResult] = useState("")

  const ops = ['/','*','+','-','.']

  const calUpdate = value => {
    if(
      ops.includes(value) && cal === ''  ||
       ops.includes(value) && ops.includes(cal.slice(-1))
       ){
        return
       }
    setCal(cal + value)
    if(!ops.includes(value)){
      setResult(eval(cal + value).toString())
    }
  }

  const calculate = () => {
    setCal(eval(cal).toString())
  }

  const delLast = () => {
   if(cal == ""){
return
   }
   const value =cal.slice(0, -1)
   setCal(value)

  }

  return (
    <div className='main'>
        <div className='calculator'>
          <h3>Calculator</h3>
        </div>
        <div className='display'>
         {result ?  <p>{result}</p> : '' }
          <p>{cal || "0"}</p>
        </div>
        <div className='operators'>
          <button onClick={() => calUpdate('/')}>/</button>
          <button onClick={() => calUpdate('*')}>*</button>
          <button onClick={() => calUpdate('+')}>+</button>
          <button onClick={() => calUpdate('-')}>-</button>

          <button onClick={delLast} >DEL</button>
        </div>

        <div className='keyword'>
          <button onClick={() => calUpdate("1")}>1</button>
          <button onClick={() => calUpdate("2")}>2</button>
          <button onClick={() => calUpdate("3")}>3</button>
          <button onClick={() => calUpdate("4")}>4</button>
          <button onClick={() => calUpdate("5")}>5</button>
          <button onClick={() => calUpdate("6")}>6</button>
          <button onClick={() => calUpdate("7")}>7</button>
          <button onClick={() => calUpdate("8")}>8</button>
          <button onClick={() => calUpdate("9")}>9</button>
          <button onClick={() => calUpdate("0")}>0</button>
          <button onClick={() => calUpdate(".")}>.</button>

          <button onClick={calculate}>=</button>
        </div>


    </div>
  )
}

export default Calculator