

var a=10
console.log(a);  //  golbal storage

 let b=20
 console.log(b);  //  in script storage


 const c
 console.log(c);  // in script storage


 function add(e,f)
 {
   
  var a
  let b
  const c=a+b;
console.log(c); // var, let , const are locol stored inside the function 

 }

 add(5,10)



{
  var x=100
    console.log(x); //  stored in globaly 

    let y=200;
    console.log(y);   //  stored in block

    const z=300

    console.log(z);   //  stored in block



}