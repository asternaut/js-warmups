function assignGrade (number, letter){
  if (number > 90) {
    return "A";
  } else if (score >= 80 && number < 90) {
    return "B";
  } else if (score >= 70 && number < 80) {
    return "C";
  } else {
      return "fail :(";
    }
}

console.log("You got a(n) " + assignGrade(91));

//fizzbuzz
// if divisible by 3 print fizz
// divisible by 5 print buzz
// divisible by 3&5 print fizzbuzz

var checkTheseNums = [];
for(i=1; i<=20; i++){
    checkTheseNums.push(i);
};


  function fizzbuzz (checkTheseNums){
    for (var i= 0; i < checkTheseNums.length; i++){
    if (checkTheseNums[i]%3 == 0 && checkTheseNums[i]%5 == 0) {
      console.log( "fizzbuzz");
    } else if (checkTheseNums[i]%5 == 0){
      console.log("buzz");
    } else if (checkTheseNums[i]%3 == 0)  {
      console.log( "fizz");
    } else {
      console.log( i);
    }
  }
}

fizzbuzz(checkTheseNums);
