var arr=[1,2,5,4,1,4,4]
     
     
for (var index = 0; index < arr.length; index++) {
    var count=0;
    for (var j = 0; j < arr.length; j++)
     {
        
        
        if(arr[index]==arr[j])
        {
            if(j<index)
            {
                break;
            }
           count++;
        }
    }
      if(count>1)
      console.log(arr[index]+" "+count)
    }
      
   