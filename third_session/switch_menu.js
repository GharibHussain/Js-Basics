process.stdout.write("Please selsect what you want to do: \n1 - Print hello \n2 - Print current date \n3 - End program \n");

process.stdin.on('data', function(inputfromUser){
    let option = Number(inputfromUser);
    
    

    if(option == 1){
        process.stdout.write("Hello!");
    } else if (option == 2) {

        let currentDate = new Date();

        process.stdout.write(currentDate.toString());
    } else if (option == 3) {
       process.exit();
    } else{
        SpeechRecognitionResultList.stdout.write("Invalid input!");
    }

    process.exit();
});