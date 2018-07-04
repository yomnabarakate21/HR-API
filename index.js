/*
var trial = new Employee({
    _id: new mongoose.Types.ObjectId(),
    name:{
        firstname: 'Passent',
        lastname: 'Ehab'
    },
    education: {
        university: 'AUC',
        to: myDate,
        from: myDate,
        grade: 3.9
    },
    email: 'yomna@gmail.com'
})
*/
/*
trial.save(function(err) {
    if (err) {
        throw err;
    }
    console.log('User created!');
});

*/

var app = require('./app');
//specify local host port on which the app is running.
const PORT = 8000 || process.env.PORT ;

app.listen(PORT, () => {
    console.log(`We are listening on port ${PORT}`);
})
