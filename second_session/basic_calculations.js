const secNum = 23;

process.stdout.write("Enter your number: ");

process.stdin.on('data', function(inputFromUser){
    let userNumber = Number(inputFromUser);

    process.stdout.write(secNum + " + " + userNumber + " = " + (secNum + userNumber) + "\n");
    process.stdout.write(secNum + " - " + userNumber + " = " + (secNum - userNumber) + "\n");
    process.stdout.write(secNum + " * " + userNumber + " = " + (secNum * userNumber) + "\n");
    process.stdout.write(secNum + " / " + userNumber + " = " + (secNum / userNumber) + "\n");
    process.stdout.write(secNum + " % " + userNumber + " = " + (secNum % userNumber) + "\n");
    process.stdout.write(userNumber + "++ = " + (userNumber++) + "\n");
    process.stdout.write(userNumber + "-- = " + (userNumber--) + "\n");

    process.exit();
});