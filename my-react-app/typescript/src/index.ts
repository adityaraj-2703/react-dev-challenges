let num:number = 1;
// num = "1"  ****it will show error
//explicit type annotation
let str:string = "1";
let bool:boolean = true;
let u:undefined = undefined;
let n:null = null;

//array
let letnumArray:number[] = [1,2,3,4,5];

//object


//anonymous,inline
let person: {name:string,age:number} = {
    name: "alice",
    age: 18,

}
//union type
type Age = string | number;

//literal type
type Direction = "north" | "south" | "east" | "west"

//type alias
type Person = {name:string,age:Age,direction:Direction};

type AnimalName = string;

 

let person2:Person = {
    name: "adi",
    age: 18,
    direction:"north"
}


//interface
interface IPerson {
    name:string;
    age:number;
    
}


enum EDirection{
    North = "north",
    South = "south",
    East = "east",
    West = "west"
}

let direction: EDirection = EDirection.North;
console.log(direction);

function add(x:number,y:number):number{ // any-disabling typescript

    return x+y;
}

//unknown
function foo(data:unknown){
    if(typeof data === "number"){
        data.toFixed(2);
    }
    else if(typeof data === "function"){
        return data();
    }
    // else{
    //     data.forEach(()=>{})
    // }
    
}

//void : no return value



type AddFn = (x:number,y:number) => number
const add2:AddFn = (x,y)=>x+y

const add3: typeof add2 = (x,y)=>x+y;


interface IPerson{
    contact:'12344444'
}

const person3:IPerson = {
    name:"asd",
    age:12,
    contact:"12344444"
}

type Student = Person & {
    studentid:number,

}

interface IStudent extends IPerson{
    studentId:number
}


/*
type
for primitive
no declaration merging
&

interface
for objects
declaration merging
extends
*/


//generic type
function toNumberArray(x:number,y:number):number[]{
    return [x,y];
}
function toStringArray(x:string,y:string):string[]{
    return [x,y];
}

function toArray<T>(x:T,y:T):T[]{
    return [x,y]
}

toArray<number>(2,3);
toArray(true,false)


//tuple :an array with defined length and typeof elements

let arr:[number,string,boolean] =[1,"aa",true];

arr[1]


console.log("hello");