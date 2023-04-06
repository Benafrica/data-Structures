// function for FUctorial nmber

function ben(b){
    
    if(b===0){
        return 1;
    }

        return b*factorial(b-1)

}

console.log(ben(6))