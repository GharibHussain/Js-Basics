process.stdout.write("Do you know how to program? (y/n) \n");

process.stdin.on("data", function(inputfromUser){

    let ans = inputfromUser.toString().trim().toLowerCase();

    if (ans == 'y'){
        process.stdout.write("Wow, good for you!");
    } else if (ans == 'n'){
        process.stdout.write("Try to learn it!");
    } else{
        process.stdout.write("Invalid input!");
    }

    process.exit();
});