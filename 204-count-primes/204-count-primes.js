/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const primes = new Array(n).fill(true)
    let primeCount = 0
    
    for (let i = 2; i * i < primes.length; i++) {
      if (!primes[i]) continue
      else {
        for (let j = i; j * i < primes.length; j++) {
          primes[i * j] = false
        }
      }
    }
  
  for (let i = 2; i < primes.length; i++) {
    if (primes[i] === true) {
      primeCount++
    }
  }
  
  return primeCount
};