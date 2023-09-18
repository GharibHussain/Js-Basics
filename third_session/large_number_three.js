process.stdout.write("Enter three numbers: ");

process.stdin.on('data', function(inputfromUser){
    inputNumbers = inputfromUser.toString().split(" ");
    
    let firstNumber = Number(inputNumbers[0]);
    let secondNumber = Number(inputNumbers[1]);
    let thirdNumber = Number(inputNumbers[2]);

    let largestNumber = firstNumber;


    if(largestNumber <= secondNumber){
        largestNumber = secondNumber;
    }
    
    if(largestNumber <= thirdNumber){
        largestNumber = thirdNumber
    }

    process.stdout.write("The largest number is: " + largestNumber);

    process.exit();
});