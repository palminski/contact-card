const express = require('express');


const app = express();
require('./routes/htmlRoutes.js')(app);
const PORT = process.env.PORT || 3001;

//ASK ABT THESE
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('../client/dist'));

app.listen(PORT, function() {
    console.log(`
---------------------------------------
    Now Listening on port ${PORT}
---------------------------------------`)
})