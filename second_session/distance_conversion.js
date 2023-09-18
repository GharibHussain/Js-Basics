const q = 1.60934;

process.stdout.write("Enter the distance in Miles: ");

process.stdin.on("data", function (inputFromUser){
    let distanceInMiles = parseFloat(inputFromUser);

    let distanceInKilometers = distanceInMiles * q;

    process.stdout.write("Miles: ".padEnd(20) + distanceInMiles + "\n");
    process.stdout.write("Kilometrs: ".padEnd(20) + distanceInKilometers);

    process.exit();

});