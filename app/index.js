const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Importar rotas
const indexRoutes = require('./src/routes/indexRoutes');

// Usar as rotas
app.use('/', indexRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
