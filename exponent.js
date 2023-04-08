let exponent = function(a,n){

    if(n ===0){
        return 1
    }else{
        return a* exponent(a,n-1)

        // am not understanding why they multiply fwith n-1
    }
}

console.log(exponent(4,2));