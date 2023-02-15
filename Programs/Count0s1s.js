arr =[0,1,0,0,1,1,1]
let count0=0

let count1=0


     for(let i=0;i<arr.length;i++)
     {
          if(arr[i]==0)
          {
           count0++;

          }
          else
          {
            count1++;
          }
     }

     console.log("the no of 0's are " +count0);

     console.log("the no of 1's are " +count1);