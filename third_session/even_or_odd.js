
process.stdout.write("Enter a number: ");

process.stdin.on('data', function(inputfromUser){
    let num = Number(inputfromUser);

    let m = num % 2;

    if(m == 0){
        process.stdout.write(num + " is an even number!");
    } else {
        process.stdout.write(num + " is an odd number!");
    }

    process.exit();
});