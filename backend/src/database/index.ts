const mongoose = require('mongoose');

class Database {
    mongoConnection!: Promise<typeof mongoose>;

    constructor() {
        this.mongo();
    }

    mongo() {
        this.mongoConnection = mongoose.connect('mongodb+srv://test123:test123@cluster0.pxxhz.mongodb.net/mongoCollector?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
        });
    }
}

export default new Database();