//var fish = ["tuna", "cod", "shark", "swordfish", "salmon", "goldfish", "koi", "trout", "catfish", "sturgeon"];

//show what is in array
//function loopThroughArr(){
//    for(var i = 0; i < fish.length; i++){
//        console.log(fish[i])
//    }
//};
//
//loopThroughArr();

var fish1 = {name:"tuna", color:"silver", size:"large", fresh:false}
var fish2 = {name:"cod", color:"silver", size:"large", fresh:false}
var fish3 = {name:"shark", color:"silver", size:"extra-large", fresh:false}
var fish4 = {name:"swordfish", color:"blue", size:"large", fresh:false}
var fish5 = {name:"salmon", color:"red", size:"medium", fresh:true}
var fish6 = {name:"goldfish", color:"gold", size:"small", fresh:true}
var fish7 = {name:"koi", color:"multi", size:"medium", fresh:true}
var fish8 = {name:"trout", color:"green", size:"medium", fresh:true}
var fish9 = {name:"catfish", color:"brown", size:"medium", fresh:true}
var fish10 = {name:"sturgeon", color:"brown", size:"large", fresh:true}

//show just the names of the fish
//function loopThroughArr(){
//    for(var i = 0; i < fish.length; i++){
//        console.log(fish[i].name)
//    }
//};

// show only the fish that are freshwater

//var fish = [fish1, fish2, fish3, fish4, fish5, fish6, fish7, fish8, fish9, fish10];
//
//function loopThroughArr() {
//
//    var freshwater = [];
//
//    for(var i = 0; i < fish.length; i++){
//        if(fish[i].fresh === true){
//            freshwater.push(fish[i].name);
//        }
//    }
//
//    console.log(freshwater);
//    return freshwater;
//};
//
//loopThroughArr();

//javascript constructor function:
function Fish(name, color, fresh, img) {
   this.name = name;
   this.color = color;
   this.fresh;
   this.img = img;
};

// all "fish" now have access to a getInfo method
Fish.prototype.getInfo = function() {
//   console.log(this.name);
}

var fishy = new Fish("minnow", "silver", false, "https://s-media-cache-ak0.pinimg.com/736x/81/01/7a/81017a5dc4054e3565630a5c1cae3134.jpg");
var fishy2 = new Fish("mackerel", "orange", false, "https://s-media-cache-ak0.pinimg.com/736x/24/05/9b/24059b1a75adfd91b0ae976edd587443.jpg");
var fishy3 = new Fish("pacific sailfish", "brown", true, "https://s-media-cache-ak0.pinimg.com/564x/87/03/34/8703349b793ded9677568e326b2cd468.jpg");
var fishy4 = new Fish("angelfish", "yellow", false, "http://alimentation-generale.fr/alim/wp-content/uploads/2014/06/ryo-takemasa-fish-01.jpg");

var allFish = [fishy, fishy2, fishy3, fishy4];

console.log(allFish);

fishy.getInfo();


var practiceView = new Vue({
  'el': '#header',
  'data': {
    message: "So Many Fish",
  }
});

var fishVue = new Vue({
  'el': '#fish',
  'data': {
    //fish: allFish[0],
    allFish: allFish,
  }
})


////// practice with dogs //////

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
};

Dog.prototype.bark = function() {
  return this.name;
};

var doggy = new Dog("Kota", "Golden Retriever");
var doggy2 = new Dog("Porter", "Portugese Water Dog");
var doggy3 = new Dog("Hazel", "Brittany Spaniel");

console.log(doggy.bark());
doggy2.bark(); //without the console log the computer will run it
