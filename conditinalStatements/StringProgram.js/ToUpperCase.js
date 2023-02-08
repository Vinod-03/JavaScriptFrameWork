let s="testYanta"

        
   var str1=""
        for(let i=0;i<s.length;i++)
        {
             if(s[i]=='t')
             {
                    str1=str1+s[i].toUpperCase()
             }
             else
             {

                str1=str1+s[i].toLowerCase()
             }

        }

        console.log(str1)