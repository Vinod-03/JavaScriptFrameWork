input=[{fname:"abc",address:"India"},
{fname:"def",address:"europe"},
{fname:"rst",address:"India"},
{fname:"xyz",address:"europe"},
{fname:"001",address:"Russia"},
]

     for (let i=0;i<input.length;i++) {
       
        let count=0
        for (let j=0;j<input.length;j++)
        {

          if(input[i].address==input[j].address)
          {

            if(j<i)
            {
                break;
            }
            count++;
          }

        }
          if(count>=1)
          console.log("The country name is "+input[i].address+ " the count is  " +count); 
        }
     

        