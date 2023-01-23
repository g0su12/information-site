const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

app.use(express.static('./assets'))

app.get('/', async (request, response) => {
    response.send( await readFile('./views/index.html', 'utf8') );
});

app.get('/about', async (request, response) => {
    response.send( await readFile('./views/about.html', 'utf8') );
});

app.get('/prevention', async (request, response) => {
    response.send( await readFile('./views/prevention.html', 'utf8') );
});

app.get('/contact-me', async (request, response) => {
    response.send( await readFile('./views/contact-me.html', 'utf8') );
});

app.use( async (request, response) => {
    response.status(404).send( await readFile('./views/404.html', 'utf8'));
});

app.listen(process.env.PORT || 3000, 
    () => console.log(`App available on http://localhost:3000`));

