input =["javaScript","selenium","api","cypress"]


      for (let i = 0; i < input.length; i++) 
      {
          
        
              console.log(input[i].charAt[3]);
              
 
        
      }

         

      let vowels=[a,e,i,o,u,A,E,I,O,u]


   str="good morning welcome to javascript session"
   st=str.split(" ")
   
    
      for (let i = 0; i<st.length; i++) 
      {
          
             if(!vowels.includes(st[i]))
             {
                let count=0
                for (let j =i+1 ; j<st.length; j++) 
                 {
                     if(st[i]==st[j])
                     {
                       count++
                     }

                 }

                 if(count>=1)
                 console.log(st[i]+" "+count);
             }
                
           
             
      }
      
     