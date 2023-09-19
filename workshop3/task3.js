
process.stdin.on("data", function(inputFromUser){
    let str = inputFromUser.toString().trim();

    let index = 0;

    while(index < str.length){
        process.stdout.write(index + ". character is " + str.charAt(index) + ".\n");
        index++;
    }

    process.exit();
});

process.stdout.write("Please enter a string: \n");