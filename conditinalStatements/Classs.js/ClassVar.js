class Banking
{
    static Bankname="indian"
    
    bankBranch="jp nagar"

    constructor(name,phoneno)
    {
       this.name=name
       this.phoneno=phoneno


    }

     
    demononstatic()
    {
          let a=50;

       console.log("non  static method");
        console.log(this.bankBranch); //  class instance variable can be accessed using this

      
    }

   static demo()
    {
      return this.Bankname;    //  static vaiable of the class can  be accessed using this


    }


     


}

date=new Banking("vinod",920679875);
console.log(date.bankBranch);      //   non static  data can  be accessed using refrence variable
console.log(Banking.Bankname);     // static data can be accessed using class name

console.log(date.Bankname); //  static data can not be accessed using reference variablr
console.log(Banking.bankBranch);// non static data members can not be accessed using class name 


console.log(date.name);      // non static data members can be accessed  using refernce variable
console.log(date.phoneno);


console.log(Banking.demo()); // using class name and static method static variable CAN BE accessed

// console.log(date.demononstatic()); //      by using non static method we can access class instance variable  
   