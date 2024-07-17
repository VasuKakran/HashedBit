import './App.css'

function App() {
  function Calculate(event) {
    const first = document.getElementById("firstinput");
    const second = document.getElementById("secondinput");
    const output = document.querySelector(".output");

    if (event.target.className == "add")
      output.innerText = Number(first.value) + Number(second.value);
    else if (event.target.className == "sub")
      output.innerText = (first.value - second.value);
    else if (event.target.className == "mul")
      output.innerText = (first.value * second.value);
    else if (event.target.className == "division")
      output.innerText = (first.value / second.value);
    else {
      first.value = null;
      second.value = null;
      output.innerText = "RESULT";
    }
  }
  return (
    <>
      <div className="inputs">
        <label htmlFor='firstinput'> FIRST INPUT </label>
        <input type='number' id='firstinput'></input>
        <label htmlFor='secondinput'> SECOND INPUT </label>
        <input type='number' id='secondinput'></input>
      </div>
      
      <div className="button">
        <label className='output'> RESULT </label>
        <button className='add' onClick={Calculate}>ADDITION</button>
        <button className='sub' onClick={Calculate}>SUBTRACTION</button>
        <button className='mul' onClick={Calculate}>MULTIPLICATION</button>
        <button className='division' onClick={Calculate}>DIVISION</button>
        <button className='clear' onClick={Calculate}>CLEAR</button>     
      </div>
    </>
  )
}

export default App
