/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  let carry = 0;
  while (b != 0) {
	  carry = a & b;
		a ^= b;
		b = carry << 1;
	}
	
	return a;
};

/*
  carry = 010 = 2
      a = 001 = 1
      b = 100 = 4
  carry = 000 = 0
      a = 101 = 5
      b = 000 = 0 -> return a = 5
  */