process.stdin.on('data', function(inputFromUser){
    let str = inputFromUser.toString().trim().toLowerCase();

    let last = str.length - 1;
    let first = 0;

    flag = true;

    while(first != last){
        if(str.charAt(first) != str.charAt(last)){
            flag = false;
        }

        first++;
        last--;
    }

    if (flag == true){
        process.stdout.write("The string is a Palyndrome!");
    } else {
        process.stdout.write("The string is NOT a  Palyndrome!");
    }

    process.exit();
});

process.stdout.write("Please enter a string: \n");