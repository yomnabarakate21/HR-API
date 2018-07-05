var config = require('config');
var app = require('./app');
//specify local host port on which the app is running.
const PORT = 8000 || process.env.PORT ;

app.listen(PORT, () => {
    console.log(`We are listening on port ${PORT}`);
});
