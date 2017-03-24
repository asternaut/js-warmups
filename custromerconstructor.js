var goldCustomers = ["Eric Sal", "Sarah Sizzle", "Steve Supl"];
var silverCustomers = ["Paul Rudd", "Sally Struthers", "Susan Sarandon"];
var platinumCustomers = ["Woug Dalter", "Myler Taxwell", "Sienna Scheid", "Tenn Jurner", "Mody Celton", "Datie Kahlin", "Cean Sorbett"];

function Customer(first, last, tier) {
  this.first = first;
  this.last = last;
  this.tier = tier;
};

var newCustArr = [];
function buildCustomers(arr, tier) {
  for(var i = 0; i < arr.length; i++){
    var cust = arr[i].split(' ');
    newCustArr.push(new Customer (cust[0], cust[1], tier));
  };
//return newCustArr;
}

buildCustomers (goldCustomers, "gold");
buildCustomers (silverCustomers, "silver");
buildCustomers (platinumCustomers, "platinum");

console.log("All customers: ",newCustArr); // logs all customers, regardless of array
console.log(buildCustomers(goldCustomers));

// var parsCustomers = goldCustomers[0].split(" "); // this splits the above array names into two different first/last objects
//
// var first = parsCustomers[0];
// var last = parsCustomers[1];
//
// console.log(parsCustomers);
