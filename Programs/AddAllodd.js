//  program to add all the odd numbers in an array


 arr=[33,55,66,55,11,77,88]
  let  sum=0

 for(let i=0;i<arr.length;i++)
 {
     if(arr[i]%2!==0)
     {
         
        sum=sum+arr[i]
     }

 }

 console.log(sum); //231