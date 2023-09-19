const util = require('util');


process.stdin.on('data', function(inputFromUser){
    let num = Number(inputFromUser);

    let counter = 1;

    while(counter <= 10){
        let outValue = util.format("*".padEnd(10) + "%d * %d = %d" + "*".padStart(10) + "\n", counter, num, counter*num);

        process.stdout.write(outValue);
        counter++;
    }

    process.exit();
});

process.stdout.write("Please enter a number: \n");