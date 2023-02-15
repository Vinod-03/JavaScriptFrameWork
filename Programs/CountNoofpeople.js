input=[{fname:"abc",address:"India"},
{fname:"def",address:"europe"},
{fname:"rst",address:"India"},
{fname:"xyz",address:"europe"},
{fname:"001",address:"Russia"},
]


let count=0

     for (let i=0;i<input.length;i++) {

          if(input[i].address=="India")
          {
            count++;
          }

            
        }
     

        console.log("the no people leving in india is " +count);