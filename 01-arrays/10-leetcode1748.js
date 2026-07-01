/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
   let obj = {};
   let sum = 0;

   for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) {
            obj[nums[i]] = obj[nums[i]] + 1;
        } else {
            obj[nums[i]] = 1
        }    
   }

    Object.entries(obj).map((pair) => {
        // Because Key is a String So Usko Number mm convert kra . 
        let key = Number(pair[0]);
        let value = pair[1];

        if(value === 1) {
            sum = sum + key;
        }
    });

    return sum;
};