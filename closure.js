function stopWatch(){
    return function(){
        count++;
        return count;
    }
}

const clock1 = stopWatch;
console.log(clock1);

const clock2 = stopWatch(11);
console.log(clock2);
console.log(clock2);
console.log(clock2);
console.log(clock2);