

st="  i am an employee of TestYantra     "

let rst

    str= st.split(" ")
  
     let sen=""

    for(let i=0;i<str.length;i++)
    {
           var rev=""
            ch= str[i].split("")
            for(let j=0;j<ch.length;j++)
              {

                         rev=ch[j]+rev
                        
              }

              sen=sen+" "+rev;
}
     

  console.log(sen);