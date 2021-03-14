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

app.post("/answer",(req,res) =>{
    let x = parseInt(req.body.first);
    let y = parseInt(req.body.second);
    let r = req.body.operator;
    console.log(x, y, r);;

    let solution = calculate(x, y, r);

    inputHistory.push(solution);
    console.log(inputHistory);

    //res.send(solution);
    res.sendStatus(200);

});

app.get("/answer",(req,res)=>{
    console.log(inputHistory[0]);

    res.send(inputHistory);
    //res.sendStatus(200);
    inputHistory.pop();
})



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