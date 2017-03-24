//for loop that takes you from 0 to 33 by steps of 3
var i;
  for ( i = 0; i < 34; i = i + 3){
      console.log(i);
  };

/* sean's meathod:
function byThrees(num){
    for(i=0; i<=num; i++){
        if(i%3 == 0 && i > 0){ //this is dividing by three and making sure it is evenly divisible by 3
            console.log(i);
        }
    }
}
byThrees(33);
*/


// Make several object literals. Can be of anything you want (last week we did fruits for this challenge. Bonus: Give an object a method, that can tell you about itself
var stringUno = "Mas vale una verdad que duela, "
var stringDos = "que una mentira que ilusione."


//A function can take an array of numbers, and returns the sum (total) of all numbers in the Array. Bonus: Ignores values in the array if they are not of type Number. SUPER BONUS: The function will only accept an array. (Can not pass it a single number or string)
var nums = [2,4,87,6,21].reduce(
  function(total, numbers){ return total + numbers}
, 0);

console.log(nums);
