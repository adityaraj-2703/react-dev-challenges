var createCounter = function(init) {
        var curr = init;
        function increment(){
            return curr+1;
        }
        function decrement(){
            return curr-1;
        }
        function reset(){
            curr = init;
            return curr; 
        }
        return {increment, decrement, reset};
    
};
const counter = createCounter(5)
console.log( counter.increment()); // 6
 counter.reset(); // 5
 counter.decrement(); // 4