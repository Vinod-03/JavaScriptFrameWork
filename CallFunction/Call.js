var person={
 
   fname:"vinod",
   lname:"kumar",
   fullname:function(){


    console.log("The first name is"+this.fname+ " the second name is "+this.lname)

      

   }
   

}

var person1={
 
    fname:"java",
    lname:"script",
    sesstion:function(){
 
 
     console.log("The first name is"+this.fname+ " the second name is "+this.lname);
 
    },
 s
    sesstion1:function(){
 
 
        console.log("The  second  first name is"+this.fname+ " the second name is "+this.lname);
    
       }
 }


  person.fullname.call(person1.sesstion1)
