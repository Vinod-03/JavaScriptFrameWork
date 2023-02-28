str1="good morning welcome to javascript session"
 str= str1.split('')
   st=""
   let arr
       
  
       for (let i = 0; i < str.length; i++) {
        
               if(str[i]=='a'  || str[i]=='e'  || str[i]=='i' || str[i]=='o' || str[i]=='u')
               {
                st=st+str[i]
                arr=st.split('')
               } 
             
        
       }
    
            console.log(arr);