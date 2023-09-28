const express = require('express');
const app = express();

app.use('/home/bar', function (request, response) {
    response.redirect('about');
});
app.use('/home/about', function (request, response) {
    response.send('<h1>About</h1>');
});

app.listen(3000);
