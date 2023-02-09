class student
{
   #marks=80;  //  private  access specifier can not be accessed outside class

   get markss()
   {

    return this.#marks;

   }
   
   set (value)
   {
       
      this.#marks=value;
       
   }


}

data=new student();

console.log(data.markss);

    data.set(100);
     
    console.log(data.markss);


  