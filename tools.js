const mongoose = require('mongoose');
module.exports = {

    //function for checking if database is available and connected.
    checkdbConnection: function(url) {
        mongoose.connect(url);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            console.log('We are connected!')
        });
    }
}
