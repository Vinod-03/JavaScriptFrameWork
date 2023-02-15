
  let str=`vinod,suresh,gothum,nithish`
  let st="java"

  console.log(`${str},${st}`);// vinod,suresh,gothum,nithish,java

   s=  str.split(",")

   console.log(s[0]);// vinod
function bank(name,phoneno,email,add)
{
    console.log(`name is ${name}, the phone is ${phoneno}, ${email} ${add}`);// name is vinod, the phone is 987456321, @Test undefined


}


bank("vinod",987456321,"@Test")  
