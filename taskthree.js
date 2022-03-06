var numbers = [2,3,5,0,-7,0,8,10];
var arr = [];
var sum = 0;


function zeroEnd (numbers) {
   for (var num of numbers) {
      if (num > 0 ) {
         arr.push(num);
      }
   }

   for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
   }

   return sum;

}

console.log(zeroEnd(numbers));