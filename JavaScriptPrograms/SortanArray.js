var arr= [1,2,5,4,1,4,4];
		
		   
		   for(var i=0;i<arr.length;i++)
		   {
			   
			   for(var j=i+1;j<arr.length;j++)
			   {
				   var tem=0;
				   if(arr[i]<arr[j])
				   {
					   tem = arr[i];  
					   arr[i] = arr[j];  
					   arr[j] = tem;  
					   
					   
				   }
			   }
			   console.log(arr[i]);
           }
           