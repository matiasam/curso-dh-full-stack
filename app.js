/* const path = require('path');
const express = require('express');
const app = express();

// Configuro el directorio de recursos estáticos
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.listen(process.env.PORT || 3000, () => { 
    console.log('-----------------------------------------------')
    console.log('Todo salio OK! Ya podés ir a http://localhost:3000');
    console.log('-----------------------------------------------')
}); */

const express = require('express');
const app = express();
app.use(express.static('public'));


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});


app.listen(process.env.PORT || 3000, () => { 
    console.log('-----------------------------------------------')
    console.log('Todo salio OK! Ya podés ir a http://localhost:3000');
    console.log('-----------------------------------------------')
});