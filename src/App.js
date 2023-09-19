import React, {useState} from 'react';
import "./App.css";

function App() {

  const [Calc, setCalc] = useState("")
  const [fullResult, setResult] = useState("")

  const keraklixisoblovchilar = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {

    if(
      keraklixisoblovchilar.includes(value) && Calc === '' ||
      keraklixisoblovchilar.includes(value) && keraklixisoblovchilar.includes(Calc.slice(-1)
      )
    ){
      return;
    }

     setCalc(Calc + value);

     if(!keraklixisoblovchilar.includes(value)){
      setResult(eval(Calc - value).toString())
     }
  }
   
  //  const createDigitls = () => {
  //   const digitls = []

  //   for(let i = 1; i < 10; i++){
  //       digitls.push(
  //         <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
  //       )
  //   }

  //   return digitls;

  // }

  const calculate = () => {
    setCalc(eval(Calc).toString())
  }

  const deleteLast = () =>{
    if(Calc == ''){
      return
    }

    const value = Calc.slice(0, -1)

    setCalc(value)
  }

  return (
   <div className='App'>
      <div className='calculator'>

        <div className='display'>
          {/* {result ? <span>({result})</span> : ''} */}
            {Calc}
        </div>

         <div className='digitls'>
         <button onClick={() => updateCalc('1')}>1</button>
         <button onClick={() => updateCalc('2')}>2</button>
         <button onClick={() => updateCalc('3')}>3</button>
         <button className='operators' onClick={() => updateCalc('+')}>+</button>

         <button onClick={() => updateCalc('4')}>4</button>
         <button onClick={() => updateCalc('5')}>5</button>
         <button onClick={() => updateCalc('6')}>6</button>
         <button className='operators' onClick={() => updateCalc('-')}>-</button>

         <button onClick={() => updateCalc('7')}>7</button>
         <button onClick={() => updateCalc('8')}>8</button>
         <button onClick={() => updateCalc('9')}>9</button>
         <button className='operators' onClick={() => updateCalc('*')}>*</button>

         <button className='deleteBtn' onClick={() => deleteLast('C')}>C</button>
         <button onClick={() => updateCalc("0")}>0</button>
         <button onClick={calculate}>=</button>
         <button className='operators' onClick={() => updateCalc('/')}>/</button>
         </div>
      </div>
   </div>
  );
}


export default App;
