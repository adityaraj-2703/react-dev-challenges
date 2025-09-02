import React from 'react'
import  { User }  from './User';
import StateTuTorial from './StateTuTorial';
import TodoListTutorial from './TodoListTutorial';
import TextDisplay from './TextDisplay';
import FetchDataFromAPI from './FetchDataFromAPI';
import PredictAge from './PredictAge';

const PlayGround = () => {
    const users = [
        {name:"Aditya",age:"18"}, 
        {name:"Raj",age:"20"}, 
        {name:"Albert",age:"23"}, 
        {name:"Tiffany",age:"29"}, 
    ];
  return (
    <div>
        {/* {users.map((user,key)=>{
            return <User name={user.name} age={user.age}/>
        })} */}
        {/* <StateTuTorial/> */}
        {/* <TodoListTutorial/> */}
        {/* <TextDisplay/> */}
        {/* <FetchDataFromAPI/> */}
        <PredictAge/>
    </div>
  )
};




export default PlayGround;