//event loop 

console.log("start");
setTimeout(()=>{

    console.log("in progress");
},2000)
setTimeout(()=>{
    console.log("start on");
},1000)
setInterval(()=>{

    console.log("i am interval");
},1500)
console.log("end");


