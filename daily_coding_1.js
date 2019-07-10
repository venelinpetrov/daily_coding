/**
 * This problem was recently asked by Google.
 *
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 *
 * Bonus: Can you do this in one pass?
 */

const arr = [10, 15, 3, 7];
const k = 17;

function f(arr, k) {
    const s = new Set();
    return arr.reduce((_, item) => {
        const diff = k - item;

        if (s.has(item))
            return [item, diff];
        else
            s.add(diff);
    }, []);
}

console.log(f(arr, k));