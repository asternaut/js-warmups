var nums = [21, 65, 65468, 235, 26458, 68972, 48798, 21, 544, 68, 78];

// function loopThroughArr(arr){
//   for (var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//   }
// };
//
// loopThroughArr(nums);




function loopThroughArr(){
  var greatest = 0;
  for (var i = 0; i < nums.length; i++){
    if(nums[i] > greatest) {
      greatest = nums[i];
    }
  }
  console.log(greatest);
  return greatest;
};

loopThroughArr();
