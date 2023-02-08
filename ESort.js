arr=[9,3,2,1,5]

     

for(let i=0;i<arr.length;i++)
   {
      for(let j=i+1;j<arr.length;j++)
      {
        let tem=0;
         if(arr[i]>arr[j])
          {
            tem=arr[i];
            arr[i]=arr[j];
            arr[j]=tem;
           }
       }
     console.log(arr[i])
  }
  console.log(arr);
  