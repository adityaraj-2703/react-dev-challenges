import React from 'react';
import InfoCard from './InfoCard';

const mockCarData = [
    {
        make : "Toyoya",
        quantity: 10,
        id: 1,
        date: new Date()

    },
    {
        make : "Honda",
        quantity: 10,
        id: 2,

    },
    {
        make : "Kia",
        quantity: 10,
        id: 3,

    },

   
]

class CarApp extends React.Component {
    // constructor(props){
    //     super(props)
    //     //this.state
    // }
    state= {
        cars : [...mockCarData],
    }
    handleSell  = (id) => {
        const updatedCars = this.state.cars.map((car)=>{
            if(car.id===id){
                return {...car,quantity:car.quantity-1};
            }
            else{
                return car;
            }
        });

        this.setState({
            cars : updatedCars
        })



    }   
    render(){
        console.log(this.state.cars);
        console.log(JSON.parse(JSON.stringify(this.state.cars)))
        return (
            <>
                <h3>Car App</h3>
                <ul style={{
                    display : 'flex',
                    justifyContent : 'center',
                    gap : '20px'
                }}>
                    {this.state.cars.map((car)=><InfoCard key = {car.id} car = {car} handleSell = {this.handleSell} />)}
                </ul>
            </>
        )
    }
}

export default CarApp;