var person={
    name:"vinod",
    phone:123456 ,
   de:function (){
     return(this.name+" "+this.phone);
   }
}


   da=Object.create(person);
   console.log(da.de());
