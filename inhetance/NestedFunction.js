
//  bind

// let   bank={

       


//     customerDetails(phone,address)
//           {

//             return(`${this.cid},${this.accnumber}`);

//            }  


// }

//   let cust1={
//          cid:123,
//          accnumber:"a123",
        
         


// }

//        a= bank.customerDetails.bind(cust1);
//        console.log(a);
       
       

        
//call 

// let   bank={



//     customerDetails(cid, accnumber)
//           {

//              return `${this.cid},${this.accnumber}`

//            }


// }

//   let cust1={
//          cid:123,
//          accnumber:"a123"
        

// }

//           console.log(bank.customerDetails.call(cust1));



//apply

 
let   bank={

       


    customerDetails(phone,address)
          {

            return(`${this.cid},${this.accnumber} ${phone},${address}`);

           }  


}

  let cust1={
         cid:123,
         accnumber:"a123",
        
         


}

     console.log(bank.customerDetails.apply(cust1,[987654321,"jp nagar"]));
      
       























    // function   Student(name) {

    //       console.log("student name is"+this.name);
           
    //           function classst()
    //           {
    //              console.log("class strength");
    //           }
               
    //           classst()
    // }
  

    //    Student("abc")


