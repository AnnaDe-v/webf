import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;
  let textInput6 = React.createRef();
  let textOut6 = React.createRef();
  let textInput8 = React.createRef();
  let textInput9 = React.createRef();
  let textInput10 = React.createRef();
  let colorOut = React.createRef();
  const [output6, setOutput6] = useState(7);
  const [output8, setOutput8] = useState('');
  const [output9, setOutput9] = useState(50);

  let num7 = function randomInt(a, b) {
    return Math.floor(Math.random() * (b - a + 1) ) + a
  }


  function task1() {
    console.log('task2')
  }
  function task2(event) {
    event.target.classList.add('active')
  }
  function task3(event) {
    console.log(event.target.value)
  }
  function task4() {
    count4++;
    console.log(count4);
  }
  function task5(event) {
    if(event.target.checked) {
      document.querySelector('.out-5').innerHTML = event.target.value
    } else {
      document.querySelector('.out-5').innerHTML = 0
    }
  }
  function task6() {
    setOutput6(textInput6.current.value)

  }
  function task7() {
    colorOut.current.style.backgroundColor = `rgb(${num7(0, 256)},${num7(0, 256)},${num7(0, 256)})`;
  }
  function task8(event) {
    if (Number.isInteger(+event.key)) {
      setOutput8(output8 + '1')
    } else {
      setOutput8(output8 + '0')
    } 
  }

  function task9() {
    setOutput9(textInput9.current.value)
  }

  
  let ar10 = [5, 6, 7];
  function task10() {
    ar10.push(+textInput10.current.value);
    console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3}/>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" onChange={task5} />
        <div className="out-5"></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={textInput6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6" ref={textOut6}>{output6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={colorOut}></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8} ref={textInput8}></input>
        <div className="out-8">{output8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ref={textInput9}></input>
        <div className="out-9">{output9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={textInput10}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;
