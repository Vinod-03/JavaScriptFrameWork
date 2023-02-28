
let arr=[2,4,5,6,7]
 
//break
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]==5)
//         break;
//         console.log(arr[i]);  // 2 , 4
// }



for(let i=0;i<arr.length;i++)
{
    if(arr[i]==5)
        continue;
        console.log(arr[i]);  // 2 , 4,6,7
}