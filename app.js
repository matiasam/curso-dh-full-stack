const path = require('path');
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

app.listen(3030, () => { 
    console.log('-----------------------------------------------')
    console.log('¡Todo joya! Ya podés ir a http://localhost:3030');
    console.log('-----------------------------------------------')
})

app.listen(process.env.port || 3000, function() {
    console.log('Servidor Corriendo')
})