const fs = require('fs');

function checkAndUpdate(){
    const storedDate = process.env.STORED_DATE;
    const storedQuote = process.env.STORED_QUOTE;
    const todayDate = new Date().toLocaleDateString();
    if(storedDate==todayDate){
        return storedQuote;
    }
    const newQuote = generateResponse();

    

}