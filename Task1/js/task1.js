"use strict"
setTimeout(()=>{
    console.log("beş saniyə bitdi");
    
},5000)


for( let i=100; i>=0;i--){
    setTimeout(()=>{
        console.log(i);
    },1000)
   setTimeout(()=>{
       console.log("geri sayim bitdi");
   },2000)  
}


var number=Math.round(65.4345);
    console.log(number);


var number=Math.random();
console.log(number);


var dt=new Date();
console.log(dt.getFullYear(),dt.getMonth(),dt.getDate());


// const dt = new Date();
// console.log(dt.getHours(), dt.getMinutes(),dt.getSeconds());