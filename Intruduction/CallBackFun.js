

  function mul(dat1,date2)
  {

      multwo=  dat1*date2;
        return  multwo
  }

  function sum(dat1,date2)
  {

       stwo= dat1+date2;
        return stwo
  }

  function add(date1,date2,operation)
    {
        console.log("the entered data is "+date1+" "+date2)
        val=operation(date1,date2)
        return val
    }
          let em=new Object();
          em.enma="vishal"

          console.log(em.enma);



   data= add(5,5,sum)
console.log(data);