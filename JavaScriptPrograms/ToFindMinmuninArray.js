var arr= [1,2,5,4,1,4,4];
		   
		   var small=arr[0];
		
		for(var i=0;i<arr.length;i++)
		{
			if(small>arr[i])
			{
				small=arr[i];
				
			}
				
		}
		
		console.log(small);	