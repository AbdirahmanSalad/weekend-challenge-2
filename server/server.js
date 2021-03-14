const express = require('express');

// setting up app and port
const app = express();
const port = 5000;

//body parser
//app.use(bodyParser.urlencoded({ extended:true }));

// location of index.html
app.use(express.static('server/public'));




// npm start
app.listen(port, ()=>{
    console.log('Server is listening on... ', port);

}); 

function calculate(firstNumber, currentOperator, secondNumber) {
    let answer = Number(firstNumber, currentOperator, secondNumber);
    return answer;
}
