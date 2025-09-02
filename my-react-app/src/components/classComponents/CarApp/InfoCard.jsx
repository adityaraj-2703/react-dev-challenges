import React, { PureComponent } from 'react'


//purecomponent: implement default shouldComponentUpdate
// if you use React.PureComponent instead of React.Component, 
// you dont need to use shouldComponentUpdate, it is default
//stateless component : do not manage state internally, only receive props
class InfoCard extends React.Component{
    render(){
        const{make,quantity,id} = this.props.car;

        console.log(`${make} rendered`)
        return (
            <div style={{
                width: '150px',
                height : '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',

            }}>
                <div>{make}</div>
                <div>{quantity}</div>
                <button  onClick={() =>this.props.handleSell(id)}>Sell</button>
            </div>
        )
    }
    shouldComponentUpdate(nextProps){
        if(this.props.car === nextProps.car){
            return false;
        }
        return true;
    }
}
export default InfoCard;