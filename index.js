const example01 = createCorrelation([228, 350, 37, 183, 142, 89, 18]); // An object was created simulating the first example at the readme

const indexOfExample01 = example01.calculateIndex(); // It will return a number

console.log('Example 01 correlation index per area: ' + indexOfExample01);

// ---------------------------------------------------------------------------------------------------------------- //

const example02 = createCorrelation([100, 150, 200, 250, 300, 350, 400]); // An object was created simulating the second example at the readme

const indexOfExample02 = example02.calculateIndex();

console.log('Example 02 correlation index per area: ' + indexOfExample02);

// ---------------------------------------------------------------------------------------------------------------- //

function createCorrelation (y) {
    return {
        y,
        calculateIndex: () => {
            const subtractedRectangles = [];
            for (let index = 0; index < y.length - 1; index++) {
                subtractedRectangles.push(y[index + 1] - y[index]);
            }

            let t = 0, n = 0, absElements = [], sumOfSubtractedRectangles = 0; 
            for (let element of subtractedRectangles) {
                sumOfSubtractedRectangles += element;
                absElements.push(Math.abs(element));
            }

            t = Math.max(...absElements);
            n = subtractedRectangles.length;

            return (sumOfSubtractedRectangles/(t*n));
        },
    }
}