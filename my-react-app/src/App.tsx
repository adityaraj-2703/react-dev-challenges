
import { useContext, useState } from 'react'
import './App.css'
import EventDemo from './components/EventDemo.jsx';
import Counter from './components/counter/Counter.jsx'
import TodoList from './components/todolist/TodoList.jsx';

// import CarApp from './components/classComponents/CarApp/CarApp.jsx'

import ClassDemo from './components/classComponents/ClassDemo.jsx';
import CourseCatalogApp from './components/classComponents/Course/CourseCatalogApp.jsx'
import HookDemo from './components/HookDemo.jsx'

import GameBoard from './components/tictactoe/GameBoard.jsx'


import CarApp from './components/CarApp.jsx'
import ContextProvider from "./context/CounterContext.jsx"


import MyRoutes from './myRouter/MyRoutes.jsx'
import MyRoute from './myRouter/MyRoute.jsx'
import MyLink from  './myRouter/MyLink.jsx';
import PlayGround from './components/tutorial/PlayGround.jsx';

function App() {
  const handleClick = () =>{
        console.log("child button is clicked"  )
  }
  const [count, setCount] = useState(0)

  const [show,setShow] = useState(true);

  const counterContext = useContext(ContextProvider);
  console.log("Context",counterContext)

  return (

    //1
    // <EventDemo onClickButton={handleClick}/>
    // <Counter/>
    <>

    {/* //2 */}
    {/* <TodoList/>
    <button id="toggleButton" onClick={() =>{setShow(!show)}}>ToggleShow</button>
    {show && <ClassDemo name={"aditya"} age={18}/>} */}

      

    {/* // 3 */}
    {/* <CarApp/> */}

      

    {/* <CourseCatalogApp/>
    //4
    <button id="toggleButton" onClick={() =>{setShow(!show)}}>ToggleShow</button>
    {show && <HookDemo/>} */}

      
    {/* // 5 */}
    {/* <GameBoard/> */}
    <nav>
      <MyLink to="/todolist">ToDoList</MyLink>
      <br/>
      <MyLink to="/car">Car App</MyLink>
      <br/>
      <MyLink to="/counter">Counter</MyLink>
      <br/>
      <MyLink to="/playground">PlayGround</MyLink>
    </nav>
    <MyRoutes>
      <MyRoute path="/todolist" element= {<TodoList/>}/>
      <MyRoute path="/car" element= {<CarApp/>}/>
      <MyRoute path="/counter" element= {<Counter/>}/>
      <MyRoute path="/playground" element= {<PlayGround/>}/>
    </MyRoutes>
      
    </>
  );
}
console.log(<ClassDemo/>);
console.log(ClassDemo);

export default App;
