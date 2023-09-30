
    let numOfShots = 0;
    const numOfRows = 5;
    const numOfCols = 5;

    let matrix = new Array(numOfRows);

    for (let i = 0; i < numOfRows; i++){
        matrix[i] = new Array(numOfCols);
    }

    for (let i = 0; i < numOfRows; i++){
        for (let j = 0; j < numOfCols; j++){
            matrix[i][j] = "-";
        }
    }

    let numberOfShips = 6;

    for (let i = 0; i < numberOfShips; i++){
        let randRow = parseInt(Math.random() * (numOfRows-1));
        let randCol = parseInt(Math.random() * (numOfCols-1));
    
        matrix[randRow][randCol] = "*";
    }

    console.table(matrix);

process.stdin.on('data', function(inputFromUser){
    // never declare varaibles here if it's previous value is important. [it is like a while(true) loop]

    let inputArray = inputFromUser.toString().trim().split(" ");

    let rowIndex = Number(inputArray[0]);
    let colIndex = Number(inputArray[1]);


        
    if (matrix[rowIndex][colIndex] == "*"){
        matrix[rowIndex][colIndex] ="-";
        numberOfShips -= 1;

        process.stdout.write("You hit a ship!\n");
        process.stdout.write("Enter x and y coordinates separated by space: ");
    } else {
            process.stdout.write("Miss!\n");
            process.stdout.write("Enter x and y coordinates separated by space: ");
    }

    numOfShots++;
    
    //process.stdout.write("ships left: " + numberOfShips + "\n");
           
    if (numberOfShips <= 0){
        process.stdout.write("All ships sunk! You needed " + numOfShots + " shots.\n");
        process.exit();
    }
    
});

process.stdout.write("Enter x and y coordinates separated by space: ");

