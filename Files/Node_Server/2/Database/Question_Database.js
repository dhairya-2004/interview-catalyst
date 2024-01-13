const mongoose = require('mongoose');


const Question_database=async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/Interview-catalyst');
        console.log("Connected Question Database");

    }
    catch (e) {
        console.log(e);
    }
} 

module.exports=Question_database;