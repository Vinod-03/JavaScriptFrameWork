var person={
    name:"vinod",
    phone:123456 ,
   de: function set(){
    console.log(this.name+" "+this.phone);
   }
}


   da=Object.create(person);
   console.log(da.set());