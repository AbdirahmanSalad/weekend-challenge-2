const express = require('express');


// setting up app and port
const app = express();
const port = 5000;

// location of index.html
app.use(express.static('server/public'));




// npm start
app.listen(port, ()=>{
    console.log('Server is listening on... ', port);

}); 
