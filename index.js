// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
    const hqLocation = 42;
    const distance= Math.abs(pickUpLocation - hqLocation);
    /*The Math.abs function is a built-in JavaScript function that returns the absolute value of a number.
     In the provided code, it is used to calculate the absolute difference between the pickUpLocation and the hqLocation (42).
      The absolute difference is then returned as the distance from the headquarters.*/
    return distance;
   
}


    function distanceFromHqInFeet(distance){

        return distanceFromHqInBlocks(distance )* 264

    }
   

    function distanceTravelledInFeet(pickUpLocation, hqLocation) {


        return Math.abs(pickUpLocation - hqLocation) * 264

    }
    console.log(distanceFromHqInBlocks(43)); 
    console.log(distanceFromHqInFeet(1));
    console.log(distanceTravelledInFeet());

    function calculatesFarePrice(start, dest) {
        let distance = Math.abs(start - dest) * 264;   
        if(distance <= 400) {
            return 0;
        } else if (distance > 400 && distance <= 2000) {
            return (distance - 400) * 0.02;
        } else if (distance > 2000 && distance <= 2500) {
            return 25;
        } else {
            return 'cannot travel that far';
        }
    }