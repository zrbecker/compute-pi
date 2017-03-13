# Computing PI with Math.random()

## Method
If I randomly generate a point uniformly in the unit square [0, 1] x [0, 1], the probability it lies within the unit circle (x^2 + y^2 <= 1), is PI / 4. Thus, if
I generate N points in the unit square, and K points lie in the unit circle we
expect K/N tends towards PI/4 as N tends towards infinity.

This fact is used in this nodejs program to estimate PI.

## Example Output
With 10,000,000 samples
```
$ node index.js 10000000
Computing PI with 10000000 samples.
Math.PI: 3.141592653589793
Estimate: 3.1412192
Diff: 0.0003734535897930158
```
With 100,000,000 samples
```
$ node index.js 100000000
Computing PI with 100000000 samples.
Math.PI: 3.141592653589793
Estimate: 3.1416868
Diff: 0.00009414641020688563
```