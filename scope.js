let bonus = 20;


function sum(first, second){
    let result = first + second + bonus ;
    if(result >9){
        let mood = "happy";
        mood = "APM";
        mood = "Maksuda";
        mood = "cranky";
        console.log(mood);

    }
    console.log(result);
    return result;
}

const output = sum(3, 24);
console.log(bonus);
console.log(output);