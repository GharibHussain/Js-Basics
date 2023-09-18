

process.stdout.write("Enter two number: ");

process.stdin.on('data', function(inputfromUser){
    inputNumbers = inputfromUser.toString().split(" ");
    
    let firstNumber = Number(inputNumbers[0]);
    let secondNumber = Number(inputNumbers[1]);

    if(firstNumber > secondNumber){
        process.stdout.write(firstNumber + " is greater than " + secondNumber);
    } if (secondNumber > firstNumber) {
        process.stdout.write(secondNumber + " is greater than " + firstNumber);
    } else {
        process.stdout.write(firstNumber + " is equal to " + secondNumber);
    }

    process.exit();
});