

function student(name,phone,weight,sub)
{
   this.name=name
   this.phone=phone
   this.weight=weight
   this.sub=sub

}


var s=new student("james ",95241141,60,sub=["java","javaSctript"])
 
for (const key in s) {
   console.log(s[key])
}

   console.log(s.sub[0])

    