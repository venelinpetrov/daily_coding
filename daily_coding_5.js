/**
 * This problem was asked by Jane Street
 *
 * cons(a, b) constructs a pair, and car(pair) and cdr(pair) return
 * the first and last element of that pair. For example car(cons(3,4))
 * returns 3, and cdr(cons(3, 4)) return 4.
 *
 * Given this implementation of cons:
 *
 * def cons(a, b):
 *      def pair(f):
 *          return f(a, b)
 *      return pair
 *
 * Implement car and cdr
 */

function cons(a, b) {
    return function pair(f) {
        return f(a, b);
    }
}

function car(pair) {
    return pair(x => x);
}

function cdr(pair) {
    return pair((_, y) => y);
}
console.log(
    car(cons(3, 4)),
    cdr(cons(3, 4))
)