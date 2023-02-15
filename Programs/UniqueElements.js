//program  to  find uniqe elements from array


   arr=[2,3,2,5,5,6,8]


     for(let i=0;i<arr.length;i++)
     {

        for(let j=i+1;j<arr.length;j++)
        {
          if(arr[i]==arr[j])
          {
              arr.splice(j,1)
              
          }

          
        }


     }
     console.log(arr);

     