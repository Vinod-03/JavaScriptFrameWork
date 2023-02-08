


let s="testYanta"
for( i=0;i<s.length;i++)
  {

    var count=1;
    if(!s[i]=='a' || s[i]=='e'|| s[i]=='o' ||s[i]=='u'|| s[i]=='i'){
        {

          for(let j=0;j<s.length;j++)
          {
             if(s[i]==s[j])
             {
                if(j<i)
                {
                    break
                }
                count++;
             }

          }
            

        }
   

 
    }
    if(count>1)
    console.log(s[i]+" "+count)
}
         