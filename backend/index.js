const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.get('/', () => {

})

app.listen( () => {
    console.log(`Server runing in port: ${port}`)
})