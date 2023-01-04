function gcd_euclid(a, b){
    if(b == 0){
        return a;
    }
    
        var rem = a%b;
        return gcd(b, rem);
    
}
console.log(gcd_euclid(42,0));

// TC = 