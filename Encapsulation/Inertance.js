class Animal
{


      sound(){
        console.log("superclass");

      } 

}

class dog extends Animal
{


  sound()
  {
    return("bow bow");
  }

}
 
  data=new dog();

  console.log(data.sound());