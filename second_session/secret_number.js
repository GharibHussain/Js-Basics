const secretNumber = 7;

process.stdout.write("Please enter a number: ");

process.stdin.on('data', function(userInput){
    let myNumber = Number(userInput);

    if ( secretNumber == myNumber+1 ){
        process.stdout.write("You won the game!");
    } else{
        process.stdout.write("You lost the game!");
    }

    process.exit();
});

