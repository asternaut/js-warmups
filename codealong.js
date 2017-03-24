//looping from 60-100 by twos
function loopByTwos() {
  for (var i = 60; i <= 100; i += 2) {
    console.log(i);
  }
};

// run it -> loopByTwos ();



function getTotal(a, b){
  // var a = 1;
  // var b = "sienna";

  if(b.constructor === Number && a.constructor === Number){ // I'm telling it to check if both a and b are numbers through the .constructor
    console.log(a + b);
    return(a + b);
  }
  // else{
  console.log("these are not numbers");
  // }
};

getTotal(20, 2);

//object literal
var fruit1 = {
  name: "guava",
  properties: "vitamin C",
  goodFor: "eyesight strengthener",
  //methods for the above objects
  talkAboutFruit: function() {
    return "this fruit is " + this.name + ", full of " + this.properties + ", and is a great " + this.goodFor; //"this" referst to "fruit1"
  }
};
console.log( fruit1.talkAboutFruit() );


var fruit2 = {
  name: "monkfruit",
  properties: "mogrosides",
  goodFor: "alternative sweetener",
  talkAboutFruit: function() {
    return "this fruit is " + this.name + ", full of " + this.properties + ", and is a great " + this.goodFor;
  }
};
console.log( fruit2.talkAboutFruit() );

var fruit3 = {
  name: "cherry",
  properties: "antioxidants",
  goodFor: "inflamation reducer",
  talkAboutFruit: function() {
    return "this fruit is " + this.name + ", full of " + this.properties + ", and is a great " + this.goodFor;
  }
};
console.log( fruit3.talkAboutFruit() );
