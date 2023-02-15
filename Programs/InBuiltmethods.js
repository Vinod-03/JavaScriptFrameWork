st="  i am an employee of TestYantra     "


  str=st.split("");// To remove space
console.log(str);
       //console.log(st.replaceAll(" ",""));
  var arr
  
     
       for (let i = 0; i < str.length; i++) {
       
             if(str[i]!=" ")
            {
                arr=arr+str[i]
            }
           
       }


       console.log(arr);

