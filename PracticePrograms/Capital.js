
str="good morning welcome to javascript session"
let words = str.split(' ');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
let a=""
  for (let i = 0; i < words.length; i++) {
    
       let  word=words[i]

       if(vowels.includes(word[2]))
        
       {
        const firstChar = word[0].toUpperCase();
        words[i] = firstChar + word.substring(1);
      
       }
     a=words.join(' ');
    }
  

  console.log(a);



