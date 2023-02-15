// program to find prime numbers present in an array



      arr=[2,3,4,5,6,7,8,9,11,113,13,55]

       
         for(let i=0;i<arr.length;i++)
         {
                    
                   if(isprime(arr[i])==true)
                   {
                    console.log(arr[i]);
                   }

         }



         function  isprime(i)
         {
            for(let j=2;j<i/2;j++)
            {
                if(i%j==0)
                {
                    return false;
                }
              return true;
            

            }



         }