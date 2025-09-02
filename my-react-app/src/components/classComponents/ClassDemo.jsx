import React from 'react';

//CarApp

/*mock data
 * 
    make
    quantity
    id

    display Car Info in a card
    button, to sell a car
*/


class ClassDemo extends React.Component {
    // constructor(props) {
    //     super(props);
    //     console.log(props);
    //     this.state = {
    //         counter: 0,
    //     };
    //     //this.handleAdd = this.handleAdd.bind(this); 
    //     // this can be used, if  handleAdd = () => is not used, 
    //     // instead handleAdd() is used, 
    //     // so with arrow function it can work without this statement
    // }

    // shorthand way to initialize component state (alternative to constructor)
    state = {
        counter: 0,
        timer:0
    }

    handleAdd = () => {
        //console.log(this.setState)
        // this.setState({
        //     counter : this.state.counter + 1. // 0+1
        // });
        // this.setState({
        //     counter : this.state.counter + 1 // 0+1
        // });

        this.setState((prevState)=>{
            return {
                counter: prevState.counter + 1 // 0+1
            }
        })
        this.setState((prevState)=>{
            return {
                counter: prevState.counter + 1 // 1 + 1
            }
        })
    }

    render() {
        
        console.log("render")
        console.log(document);
        console.log(document.querySelector("#toggleButton"))
        console.log("root",document.querySelector("#root"))
        return <div>
            <h3>Class Counter Demo</h3>
            <p>Counter: {this.state.counter}</p>
            <button onClick={this.handleAdd}>Add 2 to Counter</button>
            <p>{this.state.timer}</p>
            <ChildComponent name = "alice"/>
        </div>;
    }

    componentDidMount(){
        console.log("componentDidMount");
        this.intervalId = setInterval(()=>{
            console.log("timer is running");
            this.setState({
                timer:this.state.timer + 1

            })
            
        },1000)
    }
    componentDidUpdate(prevProps,prevState,currState){
        console.log("componentDidUpdate");
        console.log(prevState);
        console.log(this.state);
        console.log(document.querySelector("#toggleButton"))
    }
    componentWillUnmount(){
        clearInterval(this.intervalId)
        console.log("componentWillUnmount");
        console.log(document.querySelector("#toggleButton"))
        
    }
}

export default ClassDemo;


// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     greeting(){
//         console.log("My name is ",this.name);
//     }
// }
// const p1 = new Person("aditya");
// p1.greeting()

// const hello = p1.greeting;
// console.log(hello);
// hello();


class ChildComponent extends React.Component{

    render(){
        console.log("child component render");
        return <div>
            {this.props.name}
        </div>
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.props.name == nextProps.name && this.state == nextState){
            return false;
        }
        return true;
    }
}