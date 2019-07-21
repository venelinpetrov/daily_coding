/**
 * This problem was asked by Google.
 * The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.
 * Hint: The basic equation of a circle is x2 + y2 = r2.
 */

function estimatePi(numPoints) {
    let numPointsInsideCircle = 0;
    
    for (let i = 0; i < numPoints; i++) {
        const [x, y] =[ randInRange(-1, 1), randInRange(-1, 1)];

        if (x**2 + y**2 < 1) {
            numPointsInsideCircle++;
        }
    }

    return 4 * numPointsInsideCircle / numPoints;
}

function randInRange(min, max) {
    return Math.random() * (max - min) + min;
}
// TODO: 3-digits precision. This method converges very slowly and 
// can't get eny more precise than that...
console.log('pi', estimatePi(10000));