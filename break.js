const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for( let i = 0; i < nums.length; i++){
    // console.log(i);
    if(nums[i]> 6){
        break;
    }
}
for( let i = 0; i < nums.length; i++){
    console.log(i);
    if(nums[i]< 0){
        continue;
    }
}
// console.log(part);