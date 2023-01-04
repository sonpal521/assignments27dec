//"Calculate the time complexity of Euclid’s Algorithm by subtraction Euclid’s
//Algorithm is a method for calculating the greatest common divisor of two integers."


function gcd_euclid(a, b){
    if(b == 0){
        return a;
    }
    
        var rem = a%b;
        return gcd(b, rem);
    
}
console.log(gcd_euclid(42,0));

// TC = O(logmin(a,b))



