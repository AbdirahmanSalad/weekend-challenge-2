const express = require('express');
const bodyParser = require('body-parser');
// setting up app and port
const app = express();
const port = 5000;
const inputHistory = [];

//body parser
app.use(bodyParser.urlencoded({ extended: true }));

// location of index.html
app.use(express.static('server/public'));

// npm start
app.listen(port, ()=>{
    console.log('Server is listening on... ', port);

}); 

app.post("/",(req,res) =>{
    let x = parseInt(req.body.firstNumber);
    let y = parseInt(req.body.secondNumber);
    let r = req.body.currentOperator;

    console.log(x, y, r);

    let answer = calculate(x, y, r)



    res.send(answer);
    res.sendStatus(200);
});

function calculate(x, y, r){
    let solution = 0;
    if (r === '*'){
        solution = (x * y);
    }
    if (r === '/') {
        solution = (x / y);
    }
    if (r === '-') {
        solution = (x - y);
    }
    if (r === '+') {
        solution = (x + y);
    }
    return solution;
}