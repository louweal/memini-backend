var mongoose = require('mongoose');
mongoose.set('debug', true);


// 'mongodb://localhost/todo-api'
mongoose.connect(process.env.MONGOLAB_URI || process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("DB connected"))
.catch((err) => console.log("DB connection error: " + err));

const db = mongoose.connection; 
db.on('error', error => console.log(error));
db.once('open', () => console.log("Connected to Mongoose"))

mongoose.Promise = Promise;

module.exports.Todo = require("./todo"); 