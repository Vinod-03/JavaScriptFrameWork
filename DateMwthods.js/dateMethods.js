let date=new Date()

  console.log(date.getDate()); // returns date 
  console.log(date.getDay());   // returns day from 0-7
  console.log(date.getFullYear());// returns year 
  console.log(date.getHours());// returns hours in 24 hours format
  console.log(date.getMilliseconds());// returns milli seconds
  console.log(date.getMinutes()); // returns minutes
  console.log(date.getSeconds()); // returns seconds
console.log(date.getTimezoneOffset());


console.log(date.getDate());
day=date.getDay();// to make date as a string
    today_date=date.toDateString().split(" ")
    console.log(today_date);
