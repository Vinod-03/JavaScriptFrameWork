

var arr=[3,4,5,6,2,6,2]

     for(var i=0;i<arr.length;i++)
     {
          var count=1;
          for(var j=i+1;j<arr.length;j++)
          {
              if(arr[i]==arr[j])
              {

                    if(j<i)
                    {
                        break
                    }
                     count++;
              }

          }
          if(count=>1)
          console.log(arr[i]+" "+count)
     }
