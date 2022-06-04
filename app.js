const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000 || process.env.PORT, () => console.log('El servidor se ha iniciado correctamente.'));