arr=[2,5,6,7,2,9]


//  console.log(arr.length);//6
//  //console.log(arr.push(9));//7 new array
//  //console.log(arr);
//  console.log(arr.pop()); //9  exisiting array
 console.log(arr.shift());// new array
//  console.log(arr);


//  console.log(arr.shift()); // element one is removed 1

// //   console.log(arr.toString()); //

//         console.log(arr.find((arr)=>{ return value=0}));

//         console.log(arr.filter((value)=>{return value>2}));

//         console.log(arr.reduce((value,sum)=>{return value+sum}));

//         console.log(arr.sort((a,b)=>{ return a-b}));

 //           console.log(arr.map((value)=>{ return value+'a'}));

    
          
//      console.log(arr.includes(5));


   
// for(let i=0;i<arr.length;i++)
// {

//     let count=0
//     for(let j=i+1;j<arr.length;j++)
//       {
//         if (arr[i]==arr[j]) 
//             {
               
//                 count++
//             }
            
//         }
        
        
//         if(count=1)
//         {
//         console.log(count);
//         }
    

   
//     }    



  str="testyantra"
//    a= str.split('')


//       b=a.reverse();
//       console.log(b.join(''));


  


   

        



      for(let i=0;i<st.length;i++)
          {
             if(vow.indexOf(st[i])==-1)
               {
                 let count=0;
             for(let j=0;j<st.length;j++)
              {
                 
                 if(st[i]==st[j])

                 {
                  if (j<i) 
                  {
                    break;
                    
                  }
                   count++
                 }
              }
              if(count>=1)
              {
                console.log(st[i]+" "+count)
              }
            }
         
     }

   

