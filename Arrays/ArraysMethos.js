let arr1=[1,2,4,6,8]
var arr2=[3,9,3,54,8]


//  console.log(arr1.concat(arr2));

//  console.log(arr1.fill(0,5));

//  console.log(arr1.reverse());

//  console.log(arr1.lastIndexOf());

//   console.log(arr1.sort());
// console.log(arr1.sort())


// console.log(arr2.shift());
// console.log(arr2);

// console.log(arr2.unshift(5));
// console.log(arr2);

// console.log(arr2.push(5));
// // console.log(arr2);
// console.log(arr1.toString());

// console.log(arr2.pop(5));
 
//console.log(arr1.slice(3));

//console.log((arr1.splice(1,3)));

 // console.log(arr1.lastIndexOf(10))
 
   function sum(total,value,){
    
      return (total+value )
      
   }
   console.log( arr1.reduce(sum));


   console.log(arr1.lastIndexOf());


  //  points.sort(function(a, b){return a - b});
    console.log(arr1.sort((a,b) =>(a-b)));


//     const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);
//   console.log(over18);

// function myFunction(value, index, array) {



//   return value > 18;



// }

       function greater1(value)
       {
         
          return value>5
       }

       console.log(arr1.filter(greater1));
     
       function myfunction(total,value)
       {
           return total+value
     } 
     
         console.log(arr1.reduce(myfunction));

       

