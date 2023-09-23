

process.stdin.on('data', function(inputFromUser){
    // input numbers
    let inputArray = inputFromUser.toString().split(" ");

    let firstDayOfMonth = Number(inputArray[0]);
    let month = Number(inputArray[1]);
    let numberOfDays = Number(inputArray[2]);

    // days of the week
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // print the calender
    for (i = 1; i <= numberOfDays; i++ ){
        let dayCounter = (firstDayOfMonth % 7);

        process.stdout.write(daysOfTheWeek[dayCounter] + " " + i + ". " + month + " ");
        firstDayOfMonth++;

        // seperate weeks
        if (dayCounter == 0){
            console.log();
        }
    }
    
    process.exit();   
});