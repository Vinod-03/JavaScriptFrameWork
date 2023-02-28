
"use strict"
class  bank{

      name1;
      #phoneno=147526;
      email;
    

     get redDisplayname()
     {
       return this.name;
      
     }

     get redDisplayphone()
     {
       return this.#phoneno;
      
     }
     set phonenoSet(value)
     {
        this.#phoneno=value;
       
     }
   
  }



    let date=new bank()
    console.log(date.redDisplayphone);
     date.phonenoSet=1234
    console.log(date.redDisplayphone);

    



