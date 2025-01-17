const mongoose = require('mongoose');
const connect = mongoose.connect(
    'mongodb://0.0.0.0/dbnameriz'
).then(() => {
    console.log('connected');
}).catch(err => {
    console.error('Connection error', err);
});

module.exports = connect;