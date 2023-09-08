const mongoose = require("mongoose");

class Database {

    constructor () {
        this.connect();
    }

connect() {
    mongoose.connect("")
.then(() => {
    console.log('Database connection succesful');
})
.catch((err) => {
    console.log('Database connection error' + err);
})          
}

}

module.exports = new Database();