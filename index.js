const NUM_SAMPLES = process.argv[2] || 1000;
console.log("Computing PI with " + NUM_SAMPLES + " samples.");

function randomPointInUnitSquare() {
  return [Math.random(), Math.random()];
}

function pointIsInUnitCircle(x, y) {
  return x * x + y * y <= 1;
}

var isInUnitCircleCount = 0;
for (var i = 0; i < NUM_SAMPLES; ++i) {
  var [x, y] = randomPointInUnitSquare();
  if (pointIsInUnitCircle(x, y)) {
    isInUnitCircleCount += 1;
  }
}

var piEstimate = 4 * isInUnitCircleCount / NUM_SAMPLES;
console.log("Math.PI: " + Math.PI);
console.log("Estimate: " + piEstimate);
console.log("Diff: " + Math.abs(Math.PI - piEstimate));
