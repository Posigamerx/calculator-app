
import {useState} from 'react';
import './index.css';

function App() {
  const [val, setVal] = useState("");

  const backspace = () => {
    try {
      setVal(val.slice(0, -1))
    }catch (error){

    }
  }
  const calculate = ()=>{
    try{
      setVal(eval(val));
    }catch(error){
      setVal('Error')

    }
  }
  const clear = () => {
    setVal('')
  }
    
 
  return (
    
    
     <div className="container">
      <div className="calculator">
        <form >
          <div className='display'>
            <input type ='text' name ='display' value={val} onChange={(e) =>setVal(e.target.value)}/>
          </div>
          <div>
            <input type='button' value='AC' onClick={() => clear()}/>
            <input type='button' value='DE' onClick={() => backspace()} /> 
            <input type='button' value='.' onClick={(e) => setVal(val +e.target.value)}/>
            <input type='button' value='/' onClick={(e) => setVal(val +e.target.value)}/>  
          </div>
          <div>
            <input type='button' value='7' onClick={(e) => setVal(val +e.target.value)}  />
            <input type='button' value='8' onClick={(e) => setVal(val +e.target.value)} /> 
            <input type='button' value='9' onClick={(e) => setVal(val +e.target.value)} />
            <input type='button' value='*' onClick={(e) => setVal(val +e.target.value)}/>  
          </div>
          <div>
            <input type='button' value='4' onClick={(e) => setVal(val +e.target.value)} />
            <input type='button' value='5' onClick={(e) => setVal(val +e.target.value)} /> 
            <input type='button' value='6' onClick={(e) => setVal(val +e.target.value)} />
            <input type='button' value='-' onClick={(e) => setVal(val +e.target.value)} />  
          </div>
          <div>
            <input type='button' value='1' onClick={(e) => setVal(val +e.target.value)} />
            <input type='button' value='2' onClick={(e) => setVal(val +e.target.value)}/> 
            <input type='button' value='3' onClick={(e) => setVal(val +e.target.value)}/>
            <input type='button' value='+' onClick={(e) => setVal(val +e.target.value)}/>  
          </div>
          <div>
            <input type='button' value='00' onClick={(e) => setVal(val +e.target.value)} />
            <input type='button' value='0' onClick={(e) => setVal(val +e.target.value)} /> 
            <input type='button' value='=' className='equal' onClick={() => calculate()}/> 
          </div>
        </form>
      </div>
     </div>
  

  );
}

export default App;
