var person={
 
   CustomerDebitno:34556673,
   pinno:7889,
   fullname:function(){


    console.log("The first name is"+this.CustomerDebitno+ " the second name is "+this.pinno)

      

   }
   

}

var InternetLogin={
 
    CustomerDebitno:"c10101",
    pinno:100000,
    session:function(){
 
 
     console.log(" The interlogin id " +this.CustomerDebitno+ " the  password "+this.pinno);
 
    }
 
    
 }
function greetings(accountno,customerid){
    console.log(accountno+" "+ this.CustomerDebitno +" "+customerid+" "+this.pinno);
 }


  //person.fullname.call(InternetLogin)// function browing


        // var da=  greetings.bind(InternetLogin,"hello","hi")
        // da()

                greetings.apply(InternetLogin,["hello","hi"]) 
