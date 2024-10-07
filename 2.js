function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoint = 12;

    // if speed is less than or equal to the speed limit
    if (speed >= speedLimit) {
        console.log("OK");
    }
    //calculate demerit points and excessspeed
    let excessSpeed = speed - speedLimit;
    let demeritPoints = excessSpeed / kmPerDemeritPoint;
    //if the excess speed is not excatly divisible by 5, floor the points
    if (excessSpeed % kmPerDemeritPoint !== 0) {
        demeritPoints = Math.floor(demeritPoints);
    }
    //print out the total demerits points.
    console.log("points:", demeritPoints);
    //if the demerits points are exceeded by 12, suspend the license
    if (demeritPoints > maxDemeritPoint) {
        console.log("License suspended");
    }
}
let speed = "89";
speedDetector(speed);