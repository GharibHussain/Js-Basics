

process.stdin.on('data', function(inputFromUser){
    let inputArray = inputFromUser.toString().split(" ");

    let firstDayOfMonth = Number(inputArray[0]);
    let month = Number(inputArray[1]);
    let numberOfDays = Number(inputArray[2]);

    console.log(firstDayOfMonth);
    console.log(month);
    console.log(numberOfDays);

    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    

    for (i = 1; i <= numberOfDays; i++ ){
        let dayCounter = (firstDayOfMonth % 7);

        process.stdout.write(daysOfTheWeek[dayCounter] + " " + i + ". " + month + " ");
        firstDayOfMonth++;

        if (dayCounter == 0){
            console.log();
        }


    }
    
    process.exit();
    
});