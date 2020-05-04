export function randomInt(n,m){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*navigator+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(m-n+1)+n,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
}


export function randomFullClose(n,m) {  //[n,m]
    var result = Math.random()*(m+1-n)+n;
    while(result>m) {
        result = Math.random()*(m+1-n)+n;
    }
    return result;
}
export function randomFullOpen(n,m) { // (n,m)
    var result = Math.random()*(m-n)+n;
    while(result == n) {
        result = Math.random()*(m-n)+n;
    }
    return result;
}
export function randomLeftOpen(n,m) { // (n,m]
    var result = Math.random()*(m-n+1)+n-1;
    while(result<n) {
        result = Math.random()*(m-n+1)+n-1;
    }
    return result;
}

export default { randomInt, randomFullClose, randomFullOpen, randomLeftOpen}