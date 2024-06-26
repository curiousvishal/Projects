
//Function Declaration
function square(num){
    return num*num
}

//Function Expression
const squareE = function (num){
    return num*num
}

//Arrow Function
const squareA = (num)=>{
return num*num
}

// Implicit Return
const squareI = (num)=> num*num

const random = () =>  Math.random() ;
console.log(random);

//anonymous and arrow
setTimeout(()=>{
    console.log("hello guys");
})