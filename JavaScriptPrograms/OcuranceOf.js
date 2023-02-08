
allOcurance("Testyantra");
function  allOcurance(str)
{
   
for(let i=0;i<str.length;i++)
    {
        var count=1;
      for(let j=i+1;j<str.length;j++)
      {
        if(str[i]==str[j])
        {
        if(j<i)
        {
            break;
        }
        count++;
    }
      }
      if(count=>1)
     {
     
       console.log(str[i]+" "+count);
  


        
     }
    }
  }    

   
