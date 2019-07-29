/**
 * You run an e-commerce website and want to record the last N order ids in a log.
 * Implement a data structure to accomplish this, with the following API:
 * push(order_id): adds the order_id to the log
 * pop(i): gets the ith last element from the log.
 * i is guaranteed to be smaller than or equal to N.
 *
 * You should be as efficient with time and space as possible.
 */
class RingBuffer {
    constructor(size) {
        this.head = 0;
        this.tail = 0;
        this.arr = [];
        this.size = size;
    }
    push(val) {

        this.tail = (this.tail + 1) % this.size;
        if (this.tail == this.head) {
            this.head = (this.head + 1) % this.size;
        }
        this.arr[this.tail] = val;
    }
    pop() {
        if (!this.isEmpty()) {
            const el = this.arr[this.head]
            this.head = (this.head + 1) % this.size;
            return el;
        }
        throw new Error('Buffer is empty');

    }
    isEmpty() {
        return this.head == this.tail;
    }
}
const n = 5;
const q = new RingBuffer(n);

for (let i = 0; i < n + 2; i++) {
    q.push(i);
}
console.log(q.pop());