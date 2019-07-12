/**
 * This problem was asked by Stripe.
 *
 * Given an array of integers, find the first missing positive
 * integer in linear time and constant space. In other words,
 * find the lowest positive integer that does not exist in the
 * array. The array can contain duplicates and negative numbers
 * as well.
 *
 * For example [3, 4, -1, 1] should give 2. The input [1, 2, 0]
 * should give 3.
 *
 * You can modify the input in-place.
 */

function f(arr) {
    let filteredArr = arr.filter(elem => elem > 1);
    let t = [Number.MAX_VALUE, Number.MIN_VALUE];

    filteredArr.forEach(elem => {
        if (elem >= t[0] && elem < t[1]) {
            return;
        }
        if (elem - 1 < t[0] ) {
            t[0] = elem - 1;
        }
        if (elem + 1 > t[1]) {
            t[1] =  elem + 1
        }
    });

    if (!arr.includes(t[0])) {
        return t[0];
    }

    return t[1];
}

const arr = [5, 3, 4, 4, 1];
const arr2 = [2, 3, 0, 4, 1]

console.log(f(arr));
console.log(f(arr2));