import app from './app';
require('dotenv').config()


console.log("listening on 5000")
console.log(process.env.MONGO_URL)
app.listen(process.env.APP_PORT || 5000);