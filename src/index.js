module.exports = function reverse (n) {
n = n + '';
return parseFloat(n.toString().split('').reverse().join(''));   
    
}
