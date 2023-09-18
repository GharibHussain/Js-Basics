process.stdout.write("Enter three numbers: ");

process.stdin.on('data', function(inputfromUser){
    inputNumbers = inputfromUser.toString().split(" ");
    
    let firstNumber = Number(inputNumbers[0]);
    let secondNumber = Number(inputNumbers[1]);
    let thirdNumber = Number(inputNumbers[2]);

    if (firstNumber == secondNumber && firstNumber == thirdNumber){
        process.stdout.write("You entered three matching numbers!");
    } else if (((firstNumber == secondNumber) && firstNumber != thirdNumber) || ((firstNumber == thirdNumber) && firstNumber != secondNumber)
      || ((thirdNumber == secondNumber) && firstNumber != thirdNumber) ){
        process.stdout.write("Third one doesn't fit!");
    }else{
        process.stdout.write("You entered three different numbers!");
    }
    process.exit();
});