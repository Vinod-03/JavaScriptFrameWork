class student
{
   #marks=80;

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


  