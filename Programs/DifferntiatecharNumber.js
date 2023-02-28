const { number } = require("yargs");



   let str="AxB1#*eZ8"
    let uppercase="";
    let lowercase="";
    let num="";
    let spec=""
   for (let i = 0; i < str.length; i++) {
   
        if(str[i]>='A' && str[i]<='Z') 
        {
             uppercase=uppercase+str[i];
        }
        else if (str[i]>='a' && str[i]<='z') {
          
          lowercase=lowercase+str[i]
        } else if (str[i]>=0 && str[i]<=9) {
          
          num=num+str[i]
        } else {
          spec=spec+str[i]
        } 
       

   }
   console.log(uppercase);
   console.log(lowercase);
   console.log(num);
   console.log(spec);


 
   



   