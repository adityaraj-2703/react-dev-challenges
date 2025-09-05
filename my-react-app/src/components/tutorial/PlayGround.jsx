import React from 'react'
import  { User }  from './User';
import StateTuTorial from './StateTuTorial';
import TodoListTutorial from './TodoListTutorial';
import TextDisplay from './TextDisplay';
import FetchDataFromAPI from './FetchDataFromAPI';
import PredictAge from './PredictAge';
import { Form } from './Form';
import CustomHooks from './CustomHooks';
import CountUsingCustomHooks from './CountUsingCustomHooks';
import Accordion from './Accordion';

const PlayGround = () => {
    const users = [
        {name:"Aditya",age:"18"}, 
        {name:"Raj",age:"20"}, 
        {name:"Albert",age:"23"}, 
        {name:"Tiffany",age:"29"}, 
    ];
    // console.log("Hellio");
    // let a = "Aditya";
    // let b = a;
    // b = "Raj";
    // console.log(a, "a");
    // console.log(b, "b");
  return (
    <div>
        {/* {users.map((user,key)=>{
            return <User name={user.name} age={user.age}/>
        })} */}
        {/* <StateTuTorial/> */}
        {/* <TodoListTutorial/> */}
        {/* <TextDisplay/> */}
        {/* <FetchDataFromAPI/> */}
        {/* <PredictAge/> */}
        {/* <Form/> */}
        {/* <CustomHooks/> */}
        {/* <CountUsingCustomHooks/> */}
        <Accordion/>
    </div>
  )
};




export default PlayGround;