import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import InfoCard from '../components/classComponents/CarApp/InfoCard.jsx'
import useMySelector from '../hooks/useMySelector.jsx';
import { SELL, sellCar } from '../actions/cars.actions.js';
import { fetchInitialCarData, sell } from '../slices/rtkCarSlice.js';


const CarApp = () => {
//   const cars = useSelector((state) => state.carReducer); // selector function without tookkit

  const {cars,loading} = useSelector((state) => state.cars); // selector function
  const dispatch = useDispatch();
  console.log(cars);

  // our custom redux hook
  // const cars = useMySelector((state) => state.cars);
  // console.log(cars);

  // const dispatch = useMyDispatch();
  //   useEffect(()=>{
  // store.subscribe(() => {
  //     console.log(store.getState());
  //   });
  //   } ,[])

  useEffect(()=>{
    dispatch(fetchInitialCarData());
  },[])

  return (
    <div>
      <h3>Car App</h3>
      {loading ? (
        <div> loading car data</div>
      ) :
      <ul style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {cars.map((car) => (
          <InfoCard
            key={car.id}
            car={car}
            handleSell={(id) => {
              console.log("handle sell callback");
            //   dispatch(sellCar(id));  //action creator for redux core
              dispatch(sell(id));  //action creator for redux core
            }}
          />
        ))}
      </ul>
      }
      
    </div>
  );
};

export default CarApp;