/**
* This problem was asked by Uber.
*
* Given an array of integers, return a new array such that each element at index i of the
* new array is the product of all the numbers in the original array except the one at i.
*
* For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
* If our input was [3, 2, 1], the expected output would be [2, 3, 6].
*
* Follow-up: what if you can't use division?
*/

function f(arr) {
    const product = getArrProduct(arr);

    return arr.map(i => p(product, i));

    function p(product, i) {
        return product / i;
    }

    function getArrProduct(arr) {
        return arr.reduce((acc, curr) => acc * curr, 1);
    }
}

const arr = [1, 2, 3, 4, 5];
const arr2 = [3, 2, 1];

console.log(f(arr));
console.log(f(arr2));