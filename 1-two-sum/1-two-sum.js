/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numap = new Map()
  
  // for (let i = 0; i < nums.length; i++) {
  //   numap.set(nums[i], i)
  // }
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (numap.has(complement)) {
      return [numap.get(complement), i]
    }
    numap.set(nums[i], i)
  }
  return null
  
};

/*
const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1
*/