const mongoose = require('mongoose')

const dbUrl = process.env.DB_CONNECT;
mongoose.connect(dbUrl)

// mongoose.connect("mongodb://localhost:27017/tranquilthaamara")
// mongoose.connect("mongodb+srv://root:root@atlascluster.8ruxxlq.mongodb.net/usertraining")


console.log("Mongo DB Connected")