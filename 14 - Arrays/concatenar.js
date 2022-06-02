// Concat - concatenação de arrays
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];


// Método com concat
const nums = nums1.concat(nums2, 'Something');
console.log(nums) // [ 1, 2, 3, 4, 5, 6, 'Something' ]

// Método sem concat (Destructuring com spread operator (...))
const numberArray = [...nums1, ...nums2, 'Something'];
console.log( numberArray )
