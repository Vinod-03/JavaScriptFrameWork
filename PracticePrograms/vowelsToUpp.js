

str="good morning welcome to javascript session"
  words= str.split("")

let vowels=['a','e','i','o','u']

     
     st=""
     for (let i = 0; i < words.length; i++) {
    
         word=words[i]
  
             if(vowels.includes(word))
             {
                       char=word.toUpperCase();
                          word=char+words[i].slice(i)

             }

         st=st+word;
     }

    console.log(st);